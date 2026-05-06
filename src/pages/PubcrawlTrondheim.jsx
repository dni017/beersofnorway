// src/pages/PubcrawlTrondheim.jsx
// Pubcrawl-side for Trondheim - viser forskjellige pubcrawl-opplegg
import { useNavigate } from 'react-router-dom'
import olKartImg from '../assets/øl-kart.png'
import '../App.css'

const PUBCRAWLS = [
  {
    id: 1,
    navn: 'Billigst pubcrawl',
    type: 'Budsjett',
    beskrivelse: 'Trondheim har mange rimelige barer. Denne runden tar deg gjennom de billigste alternativene.',
    antallStopp: 4,
    estimertPris: '180-280 kr',
    varighet: '3-4 timer',
    stoppesteder: ['Bare Blåbær', 'Habitat', 'Bryggerikjelleren', 'Blæst'],
  },
  {
    id: 2,
    navn: 'Pub golf',
    type: 'Spill',
    beskrivelse: 'Pub golf gjennom Trondheims beste barer med scorekort og morsomme utfordringer underveis.',
    antallStopp: 9,
    estimertPris: '380-560 kr',
    varighet: '4-5 timer',
    stoppesteder: ['Bare Blåbær', 'Habitat', 'Bryggerikjelleren', 'Blæst', 'Garage', 'Antikvariatet', 'Frati', 'Ramp', 'Bari'],
  },
  {
    id: 3,
    navn: 'Nedre Elvehavn-runden',
    type: 'Klassiker',
    beskrivelse: 'Start ved Nedre Elvehavn og jobb deg gjennom Trondheims mest populære barer langs elva.',
    antallStopp: 4,
    estimertPris: '300-420 kr',
    varighet: '3-4 timer',
    stoppesteder: ['Bryggerikjelleren', 'Habitat', 'Antikvariatet', 'Frati'],
  },
  {
    id: 4,
    navn: 'Craft beer runde',
    type: 'Ølguide',
    beskrivelse: 'Trondheim har en god craft beer-scene. Denne runden fokuserer på de beste håndverksølene.',
    antallStopp: 3,
    estimertPris: '280-400 kr',
    varighet: '2-3 timer',
    stoppesteder: ['Habitat', 'Bryggerikjelleren', 'Bare Blåbær'],
  },
  {
    id: 5,
    navn: 'Studentkvelden',
    type: 'Student',
    beskrivelse: 'Trondheim er en studentby - denne runden tar deg gjennom de mest populære studentbarene.',
    antallStopp: 4,
    estimertPris: '150-250 kr',
    varighet: '3-4 timer',
    stoppesteder: ['Blæst', 'Bare Blåbær', 'Garage', 'Ramp'],
  },
  {
    id: 6,
    navn: 'Midtbyen-runden',
    type: 'Klassiker',
    beskrivelse: 'En klassisk tur gjennom Trondheim sentrum med stopp på de mest ikoniske barene.',
    antallStopp: 5,
    estimertPris: '320-460 kr',
    varighet: '4-5 timer',
    stoppesteder: ['Habitat', 'Antikvariatet', 'Frati', 'Bari', 'Bryggerikjelleren'],
  },
]

function PubcrawlTrondheim() {
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
        <span className="hero-badge">Trondheim</span>
        <h1 style={{ marginTop: '1rem', fontSize: 'clamp(2rem, 3.3vw, 3.1rem)', color: 'var(--text-main)' }}>Trondheim pubcrawl</h1>
        <p style={{ color: 'var(--text-soft)', marginTop: '0.75rem', fontSize: '1.02rem' }}>Velg et pubcrawl-opplegg og legg opp kvelden din i Trondheim.</p>
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

export default PubcrawlTrondheim