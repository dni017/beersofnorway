// src/pages/Hjem.jsx
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from "../firebase/firebase"
import beerCheersImg from '../assets/øl-skål.png'
import olKartImg from '../assets/øl-kart.png'
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

function Hjem() {
  const navigate = useNavigate()
  const treBilligste = hentTreBilligste(BYDATA)

  const [biler, setBiler] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const hentBiler = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'biler'))
        const bilerFraDb = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setBiler(bilerFraDb)
      } catch (err) {
        console.error('Feil ved henting av biler:', err)
        setError('Kunne ikke hente biler fra Firebase.')
      } finally {
        setLoading(false)
      }
    }

    hentBiler()
  }, [])

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

      {/* Firebase test-seksjon - biler fra Firestore */}
      <section
        className="content-section"
        style={{ marginTop: '3rem', maxWidth: '1200px' }}
      >
        <span className="hero-badge">Firebase test</span>
        <h2 style={{ marginBottom: '1rem' }}>Biler fra Firestore</h2>

        {loading && <p>Laster biler...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && biler.length === 0 && (
          <p>Ingen biler funnet i collection "biler".</p>
        )}

        {!loading && !error && biler.length > 0 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
              marginTop: '1.5rem',
            }}
          >
            {biler.map((bil) => (
              <article
                key={bil.id}
                className="feature-card"
                style={{ minHeight: '160px' }}
              >
                <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>
                  {bil.navn || bil.merke || 'Bil uten navn'}
                </h3>

                <p><strong>ID:</strong> {bil.id}</p>

                {bil.merke && <p><strong>Merke:</strong> {bil.merke}</p>}
                {bil.modell && <p><strong>Modell:</strong> {bil.modell}</p>}
                {bil.pris && <p><strong>Pris:</strong> {bil.pris}</p>}
                {bil.år && <p><strong>År:</strong> {bil.år}</p>}
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Hjem