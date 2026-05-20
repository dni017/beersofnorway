// Importerer useState-hooken for å håndtere state i komponenten
import { useState } from 'react'
// Importerer funksjoner fra Firestore for å legge til dokumenter og bruke tidsstempel
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
// Importerer den konfigurerte Firestore-databasen
import { db } from '../firebase/firebase'
// Importerer useNavigate for å kunne navigere mellom sider
import { useNavigate } from 'react-router-dom'
// Importerer bakgrunnsbildet som brukes på siden
import olKartImg from '../assets/øl-kart.png'
// Importerer global CSS-styling
import '../App.css'


function AddPub() {
  // Initialiserer navigeringsfunksjonen
  const navigate = useNavigate()


  // State som holder alle verdiene fra skjemaet samlet i ett objekt
  const [formData, setFormData] = useState({
    navn: '',
    by: '',
    type: '',
    beskrivelse: '',
    antallOl: '',
    prisKonservativ: '',
    prisDyr: '',
  })


  // State som viser om skjemaet holder på å lagre data
  const [loading, setLoading] = useState(false)
  // State for å vise en bekreftelsesmelding ved vellykket lagring
  const [success, setSuccess] = useState('')
  // State for å vise feilmelding hvis noe går galt
  const [error, setError] = useState('')


  // Funksjon som oppdaterer state hver gang brukeren skriver i et felt
  const handleChange = (e) => {
    // Henter ut navnet og verdien til feltet som ble endret
    const { name, value } = e.target
    // Oppdaterer kun det aktuelle feltet, og beholder resten av formData uendret
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }


  // Funksjon som kjøres når brukeren sender inn skjemaet
  const handleSubmit = async (e) => {
    // Hindrer at siden lastes på nytt ved innsending
    e.preventDefault()
    // Nullstiller tidligere meldinger
    setError('')
    setSuccess('')


    // Sjekker at alle felt er fylt ut før vi sender data til Firebase
    if (
      !formData.navn ||
      !formData.by ||
      !formData.type ||
      !formData.beskrivelse ||
      !formData.antallOl ||
      !formData.prisKonservativ ||
      !formData.prisDyr
    ) {
      setError('Fyll ut alle feltene.')
      return
    }


    try {
      // Markerer at lagring er i gang
      setLoading(true)


      // Legger til et nytt dokument i Firestore-collectionen "puber"
      await addDoc(collection(db, 'puber'), {
        // Fjerner mellomrom i start/slutt av tekstfeltene
        navn: formData.navn.trim(),
        // Gjør by-navnet om til små bokstaver for å unngå duplikater
        by: formData.by.trim().toLowerCase(),
        type: formData.type.trim(),
        beskrivelse: formData.beskrivelse.trim(),
        // Konverterer tallfeltene fra string til number
        antallOl: Number(formData.antallOl),
        prisKonservativ: Number(formData.prisKonservativ),
        prisDyr: Number(formData.prisDyr),
        // Setter automatisk tidsstempel fra Firebase-serveren
        opprettet: serverTimestamp(),
      })


      // Viser bekreftelse til brukeren
      setSuccess('Puben ble lagt til i Firebase.')
      // Tømmer skjemaet etter vellykket innsending
      setFormData({
        navn: '',
        by: '',
        type: '',
        beskrivelse: '',
        antallOl: '',
        prisKonservativ: '',
        prisDyr: '',
      })
    } catch (err) {
      // Logger feilen i konsollen og viser melding på siden
      console.error('Feil ved lagring av pub:', err)
      setError('Kunne ikke lagre puben. Sjekk Firebase-regler og prøv igjen.')
    } finally {
      // Stopper loading-status uansett om det gikk bra eller ikke
      setLoading(false)
    }
  }


  // Returnerer selve HTML/JSX-strukturen som vises på siden
  return (
    <main
      className="page-wrapper"
      // Setter bakgrunnsbilde med en mørk overlay for bedre lesbarhet
      style={{
        backgroundImage: `linear-gradient(rgba(5, 5, 6, 0.78), rgba(5, 5, 6, 0.86)), url(${olKartImg})`,
      }}
    >
      <section style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Knapp som navigerer brukeren tilbake til forsiden */}
        <button
          onClick={() => navigate('/')}
          className="secondary-btn"
          style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}
        >
          ← Tilbake
        </button>


        {/* Liten "merkelapp" som viser at dette er en admin-side */}
        <span className="hero-badge">Admin</span>
        <h1 style={{ marginTop: '1rem', color: 'var(--text-main)' }}>
          Legg til pub
        </h1>
        <p style={{ color: 'var(--text-soft)', marginTop: '0.75rem' }}>
          Her kan du legge til nye puber i Firestore-collectionen "puber".
        </p>


        {/* Selve skjemaet som sender data til Firebase når det sendes inn */}
        <form
          onSubmit={handleSubmit}
          className="feature-card"
          style={{
            marginTop: '2rem',
            display: 'grid',
            gap: '1rem',
            padding: '2rem',
          }}
        >
          {/* Inputfelt for navnet på puben */}
          <input
            type="text"
            name="navn"
            placeholder="Navn"
            value={formData.navn}
            onChange={handleChange}
          />


          {/* Inputfelt for by-id som brukes til å filtrere puber etter by */}
          <input
            type="text"
            name="by"
            placeholder="By-id, f.eks. tromso"
            value={formData.by}
            onChange={handleChange}
          />


          {/* Inputfelt for hva slags type pub det er */}
          <input
            type="text"
            name="type"
            placeholder="Type, f.eks. Ølbar"
            value={formData.type}
            onChange={handleChange}
          />


          {/* Tekstområde for en lengre beskrivelse av puben */}
          <textarea
            name="beskrivelse"
            placeholder="Beskrivelse"
            value={formData.beskrivelse}
            onChange={handleChange}
            rows="5"
          />


          {/* Tallfelt for antall øl puben har på menyen */}
          <input
            type="number"
            name="antallOl"
            placeholder="Antall øl"
            value={formData.antallOl}
            onChange={handleChange}
          />


          {/* Tallfelt for laveste pris på øl */}
          <input
            type="number"
            name="prisKonservativ"
            placeholder="Laveste pris"
            value={formData.prisKonservativ}
            onChange={handleChange}
          />


          {/* Tallfelt for høyeste pris på øl */}
          <input
            type="number"
            name="prisDyr"
            placeholder="Høyeste pris"
            value={formData.prisDyr}
            onChange={handleChange}
          />


          {/* Viser feilmelding kun hvis det finnes en feil */}
          {error && <p style={{ color: '#ff8a8a', margin: 0 }}>{error}</p>}
          {/* Viser suksessmelding kun hvis lagringen gikk bra */}
          {success && <p style={{ color: '#8ad7a3', margin: 0 }}>{success}</p>}


          {/* Send-knapp som deaktiveres mens lagring pågår */}
          <button
            type="submit"
            className="primary-btn"
            disabled={loading}
          >
            {/* Endrer teksten på knappen basert på loading-status */}
            {loading ? 'Lagrer...' : 'Lagre pub'}
          </button>
        </form>
      </section>
    </main>
  )
}


// Eksporterer komponenten slik at den kan brukes andre steder i appen
export default AddPub