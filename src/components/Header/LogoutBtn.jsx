import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch()

  const handleLogout = async () => {
    authService.logout().then(() => {
      dispatch(logout())
    }).catch((error) => {
      console.error('Logout failed:', error)
    })
  }

  return (
    <button
      onClick={handleLogout}
      style={{ fontSize: '13px', background: 'transparent', border: '0.5px solid #333', color: '#ccc', padding: '6px 14px', borderRadius: '6px', cursor: 'pointer' }}
      onMouseEnter={e => e.target.style.borderColor = '#7c6ef7'}
      onMouseLeave={e => e.target.style.borderColor = '#333'}
    >
      Logout
    </button>
  )
}

export default LogoutBtn