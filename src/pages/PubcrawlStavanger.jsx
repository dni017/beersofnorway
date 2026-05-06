// src/pages/PubcrawlStavanger.jsx
// Pubcrawl-side for Stavanger - viser forskjellige pubcrawl-opplegg
import { useNavigate } from 'react-router-dom'
import olKartImg from '../assets/øl-kart.png'
import '../App.css'

const PUBCRAWLS = [
  {
    id: 1,
    navn: 'Billigst pubcrawl',
    type: 'Budsjett',
    beskrivelse: 'Stavanger på budsjett! Denne runden tar deg gjennom de rimeligste barene i sentrum.',
    antallStopp: 4,
    estimertPris: '200-300 kr',
    varighet: '3-4 timer',
    stoppesteder: ['Cardinal', 'Gaffel og Karaffel', 'Sjøhuset', 'Checkpoint Charlie'],
  },
  {
    id: 2,
    navn: 'Pub golf',
    type: 'Spill',
    beskrivelse: 'Pub golf gjennom Stavangers beste barer. Ta med scorekort og gjør deg klar for en morsom kveld.',
    antallStopp: 9,
    estimertPris: '400-580 kr',
    varighet: '4-5 timer',
    stoppesteder: ['Cardinal', 'Gaffel og Karaffel', 'Sjøhuset', 'Checkpoint Charlie', 'Broremann', 'Ølhuset', 'Newsman', 'Cementen', 'Strøget'],
  },
  {
    id: 3,
    navn: 'Gamle Stavanger-runden',
    type: 'Klassiker',
    beskrivelse: 'Start i Gamle Stavanger og utforsk de mest sjarmerende barene i byens historiske kjerneområde.',
    antallStopp: 4,
    estimertPris: '300-430 kr',
    varighet: '3-4 timer',
    stoppesteder: ['Ølhuset', 'Broremann', 'Cardinal', 'Gaffel og Karaffel'],
  },
  {
    id: 4,
    navn: 'Craft beer runde',
    type: 'Ølguide',
    beskrivelse: 'Utforsk Stavangers beste håndverksøl på denne guidede ølrunden gjennom byens beste barer.',
    antallStopp: 3,
    estimertPris: '290-420 kr',
    varighet: '2-3 timer',
    stoppesteder: ['Gaffel og Karaffel', 'Ølhuset', 'Cardinal'],
  },
  {
    id: 5,
    navn: 'Havne-runden',
    type: 'Opplevelse',
    beskrivelse: 'En tur langs Stavangers vakre havn med stopp på de beste barene med utsikt over sjøen.',
    antallStopp: 4,
    estimertPris: '300-450 kr',
    varighet: '3-4 timer',
    stoppesteder: ['Sjøhuset', 'Cementen', 'Strøget', 'Newsman'],
  },
  {
    id: 6,
    navn: 'Studentkvelden',
    type: 'Student',
    beskrivelse: 'De mest populære stedene blant studenter i Stavanger med fokus på pris og god stemning.',
    antallStopp: 4,
    estimertPris: '150-250 kr',
    varighet: '3-4 timer',
    stoppesteder: ['Checkpoint Charlie', 'Cardinal', 'Broremann', 'Gaffel og Karaffel'],
  },
]

function PubcrawlStavanger() {
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
        <span className="hero-badge">Stavanger</span>
        <h1 style={{ marginTop: '1rem', fontSize: 'clamp(2rem, 3.3vw, 3.1rem)', color: 'var(--text-main)' }}>Stavanger pubcrawl</h1>
        <p style={{ color: 'var(--text-soft)', marginTop: '0.75rem', fontSize: '1.02rem' }}>Velg et pubcrawl-opplegg og legg opp kvelden din i Stavanger.</p>
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

export default PubcrawlStavanger