// src/pages/Bergen.jsx
// Detaljside for Bergen - viser utesteder med ølutvalg
import { useNavigate } from 'react-router-dom'
import olKartImg from '../assets/øl-kart.png'
import '../App.css'

// Utesteder i Bergen - legg til flere her etterhvert
const UTESTEDER = [
  {
    id: 1,
    navn: 'Terminus',
    type: 'Ølbar',
    beskrivelse: 'Klassisk ølbar ved jernbanestasjonen med stort utvalg av norske og importerte øl.',
    antallOl: 50,
    prisKonservativ: 95,
    prisDyr: 140,
  },
  {
    id: 2,
    navn: 'Apollon',
    type: 'Pub',
    beskrivelse: 'Legendarisk pub i Bergen sentrum med god stemning og live musikk.',
    antallOl: 25,
    prisKonservativ: 90,
    prisDyr: 130,
  },
  {
    id: 3,
    navn: 'Henrik',
    type: 'Bar',
    beskrivelse: 'Moderne bar med fokus på lokale og håndverkede øl fra Vestlandet.',
    antallOl: 30,
    prisKonservativ: 98,
    prisDyr: 145,
  },
]

function Bergen() {
  const navigate = useNavigate()

  return (
    <main
      className="page-wrapper"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 5, 6, 0.78), rgba(5, 5, 6, 0.86)), url(${olKartImg})`,
      }}
    >
      {/* Tilbake-knapp og overskrift */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 2.5rem' }}>
        <button
          onClick={() => navigate('/byer')}
          className="secondary-btn"
          style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}
        >
          ← Tilbake til byer
        </button>

        <span className="hero-badge">Bergen</span>
        <h1 style={{ marginTop: '1rem', fontSize: 'clamp(2rem, 3.3vw, 3.1rem)', color: 'var(--text-main)' }}>
          Utesteder i Bergen
        </h1>
        <p style={{ color: 'var(--text-soft)', marginTop: '0.75rem', fontSize: '1.02rem' }}>
          Oversikt over puber og barer med ølutvalg i Bergen sentrum.
        </p>
      </section>

      {/* Rutenett av utesteder */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }}
      >
        {UTESTEDER.map((sted) => (
          <article
            key={sted.id}
            className="feature-card"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
          >
            {/* Type-badge og navn */}
            <div>
              <span style={{
                display: 'inline-block',
                marginBottom: '0.6rem',
                padding: '0.2rem 0.7rem',
                borderRadius: '999px',
                background: 'rgba(245,183,84,0.18)',
                border: '1px solid rgba(245,183,84,0.4)',
                color: 'var(--accent)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}>
                {sted.type}
              </span>
              <h2 style={{ margin: 0, fontSize: '1.3rem', color: 'var(--text-main)' }}>
                {sted.navn}
              </h2>
            </div>

            {/* Beskrivelse */}
            <p style={{ margin: 0, color: 'var(--text-soft)', lineHeight: 1.7, fontSize: '0.96rem' }}>
              {sted.beskrivelse}
            </p>

            {/* Statistikk - antall øl og prisnivå */}
            <div style={{
              marginTop: 'auto',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              gap: '1.5rem',
            }}>
              <div>
                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Øl på menyen
                </p>
                <p style={{ margin: '0.2rem 0 0', fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent)' }}>
                  {sted.antallOl}+
                </p>
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Pris 0,5l
                </p>
                <p style={{ margin: '0.2rem 0 0', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-soft)' }}>
                  {sted.prisKonservativ}–{sted.prisDyr} kr
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Bergen