// src/pages/PubcrawlOslo.jsx
// Pubcrawl-side for Oslo - viser forskjellige pubcrawl-opplegg
import { useNavigate } from 'react-router-dom'
import olKartImg from '../assets/øl-kart.png'
import '../App.css'

const PUBCRAWLS = [
  {
    id: 1,
    navn: 'Billigst pubcrawl',
    type: 'Budsjett',
    beskrivelse: 'Oslo er dyrt, men denne runden tar deg gjennom de rimeligste alternativene i sentrum.',
    antallStopp: 4,
    estimertPris: '250-350 kr',
    varighet: '3-4 timer',
    stoppesteder: ['Internasjonalen', 'Crow Bar', 'Grünerløkka Brygghus', 'Tim Wendelboe'],
  },
  {
    id: 2,
    navn: 'Pub golf',
    type: 'Spill',
    beskrivelse: 'Pub golf gjennom Oslos beste barer. Scorekort deles ut ved start - lavest score vinner!',
    antallStopp: 9,
    estimertPris: '500-700 kr',
    varighet: '4-5 timer',
    stoppesteder: ['Crow Bar', 'Internasjonalen', 'Grünerløkka Brygghus', 'Lorry', 'Kulturhuset', 'The Scotsman', 'Justisen', 'Olympen', 'Bar Boca'],
  },
  {
    id: 3,
    navn: 'Grünerløkka-runden',
    type: 'Klassiker',
    beskrivelse: 'Start på Grünerløkka og utforsk Oslos hippeste nabolag med de beste barene.',
    antallStopp: 4,
    estimertPris: '350-500 kr',
    varighet: '3-4 timer',
    stoppesteder: ['Grünerløkka Brygghus', 'Crow Bar', 'Kulturhuset', 'Bar Boca'],
  },
  {
    id: 4,
    navn: 'Craft beer runde',
    type: 'Ølguide',
    beskrivelse: 'Oslo har en av Norges beste craft beer-scener. Denne runden tar deg gjennom det beste.',
    antallStopp: 3,
    estimertPris: '350-500 kr',
    varighet: '2-3 timer',
    stoppesteder: ['Crow Bar', 'Grünerløkka Brygghus', 'Internasjonalen'],
  },
  {
    id: 5,
    navn: 'Karl Johan-runden',
    type: 'Klassiker',
    beskrivelse: 'En klassisk tur langs Karl Johan med stopp på de mest ikoniske barene i Oslo sentrum.',
    antallStopp: 5,
    estimertPris: '400-550 kr',
    varighet: '4-5 timer',
    stoppesteder: ['The Scotsman', 'Justisen', 'Lorry', 'Olympen', 'Internasjonalen'],
  },
  {
    id: 6,
    navn: 'Studentkvelden',
    type: 'Student',
    beskrivelse: 'Populære studentbarer i Oslo med gode priser og god stemning.',
    antallStopp: 4,
    estimertPris: '200-300 kr',
    varighet: '3-4 timer',
    stoppesteder: ['Kulturhuset', 'Internasjonalen', 'Crow Bar', 'Bar Boca'],
  },
]

function PubcrawlOslo() {
  const navigate = useNavigate()

  return (
    <main
      className="page-wrapper"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 5, 6, 0.78), rgba(5, 5, 6, 0.86)), url(${olKartImg})`,
      }}
    >
      <section style={{ maxWidth: '1200px', margin: '0 auto 2.5rem' }}>
        <button onClick={() => navigate('/pubcrawl')} className="secondary-btn" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          ← Tilbake til pubcrawl
        </button>
        <span className="hero-badge">Oslo</span>
        <h1 style={{ marginTop: '1rem', fontSize: 'clamp(2rem, 3.3vw, 3.1rem)', color: 'var(--text-main)' }}>Oslo pubcrawl</h1>
        <p style={{ color: 'var(--text-soft)', marginTop: '0.75rem', fontSize: '1.02rem' }}>Velg et pubcrawl-opplegg og legg opp kvelden din i Oslo.</p>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        {PUBCRAWLS.map((crawl) => (
          <article key={crawl.id} className="feature-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div>
              <span style={{ display: 'inline-block', marginBottom: '0.6rem', padding: '0.2rem 0.7rem', borderRadius: '999px', background: 'rgba(245,183,84,0.18)', border: '1px solid rgba(245,183,84,0.4)', color: 'var(--accent)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{crawl.type}</span>
              <h2 style={{ margin: 0, fontSize: '1.3rem', color: 'var(--text-main)' }}>{crawl.navn}</h2>
            </div>
            <p style={{ margin: 0, color: 'var(--text-soft)', lineHeight: 1.7, fontSize: '0.96rem' }}>{crawl.beskrivelse}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {crawl.stoppesteder.map((stopp, index) => (
                <span key={index} style={{ padding: '0.2rem 0.6rem', borderRadius: '999px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-muted)', fontSize: '0.75rem' }}>{stopp}</span>
              ))}
            </div>
            <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '1.5rem' }}>
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

export default PubcrawlOslo