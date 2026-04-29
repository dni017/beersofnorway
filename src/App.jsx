import heroImg from './assets/hero.png'
import Nav from './components/Nav'
import './App.css'

// Dette er hovedkomponenten for hele forsiden
function App() {
  return (
    <>
      {/* Denne komponenten viser navbaren øverst på siden */}
      <Nav />

      {/* Denne seksjonen er hero-delen, altså det første brukeren ser */}
      <main className="page-wrapper">
        <section className="hero-section">
          {/* Denne boksen holder teksten på venstre side */}
          <div className="hero-text">
            {/* Denne lille etiketten gir siden et mer moderne uttrykk */}
            <span className="hero-badge">Utforsk norsk ølkultur</span>

            {/* Dette er hovedoverskriften på forsiden */}
            <h1>Finn de beste pubene, byene og ølopplevelsene i Norge</h1>

            {/* Denne teksten forklarer kort hva nettsiden handler om */}
            <p>
              Beers of Norway hjelper deg med å oppdage nye steder, planlegge pubcrawl
              og finne spennende ølmiljøer i norske byer.
            </p>

            {/* Disse knappene leder brukeren videre til viktige deler av siden */}
            <div className="hero-buttons">
              <a href="/byer" className="primary-btn">
                Utforsk byer
              </a>

              <a href="/pubcrawl" className="secondary-btn">
                Planlegg pubcrawl
              </a>
            </div>
          </div>

          {/* Denne boksen holder bildet på høyre side */}
          <div className="hero-image-wrapper">
            {/* Dette er hovedbildet i hero-seksjonen */}
            <img
              src={heroImg}
              className="hero-image"
              alt="Illustrasjon av øl og byliv"
            />
          </div>
        </section>

        {/* Denne seksjonen viser tre korte høydepunkter om nettsiden */}
        <section className="features-section">
          {/* Dette kortet forklarer at brukeren kan utforske byer */}
          <article className="feature-card">
            <h2>Byguider</h2>
            <p>
              Oppdag puber, barer og ølsteder i ulike norske byer samlet på ett sted.
            </p>
          </article>

          {/* Dette kortet fremhever pubcrawl-funksjonen */}
          <article className="feature-card">
            <h2>Pubcrawl</h2>
            <p>
              Planlegg en kveld ute med forslag til ruter, stoppesteder og stemning.
            </p>
          </article>

          {/* Dette kortet fremhever inspirasjon og anbefalinger */}
          <article className="feature-card">
            <h2>Inspirasjon</h2>
            <p>
              Få ideer til nye steder å besøke, og bygg din egen øl-opplevelse i Norge.
            </p>
          </article>
        </section>
      </main>
    </>
  )
}

export default App