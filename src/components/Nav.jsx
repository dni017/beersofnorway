// src/components/Nav.jsx
import { NavLink, useNavigate } from 'react-router-dom'
import logoImg from '../assets/logo-viking.png'
import { useAuth } from '../context/AuthContext.jsx'

function Nav() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.error('Feil ved logout:', error)
    }
  }

  return (
    <header className="site-header">
      <nav className="navbar">
        <NavLink to="/" className="logo-link">
          <img src={logoImg} className="logo" alt="Beers of Norway logo" />
        </NavLink>

        <div className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-btn active' : 'nav-btn'
            }
          >
            Hjem
          </NavLink>

          <NavLink
            to="/byer"
            className={({ isActive }) =>
              isActive ? 'nav-btn active' : 'nav-btn'
            }
          >
            Byer
          </NavLink>

          <NavLink
            to="/pubcrawl"
            className={({ isActive }) =>
              isActive ? 'nav-btn active' : 'nav-btn'
            }
          >
            Pubcrawl
          </NavLink>

          <NavLink
            to="/omoss"
            className={({ isActive }) =>
              isActive ? 'nav-btn active' : 'nav-btn'
            }
          >
            Om oss
          </NavLink>

          {!user && (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? 'nav-btn active' : 'nav-btn'
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? 'nav-btn active' : 'nav-btn'
                }
              >
                Signup
              </NavLink>
            </>
          )}

          {user && (
            <button type="button" onClick={handleLogout} className="nav-btn">
              Logg ut
            </button>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Nav