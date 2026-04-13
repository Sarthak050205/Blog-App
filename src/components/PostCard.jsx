import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} style={{ textDecoration: 'none' }}>
      <div
        style={{ background: '#141414', border: '0.5px solid #222', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer', transition: 'border-color 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.borderColor = '#7c6ef7'}
        onMouseLeave={e => e.currentTarget.style.borderColor = '#222'}
      >
        <div style={{ height: '180px', overflow: 'hidden' }}>
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ padding: '14px' }}>
          <div style={{ fontSize: '10px', background: '#1e1660', color: '#7c6ef7', padding: '2px 8px', borderRadius: '4px', display: 'inline-block', marginBottom: '8px', fontWeight: '500' }}>
            Blog
          </div>
          <h2 style={{ fontSize: '14px', fontWeight: '600', color: '#e8e8e8', lineHeight: '1.4' }}>
            {title}
          </h2>
        </div>
      </div>
    </Link>
  )
}

export default PostCard