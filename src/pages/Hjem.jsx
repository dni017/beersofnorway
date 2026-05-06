import { Link } from 'react-router-dom'
import beerCheersImg from '../assets/øl-skål.png'
import olKartImg from '../assets/øl-kart.png'
import '../App.css'

function Hjem() {
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
    </main>
  )
}

export default Hjem