// src/pages/PubcrawlBergen.jsx
// Pubcrawl-side for Bergen - viser forskjellige pubcrawl-opplegg
import { useNavigate } from 'react-router-dom'
import olKartImg from '../assets/øl-kart.png'
import '../App.css'

// Pubcrawl-forslag for Bergen - legg til flere her etterhvert
const PUBCRAWLS = [
  {
    id: 1,
    navn: 'Billigst pubcrawl',
    type: 'Budsjett',
    beskrivelse: 'Få mest mulig ut av kvelden i Bergen uten å bruke for mye. Vi tar deg gjennom de rimeligste barene i sentrum.',
    antallStopp: 4,
    estimertPris: '200-300 kr',
    varighet: '3-4 timer',
    stoppesteder: ['Terminus', 'Apollon', 'Henrik', 'Garage'],
  },
  {
    id: 2,
    navn: 'Pub golf',
    type: 'Spill',
    beskrivelse: 'Klassisk pub golf langs Bergens beste barer. Scorekort deles ut ved start - lavest score vinner kvelden!',
    antallStopp: 9,
    estimertPris: '400-600 kr',
    varighet: '4-5 timer',
    stoppesteder: ['Terminus', 'Apollon', 'Henrik', 'Garage', 'Rick', 'Naboen', 'Knappenålen', 'Altona', 'Wesselstuen'],
  },
  {
    id: 3,
    navn: 'Bryggen-runden',
    type: 'Klassiker',
    beskrivelse: 'Start på Bryggen og jobb deg gjennom Bergens mest ikoniske barer langs havnen. En klassisk Bergen-kveld.',
    antallStopp: 4,
    estimertPris: '300-450 kr',
    varighet: '3-4 timer',
    stoppesteder: ['Bryggeloftet', 'Altona', 'Wesselstuen', 'Terminus'],
  },
  {
    id: 4,
    navn: 'Craft beer runde',
    type: 'Ølguide',
    beskrivelse: 'Utforsk Bergens voksende craft beer-scene. Fokus på lokale og spennende håndverksøl fra Vestlandet.',
    antallStopp: 3,
    estimertPris: '300-450 kr',
    varighet: '2-3 timer',
    stoppesteder: ['Henrik', 'Apollon', 'Terminus'],
  },
  {
    id: 5,
    navn: 'Studentkvelden',
    type: 'Student',
    beskrivelse: 'De mest populære stedene blant studenter i Bergen med fokus på pris og stemning.',
    antallStopp: 4,
    estimertPris: '150-250 kr',
    varighet: '3-4 timer',
    stoppesteder: ['Garage', 'Apollon', 'Rick', 'Henrik'],
  },
  {
    id: 6,
    navn: 'Regnværs-runden',
    type: 'Opplevelse',
    beskrivelse: 'Bergen og regn hører sammen. Denne runden tar deg gjennom koselige barer perfekt for en våt Bergen-kveld.',
    antallStopp: 4,
    estimertPris: '250-400 kr',
    varighet: '3-4 timer',
    stoppesteder: ['Wesselstuen', 'Altona', 'Terminus', 'Apollon'],
  },
]

function PubcrawlBergen() {
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
          onClick={() => navigate('/pubcrawl')}
          className="secondary-btn"
          style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}
        >
          ← Tilbake til pubcrawl
        </button>

        <span className="hero-badge">Bergen</span>
        <h1 style={{ marginTop: '1rem', fontSize: 'clamp(2rem, 3.3vw, 3.1rem)', color: 'var(--text-main)' }}>
          Bergen pubcrawl
        </h1>
        <p style={{ color: 'var(--text-soft)', marginTop: '0.75rem', fontSize: '1.02rem' }}>
          Velg et pubcrawl-opplegg og legg opp kvelden din i Bergen.
        </p>
      </section>

      {/* Rutenett av pubcrawl-forslag */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }}
      >
        {PUBCRAWLS.map((crawl) => (
          <article
            key={crawl.id}
            className="feature-card"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
          >
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
                {crawl.type}
              </span>
              <h2 style={{ margin: 0, fontSize: '1.3rem', color: 'var(--text-main)' }}>
                {crawl.navn}
              </h2>
            </div>

            <p style={{ margin: 0, color: 'var(--text-soft)', lineHeight: 1.7, fontSize: '0.96rem' }}>
              {crawl.beskrivelse}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {crawl.stoppesteder.map((stopp, index) => (
                <span key={index} style={{
                  padding: '0.2rem 0.6rem',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'var(--text-muted)',
                  fontSize: '0.75rem',
                }}>
                  {stopp}
                </span>
              ))}
            </div>

            <div style={{
              marginTop: 'auto',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              gap: '1.5rem',
            }}>
              <div>
                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Antall stopp</p>
                <p style={{ margin: '0.2rem 0 0', fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent)' }}>{crawl.antallStopp}</p>
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Estimert pris</p>
                <p style={{ margin: '0.2rem 0 0', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-soft)' }}>{crawl.estimertPris}</p>
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Varighet</p>
                <p style={{ margin: '0.2rem 0 0', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-soft)' }}>{crawl.varighet}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default PubcrawlBergen