import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import olKartImg from '../assets/øl-kart.png'
import '../App.css'

function AddPub() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    navn: '',
    by: '',
    type: '',
    beskrivelse: '',
    antallOl: '',
    prisKonservativ: '',
    prisDyr: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

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
      setLoading(true)

      await addDoc(collection(db, 'puber'), {
        navn: formData.navn.trim(),
        by: formData.by.trim().toLowerCase(),
        type: formData.type.trim(),
        beskrivelse: formData.beskrivelse.trim(),
        antallOl: Number(formData.antallOl),
        prisKonservativ: Number(formData.prisKonservativ),
        prisDyr: Number(formData.prisDyr),
        opprettet: serverTimestamp(),
      })

      setSuccess('Puben ble lagt til i Firebase.')
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
      console.error('Feil ved lagring av pub:', err)
      setError('Kunne ikke lagre puben. Sjekk Firebase-regler og prøv igjen.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main
      className="page-wrapper"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 5, 6, 0.78), rgba(5, 5, 6, 0.86)), url(${olKartImg})`,
      }}
    >
      <section style={{ maxWidth: '800px', margin: '0 auto' }}>
        <button
          onClick={() => navigate('/')}
          className="secondary-btn"
          style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}
        >
          ← Tilbake
        </button>

        <span className="hero-badge">Admin</span>
        <h1 style={{ marginTop: '1rem', color: 'var(--text-main)' }}>
          Legg til pub
        </h1>
        <p style={{ color: 'var(--text-soft)', marginTop: '0.75rem' }}>
          Her kan du legge til nye puber i Firestore-collectionen "puber".
        </p>

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
          <input
            type="text"
            name="navn"
            placeholder="Navn"
            value={formData.navn}
            onChange={handleChange}
          />

          <input
            type="text"
            name="by"
            placeholder="By-id, f.eks. tromso"
            value={formData.by}
            onChange={handleChange}
          />

          <input
            type="text"
            name="type"
            placeholder="Type, f.eks. Ølbar"
            value={formData.type}
            onChange={handleChange}
          />

          <textarea
            name="beskrivelse"
            placeholder="Beskrivelse"
            value={formData.beskrivelse}
            onChange={handleChange}
            rows="5"
          />

          <input
            type="number"
            name="antallOl"
            placeholder="Antall øl"
            value={formData.antallOl}
            onChange={handleChange}
          />

          <input
            type="number"
            name="prisKonservativ"
            placeholder="Laveste pris"
            value={formData.prisKonservativ}
            onChange={handleChange}
          />

          <input
            type="number"
            name="prisDyr"
            placeholder="Høyeste pris"
            value={formData.prisDyr}
            onChange={handleChange}
          />

          {error && <p style={{ color: '#ff8a8a', margin: 0 }}>{error}</p>}
          {success && <p style={{ color: '#8ad7a3', margin: 0 }}>{success}</p>}

          <button
            type="submit"
            className="primary-btn"
            disabled={loading}
          >
            {loading ? 'Lagrer...' : 'Lagre pub'}
          </button>
        </form>
      </section>
    </main>
  )
}

export default AddPub