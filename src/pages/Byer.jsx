// src/pages/Byer.jsx
// Oversiktsside for norske ølbyer
// Viser et rutenett av byer som brukeren kan klikke seg inn på
import { useNavigate } from 'react-router-dom'
import olKartImg from '../assets/øl-kart.png'
import '../App.css'

// Liste over byer - legg til flere her etterhvert
const BYER = [
  { id: 'tromso', navn: 'Tromsø', aktiv: true },
  { id: 'bergen', navn: 'Bergen', aktiv: true },
  { id: 'oslo', navn: 'Oslo', aktiv: true },
  { id: 'trondheim', navn: 'Trondheim', aktiv: true },
  { id: 'stavanger', navn: 'Stavanger', aktiv: true },
  { id: 'kristiansand', navn: 'Kristiansand', aktiv: true },
]

function Byer() {
  const navigate = useNavigate()

  // Naviger til bysiden hvis byen er aktiv, ellers gjør ingenting
  const handleByeKlikk = (by) => {
    if (by.aktiv) {
      navigate(`/byer/${by.id}`)
    }
  }

  return (
    <main
      className="page-wrapper"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 5, 6, 0.78), rgba(5, 5, 6, 0.86)), url(${olKartImg})`,
      }}
    >
      {/* Overskrift-seksjon */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 2.5rem' }}>
        <span className="hero-badge">Byguider</span>
        <h1 style={{ marginTop: '1rem', fontSize: 'clamp(2rem, 3.3vw, 3.1rem)', color: 'var(--text-main)' }}>
          Utforsk norske ølbyer
        </h1>
        <p style={{ color: 'var(--text-soft)', marginTop: '0.75rem', fontSize: '1.02rem' }}>
          Klikk på en by for å utforske puber, barer og ølopplevelser.
        </p>
      </section>

      {/* Rutenett av byer */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }}
      >
        {BYER.map((by) => (
          <article
            key={by.id}
            onClick={() => handleByeKlikk(by)}
            style={{
              position: 'relative',
              borderRadius: '22px',
              overflow: 'hidden',
              aspectRatio: '4/3',
              cursor: by.aktiv ? 'pointer' : 'default',
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow: '0 22px 60px rgba(0,0,0,0.65)',
              background: 'radial-gradient(circle at top left, #231b2e, #151118 58%, #070509)',
              transition: 'transform 0.22s ease, box-shadow 0.22s ease',
            }}
            onMouseEnter={(e) => {
              if (by.aktiv) {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 28px 70px rgba(0,0,0,0.75)'
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 22px 60px rgba(0,0,0,0.65)'
            }}
          >
            {/* Overlay-gradient for lesbarhet */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(5,5,6,0.85) 0%, rgba(5,5,6,0.3) 60%, transparent 100%)',
                zIndex: 1,
              }}
            />

            {/* Bynavn */}
            <div
              style={{
                position: 'absolute',
                bottom: '1.4rem',
                left: '1.4rem',
                zIndex: 2,
              }}
            >
              <h2 style={{
                margin: 0,
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                color: 'var(--text-main)',
                fontWeight: 700,
              }}>
                {by.navn}
              </h2>

              {/* Viser "Kommer snart" for byer som ikke er aktive ennå */}
              {!by.aktiv && (
                <span style={{
                  display: 'inline-block',
                  marginTop: '0.4rem',
                  padding: '0.2rem 0.7rem',
                  borderRadius: '999px',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'var(--text-muted)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  Kommer snart
                </span>
              )}

              {/* Viser "Utforsk" for aktive byer */}
              {by.aktiv && (
                <span style={{
                  display: 'inline-block',
                  marginTop: '0.4rem',
                  padding: '0.2rem 0.7rem',
                  borderRadius: '999px',
                  background: 'rgba(245,183,84,0.18)',
                  border: '1px solid rgba(245,183,84,0.4)',
                  color: 'var(--accent)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}>
                  Utforsk →
                </span>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* Responsivitet for mobil */}
      <style>{`
        @media (max-width: 900px) {
          .by-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .by-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}

export default Byer