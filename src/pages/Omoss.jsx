import olKartImg from '../assets/øl-kart.png'
import '../App.css'

function Omoss() {
  return (
    <main
      className="page-wrapper page-inner"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 5, 6, 0.78), rgba(5, 5, 6, 0.86)), url(${olKartImg})`,
      }}
    >
      <section className="content-section">
        <span className="hero-badge">Om oss</span>
        <h1>Om Beers of Norway</h1>
        <p>
          Her kan vi fortelle mer om prosjektet, målet med nettsiden og hvem som
          står bak.
        </p>
      </section>
    </main>
  ) 
}

export default Omoss