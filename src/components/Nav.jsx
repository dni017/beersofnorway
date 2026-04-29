import { NavLink } from 'react-router-dom'
import logoImg from '../assets/logo-viking.png'

function Nav() {
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
        </div>
      </nav>
    </header>
  )
}

export default Nav