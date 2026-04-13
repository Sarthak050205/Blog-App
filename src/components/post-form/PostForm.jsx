import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { RTE, Select } from '..'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || '',
      slug: post?.$id || '',
      content: post?.content || '',
      status: post?.status || 'active',
    },
  })

  const navigate = useNavigate()
  const userData = useSelector((state) => state.auth.userData)

  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null
      if (file) appwriteService.deleteFile(post.featuredImage)
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        status: data.status === 'active',
        featuredImage: file ? file.$id : undefined,
      })
      if (dbPost) navigate(`/post/${dbPost.$id}`)
    } else {
      const file = await appwriteService.uploadFile(data.image[0])
      if (file) {
        data.featuredImage = file.$id
        const dbPost = await appwriteService.createPost({
          ...data,
          status: data.status === 'active',
          userId: userData.$id,
        })
        if (dbPost) navigate(`/post/${dbPost.$id}`)
        else await appwriteService.deleteFile(file.$id)
      }
    }
  }

  const slugTransform = useCallback((value) => {
    if (value && typeof value === 'string')
      return value.trim().toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, '-')
        .replace(/\s/g, '-')
    return ''
  }, [])

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title') {
        setValue('slug', slugTransform(value.title), { shouldValidate: true })
      }
    })
    return () => subscription.unsubscribe()
  }, [watch, slugTransform, setValue])

  const inputStyle = {
    width: '100%',
    background: '#0f0f0f',
    border: '0.5px solid #2a2a2a',
    borderRadius: '8px',
    padding: '10px 12px',
    fontSize: '13px',
    color: '#e8e8e8',
    outline: 'none',
  }

  const labelStyle = {
    fontSize: '12px',
    color: '#888',
    display: 'block',
    marginBottom: '5px',
  }

  return (
    <div style={{ padding: '40px 0', minHeight: '80vh' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>

        <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#fff', marginBottom: '24px', letterSpacing: '-0.5px' }}>
          {post ? 'Edit Post' : 'New Post'}
        </h2>

        <form onSubmit={handleSubmit(submit)}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
            <div>
              <label style={labelStyle}>Title</label>
              <input
                style={inputStyle}
                placeholder='Post title...'
                {...register('title', { required: true })}
              />
            </div>
            <div>
              <label style={labelStyle}>Slug</label>
              <input
                style={{ ...inputStyle, color: '#7c6ef7' }}
                placeholder='post-slug'
                {...register('slug', { required: true })}
                onInput={(e) => setValue('slug', slugTransform(e.currentTarget.value), { shouldValidate: true })}
              />
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Content</label>
            <RTE
              name='content'
              control={control}
              defaultValue={getValues('content')}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
            <div>
              <label style={labelStyle}>Featured Image</label>
              <div style={{ background: '#0f0f0f', border: '0.5px dashed #333', borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
                <p style={{ fontSize: '12px', color: '#555', marginBottom: '4px' }}>Drop image here</p>
                <p style={{ fontSize: '11px', color: '#7c6ef7' }}>or click to browse</p>
                <input
                  type='file'
                  accept='image/png, image/jpg, image/jpeg, image/gif'
                  style={{ marginTop: '10px', fontSize: '12px', color: '#666', width: '100%' }}
                  {...register('image', { required: !post })}
                />
              </div>
              {post && (
                <div style={{ marginTop: '10px', borderRadius: '8px', overflow: 'hidden', border: '0.5px solid #222' }}>
                  <img
                    src={appwriteService.getFileView(post.featuredImage)}
                    alt={post.title}
                    style={{ width: '100%', objectFit: 'cover' }}
                  />
                </div>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label style={labelStyle}>Status</label>
                <select
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  {...register('status', { required: true })}
                >
                  <option value='active'>Active</option>
                  <option value='inactive'>Inactive</option>
                </select>
              </div>
              <button
                type='submit'
                style={{ marginTop: 'auto', background: post ? '#14381a' : '#7c6ef7', color: post ? '#4ade80' : '#fff', border: post ? '0.5px solid #1f4d27' : 'none', borderRadius: '8px', padding: '12px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}
              >
                {post ? 'Update Post' : 'Publish Post'}
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}