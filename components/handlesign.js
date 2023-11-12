import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { FIREBASE_AUTH } from "../firebaseConfig"


export const onHandleSignup = async (email, password, setUser, setLoading) => {
  const auth = FIREBASE_AUTH
  setLoading(true)
  if (email.length === 0 || password.length === 0) {
    alert('Please fill in all fields')
    setLoading(false)
  } else {
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setUser(userCredential)
      setLoading(false)
    }).catch((error) => {
      alert(error)
      setLoading(false)
    })
  }
}

export const onHandleSignIn = async (email,password, setUser, setLoading) => {
  const auth = FIREBASE_AUTH
  setLoading(true)
  if (email.length === 0 || password.length === 0) {
    alert('Please fill in all fields')
    setLoading(false)
  } else {
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setUser(userCredential)
      setLoading(false)
    }).catch((error) => {
      alert(error)
      setLoading(false)
    })
  }
}