// Importerer useState-hooken for å håndtere state i komponenten
import { useState } from 'react'
// Importerer Link for navigasjonslenker og useNavigate for å bytte side i koden
import { Link, useNavigate } from 'react-router-dom'
// Importerer egen auth-hook som gir tilgang til signup-funksjonen
import { useAuth } from '../context/AuthContext.jsx'
// Importerer bakgrunnsbildet som brukes på siden
import olKartImg from '../assets/øl-kart.png'
// Importerer global CSS-styling
import '../App.css'


function Signup() {
  // State som holder e-postadressen brukeren skriver inn
  const [email, setEmail] = useState('')
  // State som holder passordet brukeren skriver inn
  const [password, setPassword] = useState('')
  // State som holder det gjentatte passordet for å sjekke at de er like
  const [confirmPassword, setConfirmPassword] = useState('')
  // State for å vise feilmelding hvis noe går galt
  const [error, setError] = useState('')


  // Henter ut signup-funksjonen fra AuthContext
  const { signup } = useAuth()
  // Initialiserer navigeringsfunksjonen
  const navigate = useNavigate()


  // Funksjon som kjøres når skjemaet sendes inn
  const handleSubmit = async (e) => {
    // Hindrer at siden lastes på nytt ved innsending
    e.preventDefault()
    // Nullstiller tidligere feilmelding
    setError('')


    // Sjekker at de to passordene er like før vi sender data til Firebase
    if (password !== confirmPassword) {
      setError('Passordene er ikke like.')
      return
    }


    try {
      // Prøver å opprette en ny bruker i Firebase med e-post og passord
      await signup(email, password)
      // Sender brukeren til forsiden hvis registreringen gikk bra
      navigate('/')
    } catch (err) {
      // Logger feilen i konsollen for debugging
      console.error(err)
      // Viser en brukervennlig feilmelding på siden
      setError('Kunne ikke opprette bruker. Prøv igjen.')
    }
  }


  // Returnerer selve HTML/JSX-strukturen som vises på siden
  return (
    <main
      className="page-wrapper page-inner"
      // Setter bakgrunnsbilde med en mørk overlay for bedre lesbarhet
      style={{
        backgroundImage: `linear-gradient(rgba(5, 5, 6, 0.78), rgba(5, 5, 6, 0.86)), url(${olKartImg})`,
      }}
    >
      <section className="content-section" style={{ maxWidth: '520px' }}>
        {/* Liten "merkelapp" som markerer at dette er en signup-side */}
        <span className="hero-badge">Signup</span>
        {/* Hovedtittel på siden */}
        <h1>Opprett bruker</h1>


        {/* Selve registreringsskjemaet */}
        <form onSubmit={handleSubmit} className="auth-form">
          {/* Inputfelt for e-post - type="email" gir validering i nettleseren */}
          <input
            type="email"
            placeholder="E-post"
            value={email}
            // Oppdaterer state hver gang brukeren skriver
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
            // required gjør at skjemaet ikke kan sendes uten verdi
            required
          />


          {/* Inputfelt for passord - type="password" skjuler tegnene */}
          <input
            type="password"
            placeholder="Passord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
            required
          />


          {/* Inputfelt for å gjenta passordet - brukes til å sammenligne */}
          <input
            type="password"
            placeholder="Gjenta passord"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="auth-input"
            required
          />


          {/* Send-knapp som utløser handleSubmit */}
          <button type="submit" className="primary-btn" style={{ marginTop: '0.5rem' }}>
            Opprett bruker
          </button>
        </form>


        {/* Viser feilmelding kun hvis det finnes en feil */}
        {error && (
          <p style={{ color: '#ffb3b3', marginTop: '1rem' }}>
            {error}
          </p>
        )}


        {/* Lenke til login-siden for brukere som allerede har konto */}
        <p style={{ marginTop: '1.5rem', color: 'var(--text-soft)' }}>
          Har du allerede konto?{' '}
          {/* Link fra react-router bytter side uten å laste hele appen på nytt */}
          <Link to="/login" style={{ color: 'var(--accent)' }}>
            Logg inn
          </Link>
        </p>
      </section>
    </main>
  )
}


// Eksporterer komponenten slik at den kan brukes av router og andre filer
export default Signup