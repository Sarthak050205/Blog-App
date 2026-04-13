import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  if (posts.length === 0) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#fff', letterSpacing: '-1px' }}>
            Stories worth <span style={{ color: '#7c6ef7' }}>reading</span>
          </h1>
          <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
            Login to read and write posts
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ padding: '40px 0' }}>
      <Container>
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#fff', letterSpacing: '-1px' }}>
            Stories worth <span style={{ color: '#7c6ef7' }}>reading</span>
          </h1>
          <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
            Discover posts from writers around the world
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Home