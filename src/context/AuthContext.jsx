// src/context/AuthContext.jsx

// Importerer nødvendige funksjoner fra React for å lage context, bruke hooks og håndtere state
import { createContext, useContext, useEffect, useState } from 'react'
// Importerer autentiseringsfunksjoner fra Firebase
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
// Importerer den konfigurerte auth-instansen fra firebase-filen
import { auth } from '../firebase/firebase'


// Oppretter en ny context som skal holde informasjon om innlogget bruker
const AuthContext = createContext(null)


// Egen hook som gjør det enkelt å hente ut auth-data hvor som helst i appen
export function useAuth() {
  return useContext(AuthContext)
}


// AuthProvider pakker inn appen og gir alle komponenter tilgang til auth-data
export function AuthProvider({ children }) {
  // State som holder den innloggede brukeren (null hvis ingen er logget inn)
  const [user, setUser] = useState(null)
  // State som viser om Firebase fortsatt sjekker innloggingsstatus
  const [loading, setLoading] = useState(true)


  // Funksjon for å registrere en ny bruker med e-post og passord
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }


  // Funksjon for å logge inn en eksisterende bruker med e-post og passord
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }


  // Funksjon for å logge ut den aktive brukeren
  function logout() {
    return signOut(auth)
  }


  // useEffect kjører én gang når komponenten vises første gang
  useEffect(() => {
    // Lytter kontinuerlig på endringer i innloggingsstatus fra Firebase
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // Oppdaterer state med gjeldende bruker (eller null hvis logget ut)
      setUser(currentUser)
      // Markerer at lastingen er ferdig
      setLoading(false)
    })


    // Stopper lytteren når komponenten fjernes, for å unngå minnelekkasjer
    return unsubscribe
  }, [])


  // Samler alle verdier og funksjoner som skal være tilgjengelige via context
  const value = {
    user,
    signup,
    login,
    logout,
  }


  // Returnerer Provider som gir alle barn-komponenter tilgang til auth-data
  // Viser kun innholdet når lastingen er ferdig, slik at vi unngår feil ved oppstart
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}