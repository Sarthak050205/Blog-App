import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Sign Up', slug: '/signup', active: !authStatus },
    { name: 'All Posts', slug: '/all-posts', active: authStatus },
    { name: 'Add Post', slug: '/add-post', active: authStatus },
  ]

  return (
    <header style={{ background: '#141414', borderBottom: '0.5px solid #222' }}>
      <Container>
        <nav className='flex items-center justify-between h-14'>
          <Link to='/' style={{ fontSize: '18px', fontWeight: '700', color: '#fff', letterSpacing: '-0.5px', textDecoration: 'none' }}>
            Mega<span style={{ color: '#7c6ef7' }}>Blog</span>
          </Link>
          <ul className='flex items-center gap-1'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    style={{ fontSize: '13px', color: '#999', padding: '6px 12px', borderRadius: '6px', background: 'transparent', border: 'none', cursor: 'pointer' }}
                    onMouseEnter={e => { e.target.style.color = '#fff'; e.target.style.background = '#1e1e1e' }}
                    onMouseLeave={e => { e.target.style.color = '#999'; e.target.style.background = 'transparent' }}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li style={{ marginLeft: '8px' }}>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header