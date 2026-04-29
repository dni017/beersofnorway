import { useState } from 'react'
import styled from 'styled-components'

// Denne wrapperen gjør at navbaren ligger fast øverst på siden
const NavBar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  backdrop-filter: blur(14px);
  background: rgba(15, 23, 42, 0.75);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`

// Denne containeren holder innholdet pent sentrert og gir luft på sidene
const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

// Dette er logo-området til venstre i navbaren
const Logo = styled.a`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 800;
  text-decoration: none;
  letter-spacing: 0.5px;

  span {
    color: #f59e0b;
  }
`

// Denne knappen vises bare på mobil og brukes til å åpne/lukke menyen
const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`

// Denne menyen viser lenkene horisontalt på desktop og vertikalt på mobil
const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 72px;
    left: 0;
    width: 100%;
    flex-direction: column;
    padding: 1.5rem 0;
    background: rgba(15, 23, 42, 0.98);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  }
`

// Hver listeverdi holder én navigasjonslenke
const NavItem = styled.li``

// Selve lenkene i navbaren
const NavLink = styled.a`
  color: #e5e7eb;
  text-decoration: none;
  font-weight: 500;
  transition: 0.2s ease;

  &:hover {
    color: #f59e0b;
  }
`

// Denne knappen kan brukes som en ekstra CTA i navbaren
const NavButton = styled.a`
  background: linear-gradient(135deg, #f59e0b, #fb923c);
  color: #111827;
  padding: 0.7rem 1rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.95;
  }
`

// Dette er hovedkomponenten for navbaren
function Nav() {
  // Denne state-en holder styr på om mobilmenyen er åpen eller lukket
  const [isOpen, setIsOpen] = useState(false)

  return (
    <NavBar>
      <NavContainer>
        {/* Dette er logoen/navnet på nettsiden */}
        <Logo href="/">
          Beers <span>of Norway</span>
        </Logo>

        {/* Denne knappen åpner og lukker mobilmenyen */}
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </MenuButton>

        {/* Dette er selve menylenkene */}
        <NavLinks $isOpen={isOpen}>
          <NavItem>
            <NavLink href="/">Hjem</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/byer">Byer</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/pubcrawl">Pubcrawl</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/omoss">Om oss</NavLink>
          </NavItem>
          <NavItem>
            <NavButton href="/byer">Utforsk</NavButton>
          </NavItem>
        </NavLinks>
      </NavContainer>
    </NavBar>
  )
}

export default Nav