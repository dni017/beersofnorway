import olKartImg from '../assets/øl-kart.png'
import '../App.css'

function Pubcrawl() {
  return (
    <main
      className="page-wrapper page-inner"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 5, 6, 0.78), rgba(5, 5, 6, 0.86)), url(${olKartImg})`,
      }}
    >
      <section className="content-section">
        <span className="hero-badge">Pubcrawl</span>
        <h1>Planlegg din neste pubcrawl</h1>
        <p>
          Her kan vi senere legge inn forslag til ruter, stoppesteder og tips
          til en vellykket kveld ute.
        </p>
      </section>
    </main>
  )
}

export default Pubcrawl