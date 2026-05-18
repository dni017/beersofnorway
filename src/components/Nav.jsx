// Importerer NavLink for navigasjon mellom sidene
// og useNavigate for å kunne sende brukeren videre med kode
import { NavLink, useNavigate } from 'react-router-dom'

// Importerer logo-bildet som skal brukes i navbaren
import logoImg from '../assets/logo-viking.png'

// Importerer autentisering slik at vi kan sjekke innlogging
// og logge ut brukeren ved behov
import { useAuth } from '../context/AuthContext.jsx'

// Navigasjonskomponent som vises øverst på alle sider
function Nav() {
  // Henter innlogget bruker og logout-funksjon
  const { user, logout } = useAuth()

  // Brukes for å navigere programmatisk etter logout
  const navigate = useNavigate()

  // Logger ut brukeren og sender dem tilbake til login-siden
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
        {/* Logoen er en klikkbar lenke til forsiden.
            Siden den bare inneholder et bilde, får den aria-label for tilgjengelighet. */}
        <NavLink to="/" className="logo-link" aria-label="Gå til forsiden">
          <img src={logoImg} className="logo" alt="Beers of Norway logo" />
        </NavLink>

        {/* Samler navigasjonslenkene til høyre i navbaren */}
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

          {/* Viser Login og Signup når ingen bruker er logget inn */}
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

          {/* Viser logout-knapp når bruker er logget inn */}
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

// Eksporterer komponenten så den kan brukes i App.jsx
export default Nav