import olKartImg from '../assets/øl-kart.png'
import '../App.css'

function Byer() {
  return (
    <main
      className="page-wrapper page-inner"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 5, 6, 0.78), rgba(5, 5, 6, 0.86)), url(${olKartImg})`,
      }}
    >
      <section className="content-section">
        <span className="hero-badge">Byguider</span>
        <h1>Utforsk norske ølbyer</h1>
        <p>
          Her kan vi senere legge inn oversikt over norske byer, anbefalte puber
          og lokale ølopplevelser.
        </p>
      </section>
    </main>
  )
}

export default Byer