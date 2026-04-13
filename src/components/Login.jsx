import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState('')

  const login = async (data) => {
    setError('')
    try {
      const session = await authService.login(data)
      if (session) {
        const userData = await authService.getCurrentUser()
        if (userData) dispatch(authLogin({ userData: {
          $id: userData.$id,
          name: userData.name,
          email: userData.email,
        }}))
        navigate('/')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '380px', background: '#141414', border: '0.5px solid #222', borderRadius: '16px', padding: '32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', letterSpacing: '-0.5px' }}>
            Mega<span style={{ color: '#7c6ef7' }}>Blog</span>
          </h1>
          <p style={{ fontSize: '13px', color: '#666', marginTop: '6px' }}>Sign in to your account</p>
        </div>

        {error && (
          <div style={{ background: '#3b1414', border: '0.5px solid #4d1f1f', borderRadius: '8px', padding: '10px 14px', marginBottom: '16px', fontSize: '13px', color: '#f87171' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(login)}>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ fontSize: '12px', color: '#888', display: 'block', marginBottom: '5px' }}>Email</label>
            <input
              style={{ width: '100%', background: '#0f0f0f', border: '0.5px solid #2a2a2a', borderRadius: '8px', padding: '10px 12px', fontSize: '13px', color: '#e8e8e8', outline: 'none' }}
              placeholder='you@example.com'
              type='email'
              {...register('email', { required: true })}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '12px', color: '#888', display: 'block', marginBottom: '5px' }}>Password</label>
            <input
              style={{ width: '100%', background: '#0f0f0f', border: '0.5px solid #2a2a2a', borderRadius: '8px', padding: '10px 12px', fontSize: '13px', color: '#e8e8e8', outline: 'none' }}
              placeholder='••••••••'
              type='password'
              {...register('password', { required: true })}
            />
          </div>
          <button
            type='submit'
            style={{ width: '100%', background: '#7c6ef7', color: '#fff', border: 'none', borderRadius: '8px', padding: '11px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}
          >
            Sign in
          </button>
        </form>

        <p style={{ textAlign: 'center', fontSize: '12px', color: '#555', marginTop: '16px' }}>
          Don't have an account?{' '}
          <Link to='/signup' style={{ color: '#7c6ef7', textDecoration: 'none' }}>Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login