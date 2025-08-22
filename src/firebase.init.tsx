import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: 'AIzaSyCjHmRUj2dpHYXxwYZWpvLCHv-IHLl_Q0M',
  authDomain: 'e-commerce-website-auth.firebaseapp.com',
  projectId: 'e-commerce-website-auth',
  storageBucket: 'e-commerce-website-auth.firebasestorage.app',
  messagingSenderId: '697620441649',
  appId: '1:697620441649:web:ebf734405791585112c310',
}
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
