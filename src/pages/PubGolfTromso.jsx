// src/pages/PubGolfTromso.jsx
// Pub golf scorekort-side for Tromsø
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import olKartImg from '../assets/øl-kart.png'
import '../App.css'

// Hull og par for pub golf i Tromsø
const HULL = [
  'Ølhallen',
  'Skarven',
  'Blå Rock Cafe',
  'Amundsen',
  'Verdensteatret',
  'Sjømatrestauranten',
  'Driv',
  'Compagniet',
  'Victoria',
]
const PAR_PER_HULL = [3, 4, 3, 4, 3, 4, 3, 4, 3]
const totalPar = PAR_PER_HULL.reduce((sum, par) => sum + par, 0)

function PubGolfTromso() {
  const navigate = useNavigate()

  // Animasjonstilstand
  const [animasjonFerdig, setAnimasjonFerdig] = useState(false)
  const [visAnimasjon, setVisAnimasjon] = useState(true)

  // Scorekort-tilstand
  const [spillere, setSpillere] = useState(['Spiller 1', 'Spiller 2'])
  const [scores, setScores] = useState({})
  const [nyttSpillerNavn, setNyttSpillerNavn] = useState('')

  // Kjør animasjonen ved innlasting
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimasjonFerdig(true)
      setTimeout(() => setVisAnimasjon(false), 800)
    }, 2200)
    return () => clearTimeout(timer)
  }, [])

  // Oppdater score for en spiller på et hull
  const oppdaterScore = (spiller, hullIndex, verdi) => {
    setScores((prev) => ({
      ...prev,
      [`${spiller}-${hullIndex}`]: parseInt(verdi) || 0,
    }))
  }

  // Regn ut totalsum for en spiller
  const totalScore = (spiller) => {
    return HULL.reduce((sum, _, index) => {
      return sum + (scores[`${spiller}-${index}`] || 0)
    }, 0)
  }

  // Finn lederen (lavest score)
  const finnLeder = () => {
    const medScore = spillere.filter((s) => totalScore(s) > 0)
    if (medScore.length === 0) return null
    return medScore.reduce((leder, spiller) =>
      totalScore(spiller) < totalScore(leder) ? spiller : leder
    )
  }

  // Legg til ny spiller
  const leggTilSpiller = () => {
    if (nyttSpillerNavn.trim() && spillere.length < 6) {
      setSpillere([...spillere, nyttSpillerNavn.trim()])
      setNyttSpillerNavn('')
    }
  }

  // Fjern spiller
  const fjernSpiller = (navn) => {
    setSpillere(spillere.filter((s) => s !== navn))
  }

  const leder = finnLeder()

  return (
    <main
      className="page-wrapper"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 5, 6, 0.78), rgba(5, 5, 6, 0.86)), url(${olKartImg})`,
      }}
    >
      {/* Golf-animasjon ved innlasting */}
      {visAnimasjon && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(5, 5, 6, 0.97)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          opacity: animasjonFerdig ? 0 : 1,
          transition: 'opacity 0.8s ease',
        }}>
          {/* Animasjons-container */}
          <div style={{ position: 'relative', width: '320px', height: '220px' }}>

            {/* Øl-glass som blir slått */}
            <div style={{
              position: 'absolute',
              right: '50px',
              bottom: '20px',
              fontSize: '5.5rem',
              transition: 'transform 1.4s ease, opacity 1s ease',
              transform: animasjonFerdig
                ? 'translateX(100px) rotate(120deg)'
                : 'translateX(0) rotate(0deg)',
              opacity: animasjonFerdig ? 0 : 1,
            }}>
              🍺
            </div>

            {/* Golfkølle */}
            <div style={{
              position: 'absolute',
              left: '20px',
              bottom: '10px',
              fontSize: '4.5rem',
              transformOrigin: 'bottom right',
              transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: animasjonFerdig ? 'rotate(30deg)' : 'rotate(-70deg)',
            }}>
              🏌️
            </div>
          </div>

          {/* Tekst */}
          <p style={{
            color: 'var(--accent)',
            fontWeight: 700,
            fontSize: '1.8rem',
            letterSpacing: '0.05em',
            margin: 0,
          }}>
            Fore! 🍻
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', margin: 0 }}>
            Gjør deg klar for pub golf i Tromsø
          </p>
        </div>
      )}

      {/* Tilbake-knapp og overskrift */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 2.5rem' }}>
        <button
          onClick={() => navigate('/pubcrawl/tromso')}
          className="secondary-btn"
          style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}
        >
          ← Tilbake til Tromsø pubcrawl
        </button>

        <span className="hero-badge">Pub Golf · Tromsø</span>
        <h1 style={{ marginTop: '1rem', fontSize: 'clamp(2rem, 3.3vw, 3.1rem)', color: 'var(--text-main)' }}>
          🏌️ Pub Golf Scorekort
        </h1>
        <p style={{ color: 'var(--text-soft)', marginTop: '0.75rem', fontSize: '1.02rem' }}>
          Legg inn spillere, fyll inn scores underveis og se hvem som vinner kvelden!
        </p>
      </section>

      {/* Legg til spillere */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto 2rem',
        background: 'radial-gradient(circle at top left, #231b2e, #151118 58%, #070509)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '22px',
        padding: '1.8rem',
      }}>
        <h2 style={{ margin: '0 0 1rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>
          Spillere
        </h2>

        {/* Spillerliste */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1rem' }}>
          {spillere.map((spiller, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.8rem',
              borderRadius: '999px',
              background: 'rgba(245,183,84,0.12)',
              border: '1px solid rgba(245,183,84,0.3)',
            }}>
              <span style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>{spiller}</span>
              {/* Fjern spiller-knapp */}
              <button
                onClick={() => fjernSpiller(spiller)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  padding: 0,
                  lineHeight: 1,
                }}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Legg til spiller-input */}
        {spillere.length < 6 && (
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <input
              type="text"
              placeholder="Navn på ny spiller..."
              value={nyttSpillerNavn}
              onChange={(e) => setNyttSpillerNavn(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && leggTilSpiller()}
              className="auth-input"
              style={{ flex: 1 }}
            />
            <button onClick={leggTilSpiller} className="primary-btn" style={{ whiteSpace: 'nowrap' }}>
              + Legg til
            </button>
          </div>
        )}
        {spillere.length >= 6 && (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
            Maks 6 spillere
          </p>
        )}
      </section>

      {/* Leder-banner */}
      {leder && (
        <section style={{
          maxWidth: '1200px',
          margin: '0 auto 2rem',
          background: 'rgba(245,183,84,0.12)',
          border: '1px solid rgba(245,183,84,0.35)',
          borderRadius: '18px',
          padding: '1.2rem 1.8rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <span style={{ fontSize: '2rem' }}>🏆</span>
          <div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
              Leder akkurat nå
            </p>
            <p style={{ margin: '0.2rem 0 0', fontSize: '1.2rem', color: 'var(--text-main)', fontWeight: 700 }}>
              {leder} — {totalScore(leder)} slag
            </p>
          </div>
        </section>
      )}

      {/* Scorekort-tabell */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto 2rem',
        background: 'radial-gradient(circle at top left, #231b2e, #151118 58%, #070509)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '22px',
        padding: '1.8rem',
        overflowX: 'auto',
      }}>
        <h2 style={{ margin: '0 0 1.5rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>
          Scorekort
        </h2>

        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr>
              {/* Hull-kolonne */}
              <th style={{ textAlign: 'left', padding: '0.6rem 0.8rem', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                Hull
              </th>
              {/* Par-kolonne */}
              <th style={{ textAlign: 'center', padding: '0.6rem 0.8rem', color: 'var(--accent)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                Par
              </th>
              {/* Spiller-kolonner */}
              {spillere.map((spiller, i) => (
                <th key={i} style={{ textAlign: 'center', padding: '0.6rem 0.8rem', color: 'var(--text-main)', fontSize: '0.85rem', borderBottom: '1px solid rgba(255,255,255,0.08)', minWidth: '110px' }}>
                  {spiller === leder ? `${spiller} 🏆` : spiller}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {HULL.map((hull, hullIndex) => (
              <tr key={hullIndex} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                {/* Hullnavn */}
                <td style={{ padding: '0.6rem 0.8rem', color: 'var(--text-soft)', fontSize: '0.88rem' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700, marginRight: '0.4rem' }}>
                    {hullIndex + 1}.
                  </span>
                  {hull}
                </td>
                {/* Par */}
                <td style={{ textAlign: 'center', padding: '0.6rem 0.8rem', color: 'var(--accent)', fontWeight: 700 }}>
                  {PAR_PER_HULL[hullIndex]}
                </td>
                {/* Score-input per spiller */}
                {spillere.map((spiller, spillerIndex) => {
                  const score = scores[`${spiller}-${hullIndex}`]
                  const par = PAR_PER_HULL[hullIndex]
                  // Fargekode basert på score vs par
                  const farge = !score ? 'var(--text-muted)'
                    : score < par ? '#4ade80'
                    : score === par ? 'var(--accent)'
                    : '#f87171'

                  return (
                    <td key={spillerIndex} style={{ textAlign: 'center', padding: '0.4rem 0.8rem' }}>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={score || ''}
                        onChange={(e) => oppdaterScore(spiller, hullIndex, e.target.value)}
                        style={{
                          width: '65px',
                          textAlign: 'center',
                          background: 'rgba(255,255,255,0.06)',
                          border: `1px solid ${farge}40`,
                          borderRadius: '8px',
                          color: farge,
                          padding: '0.4rem',
                          fontSize: '1rem',
                          fontWeight: 700,
                        }}
                      />
                    </td>
                  )
                })}
              </tr>
            ))}

            {/* Totalrad */}
            <tr style={{ borderTop: '2px solid rgba(245,183,84,0.3)', background: 'rgba(245,183,84,0.05)' }}>
              <td style={{ padding: '0.8rem', color: 'var(--text-main)', fontWeight: 700 }}>Total</td>
              <td style={{ textAlign: 'center', padding: '0.8rem', color: 'var(--accent)', fontWeight: 700 }}>{totalPar}</td>
              {spillere.map((spiller, i) => (
                <td key={i} style={{ textAlign: 'center', padding: '0.8rem', fontWeight: 700 }}>
                  <span style={{
                    color: totalScore(spiller) > 0 && totalScore(spiller) <= totalPar ? '#4ade80' : 'var(--text-main)',
                    fontSize: '1.2rem',
                  }}>
                    {totalScore(spiller) || '-'}
                  </span>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      {/* Nullstill-knapp */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={() => {
            setScores({})
            setSpillere(['Spiller 1', 'Spiller 2'])
          }}
          className="secondary-btn"
        >
          🔄 Nullstill scorekort
        </button>
      </section>
    </main>
  )
}

export default PubGolfTromso