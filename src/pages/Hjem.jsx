// src/pages/Hjem.jsx

// Importerer React-hooks for state og side-effekter
import { useEffect, useState } from 'react'
// Importerer navigasjon og lenker fra React Router
import { useNavigate, Link } from 'react-router-dom'
// Importerer Firestore-funksjoner for å hente og oppdatere dokumenter
import { collection, getDocs, doc, updateDoc, increment } from 'firebase/firestore'
// Importerer Firestore-instansen fra prosjektets firebase-fil
import { db } from "../firebase/firebase"
// Importerer bildene som brukes på forsiden
import beerCheersImg from '../assets/øl-skål.png'
import olKartImg from '../assets/øl-kart.png'
// Importerer hovedstilen for siden
import '../App.css'

// Bydata med priser - hold synkronisert med de individuelle bysidene
const BYDATA = [
  { id: 'tromso', navn: 'Tromsø', prisKonservativ: 95, prisDyr: 145 },
  { id: 'bergen', navn: 'Bergen', prisKonservativ: 90, prisDyr: 140 },
  { id: 'oslo', navn: 'Oslo', prisKonservativ: 95, prisDyr: 160 },
  { id: 'trondheim', navn: 'Trondheim', prisKonservativ: 88, prisDyr: 140 },
  { id: 'stavanger', navn: 'Stavanger', prisKonservativ: 95, prisDyr: 148 },
  { id: 'kristiansand', navn: 'Kristiansand', prisKonservativ: 85, prisDyr: 130 },
]

// Regner ut snittprisen for hver by og returnerer de 3 billigste
const hentTreBilligste = (bydata) => {
  return bydata
    .map((by) => ({
      ...by,
      snittPris: Math.round((by.prisKonservativ + by.prisDyr) / 2),
    }))
    .sort((a, b) => a.snittPris - b.snittPris)
    .slice(0, 3)
}

// Definerer komponenten for forsiden
function Hjem() {
  // useNavigate brukes for å sende brukeren til en bestemt underside ved klikk
  const navigate = useNavigate()
  // Regner ut de tre billigste byene basert på prisdataen over
  const treBilligste = hentTreBilligste(BYDATA)

  // State som lagrer byene som hentes fra Firestore til avstemningen
  const [byer, setByer] = useState([])
  // State som holder styr på om data fortsatt lastes
  const [loading, setLoading] = useState(true)
  // State for eventuell feilmelding ved henting eller stemming
  const [error, setError] = useState('')

  // useEffect henter alle byene fra Firestore første gang komponenten vises
  useEffect(() => {
    // Asynkron funksjon som henter collectionen "favorittbyer" fra Firestore
    const hentFavorittbyer = async () => {
      try {
        // Henter alle dokumentene i collectionen
        const querySnapshot = await getDocs(collection(db, 'favorittbyer'))
        // Mapper dokumentene til vanlige JavaScript-objekter med id og felter
        const byerFraDb = querySnapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data(),
        }))
        // Lagrer dataene i state så de kan vises på siden
        setByer(byerFraDb)
      } catch (err) {
        // Logger feilen i konsollen og viser melding på siden
        console.error('Feil ved henting av favorittbyer:', err)
        setError('Kunne ikke hente favorittbyer fra Firebase.')
      } finally {
        // Stopper loading-status når kallene er ferdige
        setLoading(false)
      }
    }

    // Kaller funksjonen som henter bydata
    hentFavorittbyer()
  }, [])

  // Funksjon som øker stemmetallet på valgt by med 1 i Firestore
  const stemPåBy = async (byId) => {
    try {
      // Lager en referanse til dokumentet for byen det stemmes på
      const byRef = doc(db, 'favorittbyer', byId)

      // Oppdaterer feltet "stemmer" ved å øke det atomisk med 1
      await updateDoc(byRef, {
        stemmer: increment(1),
      })

      // Oppdaterer lokal state så brukeren ser ny verdi med en gang
      setByer((forrigeByer) =>
        forrigeByer.map((by) =>
          by.id === byId ? { ...by, stemmer: (by.stemmer || 0) + 1 } : by
        )
      )
    } catch (err) {
      // Logger feil og viser melding hvis stemmingen mislykkes
      console.error('Feil ved stemming på by:', err)
      setError('Kunne ikke registrere stemmen din. Prøv igjen.')
    }
  }

  // Returnerer JSX-en som rendrer hele forsiden
  return (
    <main
      className="page-wrapper"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 5, 6, 0.78), rgba(5, 5, 6, 0.84)), url(${olKartImg})`,
      }}
    >
      {/* Hero-seksjon */}
      <section className="hero-section">
        <div className="hero-text">
          <span className="hero-badge">Utforsk norsk ølkultur</span>

          <h1>Finn de beste pubene, byene og øl opplevelsene i Norge</h1>

          <p>
            Beers of Norway hjelper deg med å oppdage nye steder, planlegge
            pubcrawl og finne spennende ølmiljøer i norske byer.
          </p>

          <div className="hero-buttons">
            <Link to="/byer" className="primary-btn">
              Utforsk byer
            </Link>

            <Link to="/pubcrawl" className="secondary-btn">
              Planlegg pubcrawl
            </Link>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src={beerCheersImg}
            className="hero-image"
            alt="Personer som skåler med øl"
          />
        </div>
      </section>

      {/* Tre billigste byer - erstatter de gamle feature-kortene */}
      <section className="features-section">
        {treBilligste.map((by, index) => (
          <article
            key={by.id}
            className="feature-card"
            onClick={() => navigate(`/byer/${by.id}`)}
            style={{
              cursor: 'pointer',
              transition: 'transform 0.22s ease, box-shadow 0.22s ease',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 28px 70px rgba(0,0,0,0.75)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 22px 60px rgba(0,0,0,0.65)'
            }}
          >
            {/* Rangering og utforsk-knapp */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: index === 0 ? 'var(--accent)' : 'var(--text-muted)',
              }}>
                {index === 0 ? '🏆 Billigst' : `#${index + 1} Billigst`}
              </span>
              <span style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                padding: '0.2rem 0.6rem',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                Utforsk →
              </span>
            </div>

            {/* Bynavn */}
            <h2 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--text-main)' }}>
              {by.navn}
            </h2>

            {/* Snittpris */}
            <div style={{
              marginTop: 'auto',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}>
              <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Gj.snitt pris 0,5l
              </p>
              <p style={{ margin: '0.3rem 0 0', fontSize: '1.8rem', fontWeight: 700, color: 'var(--accent)' }}>
                {by.snittPris} kr
              </p>
              <p style={{ margin: '0.2rem 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Fra {by.prisKonservativ} kr til {by.prisDyr} kr
              </p>
            </div>
          </article>
        ))}
      </section>

      {/* Firebase-seksjon som lar brukeren stemme på favorittby */}
      <section
        className="content-section"
        style={{ marginTop: '3rem', maxWidth: '1200px' }}
      >
        {/* Viser seksjonens badge */}
        <span className="hero-badge">Stem på favorittby</span>
        {/* Viser seksjonens overskrift */}
        <h2 style={{ marginBottom: '1rem' }}>Hvilken norsk øl-by er din favoritt?</h2>

        {/* Viser lastemelding mens byene hentes */}
        {loading && <p>Laster byer...</p>}

        {/* Viser eventuell feilmelding */}
        {error && <p>{error}</p>}

        {/* Viser melding hvis ingen byer finnes i databasen */}
        {!loading && !error && byer.length === 0 && (
          <p>Ingen byer funnet i collection "favorittbyer".</p>
        )}

        {/* Viser byene i et grid når data er hentet */}
        {!loading && !error && byer.length > 0 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
              marginTop: '1.5rem',
            }}
          >
            {byer.map((by) => (
              // Hvert kort viser én by og stemmetallet dens
              <article
                key={by.id}
                className="feature-card"
                style={{ minHeight: '160px' }}
              >
                {/* Viser bynavnet */}
                <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>
                  {by.navn || 'Ukjent by'}
                </h3>

                {/* Viser antall stemmer registrert på byen */}
                <p style={{ marginBottom: '0.75rem' }}>
                  <strong>Stemmer:</strong> {by.stemmer ?? 0}
                </p>

                {/* Knapp som lar brukeren stemme på denne byen */}
                <button
                  type="button"
                  className="secondary-btn"
                  onClick={() => stemPåBy(by.id)}
                >
                  Stem på {by.navn || 'byen'}
                </button>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

// Eksporterer Hjem-komponenten slik at den kan brukes i App.jsx
export default Hjem