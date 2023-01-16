// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBi1q68iQaM75E64Efvz3b9DtmY2y-TzaM',
  authDomain: 'drivent-equipe-rocket.firebaseapp.com',
  projectId: 'drivent-equipe-rocket',
  storageBucket: 'drivent-equipe-rocket.appspot.com',
  messagingSenderId: '933274193077',
  appId: '1:933274193077:web:e878f0a9abbe7fb0d8c2fc',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
