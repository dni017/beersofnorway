// src/pages/Omoss.jsx
// Om oss-side med informasjon om Beers of Norway
import olKartImg from '../assets/øl-kart.png'
import '../App.css'

function Omoss() {
  return (
    <main
      className="page-wrapper"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 5, 6, 0.78), rgba(5, 5, 6, 0.86)), url(${olKartImg})`,
      }}
    >
      {/* Overskrift */}
      <section style={{ maxWidth: '860px', margin: '0 auto 2.5rem' }}>
        <span className="hero-badge">Om oss</span>
        <h1 style={{ marginTop: '1rem', fontSize: 'clamp(2rem, 3.3vw, 3.1rem)', color: 'var(--text-main)' }}>
          Om Beers of Norway
        </h1>
        <p style={{ color: 'var(--text-soft)', marginTop: '0.75rem', fontSize: '1.05rem', lineHeight: 1.8 }}>
          Beers of Norway er en digital tjeneste som gjør det enklere å finne oversikt over ølutvalg
          i nærheten av deg og priser i norske byer. Målet vårt er å gi deg oppdatert og relevant
          informasjon om hva en halvliter faktisk koster – akkurat der du befinner deg.
        </p>
      </section>

      {/* Vår idé */}
      <section style={{ maxWidth: '860px', margin: '0 auto 2rem' }}>
        <div
          className="feature-card"
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <span className="hero-badge" style={{ alignSelf: 'flex-start' }}>Vår idé</span>
          <p style={{ margin: 0, color: 'var(--text-soft)', lineHeight: 1.8, fontSize: '1.02rem' }}>
            Vi så et behov for et samlet sted der man enkelt kan sammenligne ølpriser og utvalg på
            tvers av byer. Enten du er lokal, på reise eller bare nysgjerrig, ønsker vi å gi deg
            innsikt som gjør det lettere å planlegge en kveld ute.
          </p>

          {/* Hva du kan gjøre med tjenesten */}
          <p style={{ margin: 0, color: 'var(--text-soft)', fontWeight: 600, fontSize: '0.95rem' }}>
            Med Beers of Norway kan du:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
            {[
              'Utforske ølpriser i ulike norske byer',
              'Se gjennomsnittspriser og variasjoner',
              'Filtrere på type øl og prisnivå',
              'Oppdage nye steder å besøke',
            ].map((punkt, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.6rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '14px',
                  background: 'rgba(245,183,84,0.08)',
                  border: '1px solid rgba(245,183,84,0.2)',
                }}
              >
                <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1rem', marginTop: '1px' }}>→</span>
                <p style={{ margin: 0, color: 'var(--text-soft)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {punkt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hvorfor vi finnes */}
      <section style={{ maxWidth: '860px', margin: '0 auto 2rem' }}>
        <div
          className="feature-card"
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <span className="hero-badge" style={{ alignSelf: 'flex-start' }}>Hvorfor vi finnes</span>
          <p style={{ margin: 0, color: 'var(--text-soft)', lineHeight: 1.8, fontSize: '1.02rem' }}>
            I dag er informasjon om ølpriser ofte fragmentert, utdatert eller vanskelig å finne.
            Eksisterende løsninger er gjerne basert på dugnadsarbeid eller har begrenset brukervennlighet.
            Vi ønsker å løse dette ved å:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              'Samle informasjon på ett sted',
              'Gjøre det enkelt å navigere og sammenligne',
              'Sørge for bedre datakvalitet og oppdaterte priser',
            ].map((punkt, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '14px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <span style={{ color: 'var(--accent)', fontWeight: 700 }}>→</span>
                <p style={{ margin: 0, color: 'var(--text-soft)', fontSize: '0.95rem' }}>{punkt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hvem er løsningen for */}
      <section style={{ maxWidth: '860px', margin: '0 auto 2rem' }}>
        <div
          className="feature-card"
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <span className="hero-badge" style={{ alignSelf: 'flex-start' }}>Hvem er løsningen for?</span>
          <p style={{ margin: 0, color: 'var(--text-soft)', lineHeight: 1.8, fontSize: '1.02rem' }}>
            Beers of Norway er laget for deg som er:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
            {[
              'Prisbevisste ølentusiaster',
              'Personer 18–60 år som jobber og reiser',
              'Sosiale grupper som planlegger kvelder ute',
              'Alle som ønsker bedre oversikt før de går ut',
            ].map((gruppe, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.6rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '14px',
                  background: 'rgba(245,183,84,0.08)',
                  border: '1px solid rgba(245,183,84,0.2)',
                }}
              >
                <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1rem', marginTop: '1px' }}>→</span>
                <p style={{ margin: 0, color: 'var(--text-soft)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {gruppe}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt oss */}
      <section style={{ maxWidth: '860px', margin: '0 auto 2rem' }}>
        <div
          className="feature-card"
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <span className="hero-badge" style={{ alignSelf: 'flex-start' }}>Kontakt oss</span>
          <p style={{ margin: 0, color: 'var(--text-soft)', lineHeight: 1.8, fontSize: '1.02rem' }}>
            Har du spørsmål, tilbakemeldinger eller tips til priser? Vi vil gjerne høre fra deg!
            Send oss en melding via kontaktskjemaet nedenfor.
          </p>

          {/* Kontaktskjema */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            <input
              type="text"
              placeholder="Navn"
              className="auth-input"
            />
            <input
              type="email"
              placeholder="E-post"
              className="auth-input"
            />
            <textarea
              placeholder="Din melding..."
              className="auth-input"
              rows={5}
              style={{ resize: 'vertical', paddingTop: '0.85rem' }}
            />
            <button
              className="primary-btn"
              style={{ alignSelf: 'flex-start', marginTop: '0.25rem' }}
            >
              Send melding
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Omoss