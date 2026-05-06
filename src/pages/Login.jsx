import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import olKartImg from '../assets/øl-kart.png'
import '../App.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      await login(email, password)
      navigate('/')
    } catch (err) {
      console.error(err)
      setError('Kunne ikke logge inn. Sjekk e-post og passord.')
    }
  }

  return (
    <main
      className="page-wrapper page-inner"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 5, 6, 0.78), rgba(5, 5, 6, 0.86)), url(${olKartImg})`,
      }}
    >
      <section className="content-section" style={{ maxWidth: '520px' }}>
        <span className="hero-badge">Login</span>
        <h1>Logg inn</h1>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            placeholder="E-post"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
            required
          />

          <input
            type="password"
            placeholder="Passord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
            required
          />

          <button type="submit" className="primary-btn" style={{ marginTop: '0.5rem' }}>
            Logg inn
          </button>
        </form>

        {error && (
          <p style={{ color: '#ffb3b3', marginTop: '1rem' }}>
            {error}
          </p>
        )}

        <p style={{ marginTop: '1.5rem', color: 'var(--text-soft)' }}>
          Har du ikke konto?{' '}
          <Link to="/signup" style={{ color: 'var(--accent)' }}>
            Opprett bruker
          </Link>
        </p>
      </section>
    </main>
  )
}

export default Login