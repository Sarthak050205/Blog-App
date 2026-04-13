import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../appwrite/config'
import { Container } from '../components'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux'

export default function Post() {
  const [post, setPost] = useState(null)
  const { slug } = useParams()
  const navigate = useNavigate()

  const userData = useSelector((state) => state.auth.userData)
  const isAuthor = post && userData ? post.userId === userData.$id : false

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post)
        else navigate('/')
      })
    } else navigate('/')
  }, [slug, navigate])

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage)
        navigate('/')
      }
    })
  }

  return post ? (
    <div style={{ padding: '40px 0', minHeight: '80vh' }}>
      <Container>

        <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', marginBottom: '32px', border: '0.5px solid #222' }}>
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            style={{ width: '100%', maxHeight: '460px', objectFit: 'cover', display: 'block' }}
          />
          {isAuthor && (
            <div style={{ position: 'absolute', top: '16px', right: '16px', display: 'flex', gap: '8px' }}>
              <Link to={`/edit-post/${post.$id}`}>
                <button style={{ background: '#14381a', color: '#4ade80', border: '0.5px solid #1f4d27', borderRadius: '8px', padding: '8px 18px', fontSize: '13px', fontWeight: '500', cursor: 'pointer' }}>
                  Edit
                </button>
              </Link>
              <button
                onClick={deletePost}
                style={{ background: '#3b1414', color: '#f87171', border: '0.5px solid #4d1f1f', borderRadius: '8px', padding: '8px 18px', fontSize: '13px', fontWeight: '500', cursor: 'pointer' }}
              >
                Delete
              </button>
            </div>
          )}
        </div>

        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#fff', letterSpacing: '-1px', marginBottom: '16px', lineHeight: '1.2' }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '0.5px solid #222' }}>
            <div style={{ width: '32px', height: '32px', background: '#1e1660', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '600', color: '#7c6ef7' }}>
              {userData?.name?.charAt(0).toUpperCase() || 'A'}
            </div>
            <span style={{ fontSize: '13px', color: '#555' }}>
              {userData?.name || 'Author'} &nbsp;·&nbsp; {new Date(post.$createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>

          <div style={{ fontSize: '15px', color: '#aaa', lineHeight: '1.9' }}>
            {parse(post.content || '')}
          </div>
        </div>

      </Container>
    </div>
  ) : null
}