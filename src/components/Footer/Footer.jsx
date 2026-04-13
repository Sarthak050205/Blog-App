import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer style={{ background: '#141414', borderTop: '0.5px solid #222', padding: '48px 0 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px', marginBottom: '48px' }}>

          <div>
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#fff', letterSpacing: '-0.5px', marginBottom: '12px' }}>
              Mega<span style={{ color: '#7c6ef7' }}>Blog</span>
            </h2>
            <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.7', maxWidth: '260px' }}>
              A place to share your thoughts, ideas, and stories with the world.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '11px', fontWeight: '500', color: '#444', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Company
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Features', 'Pricing', 'Affiliate Program', 'Press Kit'].map((item) => (
                <li key={item}>
                  <Link to='/' style={{ fontSize: '13px', color: '#666', textDecoration: 'none' }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = '#666'}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '11px', fontWeight: '500', color: '#444', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Support
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Account', 'Help', 'Contact Us', 'Customer Support'].map((item) => (
                <li key={item}>
                  <Link to='/' style={{ fontSize: '13px', color: '#666', textDecoration: 'none' }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = '#666'}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '11px', fontWeight: '500', color: '#444', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Legals
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Terms & Conditions', 'Privacy Policy', 'Licensing'].map((item) => (
                <li key={item}>
                  <Link to='/' style={{ fontSize: '13px', color: '#666', textDecoration: 'none' }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = '#666'}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div style={{ borderTop: '0.5px solid #222', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ fontSize: '12px', color: '#444' }}>
            © 2026 MegaBlog. All rights reserved.
          </p>
          <p style={{ fontSize: '12px', color: '#444' }}>
            Built with <span style={{ color: '#7c6ef7' }}>React</span> & <span style={{ color: '#7c6ef7' }}>Appwrite</span>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer