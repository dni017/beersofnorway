// Importerer NavLink for navigasjon i React Router
import { NavLink, useNavigate } from 'react-router-dom'
// Importerer bilde for logoen i navbaren
import logoImg from '../assets/logo-viking.png'
// Importerer auth-context for å kunne logge ut brukeren
import { useAuth } from '../context/AuthContext.jsx'

// Definerer navigasjonskomponenten som brukes øverst på alle sider
function Nav() {
  // Henter innlogget bruker og logout-funksjonen fra AuthContext
  const { user, logout } = useAuth()
  // useNavigate brukes til å sende brukeren til en annen side etter logout
  const navigate = useNavigate()

  // Håndterer klikk på "Logg ut"-knappen og logger ut brukeren fra Firebase
  const handleLogout = async () => {
    try {
      await logout()
      // Sender brukeren til login-siden etter vellykket logout
      navigate('/login')
    } catch (error) {
      // Logger eventuelle feil i konsollen for debugging
      console.error('Feil ved logout:', error)
    }
  }

  // Returnerer JSX for navbaren, som gjør at den rendres i toppen av siden
  return (
    // site-header holder hele navigasjonsområdet øverst på siden
    <header className="site-header">
      {/* navbar er selve navigasjonslinjen med logo og lenker */}
      <nav className="navbar">
        {/* NavLink med to="/" gjør at både logo og tekst fungerer som hjem-knapp */}
        <NavLink to="/" className="logo-link">
          {/* Viser logo-bildet til venstre i navbaren */}
          <img src={logoImg} className="logo" alt="Beers of Norway logo" />
          {/* Viser navnet ved siden av logoen */}
          <span className="logo-text">Beersofnorway</span>
        </NavLink>

        {/* nav-links inneholder alle navigasjonsknappene til høyre */}
        <div className="nav-links">
          {/* Lenke til forsiden (Hjem) med aktiv-stil når path er "/" */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-btn active' : 'nav-btn'
            }
          >
            Hjem
          </NavLink>

          {/* Lenke til siden for Byer */}
          <NavLink
            to="/byer"
            className={({ isActive }) =>
              isActive ? 'nav-btn active' : 'nav-btn'
            }
          >
            Byer
          </NavLink>

          {/* Lenke til siden for Pubcrawl */}
          <NavLink
            to="/pubcrawl"
            className={({ isActive }) =>
              isActive ? 'nav-btn active' : 'nav-btn'
            }
          >
            Pubcrawl
          </NavLink>

          {/* Lenke til Om oss-siden */}
          <NavLink
            to="/omoss"
            className={({ isActive }) =>
              isActive ? 'nav-btn active' : 'nav-btn'
            }
          >
            Om oss
          </NavLink>

          {/* Viser Login og Signup når ingen bruker er innlogget */}
          {!user && (
            <>
              {/* Lenke til login-siden */}
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? 'nav-btn active' : 'nav-btn'
                }
              >
                Login
              </NavLink>

              {/* Lenke til signup-siden */}
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

          {/* Viser "Logg ut"-knapp når bruker er innlogget */}
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

// Eksporterer Nav-komponenten slik at den kan brukes i App.jsx
export default Nav