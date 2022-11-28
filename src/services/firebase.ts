import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAYcCuCZMPhSMk-kkZ1qS2o-A39xC7TMbI',
  authDomain: 'clinical-crm.firebaseapp.com',
  projectId: 'clinical-crm',
  storageBucket: 'clinical-crm.appspot.com',
  messagingSenderId: '656394318561',
  appId: '1:656394318561:web:467a82f615ce5df07e3da0',
  measurementId: 'G-N0BZVZ2WB3',
};

export const firebase = initializeApp(firebaseConfig);

export const analytics = getAnalytics(firebase);

export const authProvider = new GoogleAuthProvider();

export const database = getFirestore(firebase);
