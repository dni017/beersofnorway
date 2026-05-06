import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from "../firebase/firebase"
import beerCheersImg from '../assets/øl-skål.png'
import olKartImg from '../assets/øl-kart.png'
import '../App.css'

function Hjem() {
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
      <section className="hero-section">
        <div className="hero-text">
          <span className="hero-badge">Utforsk norsk ølkultur</span>

          <h1>Finn de beste pubene, byene og ølopplevelsene i Norge</h1>

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

      <section className="features-section">
        <article className="feature-card">
          <h2>Byguider</h2>
          <p>
            Oppdag puber, barer og ølsteder i ulike norske byer samlet på ett
            sted.
          </p>
        </article>

        <article className="feature-card">
          <h2>Pubcrawl</h2>
          <p>
            Planlegg en kveld ute med forslag til ruter, stoppesteder og
            stemning.
          </p>
        </article>

        <article className="feature-card">
          <h2>Inspirasjon</h2>
          <p>
            Få ideer til nye steder å besøke, og bygg din egen øl-opplevelse i
            Norge.
          </p>
        </article>
      </section>

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

                <p>
                  <strong>ID:</strong> {bil.id}
                </p>

                {bil.merke && (
                  <p>
                    <strong>Merke:</strong> {bil.merke}
                  </p>
                )}

                {bil.modell && (
                  <p>
                    <strong>Modell:</strong> {bil.modell}
                  </p>
                )}

                {bil.pris && (
                  <p>
                    <strong>Pris:</strong> {bil.pris}
                  </p>
                )}

                {bil.år && (
                  <p>
                    <strong>År:</strong> {bil.år}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Hjem