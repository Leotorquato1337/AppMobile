import Firebase from 'firebase';
import 'firebase/storage';      
import 'firebase/auth';
import 'firebase/firestore';   


const firebaseConfig = {
  apiKey: "AIzaSyDTY3_JFF3lXCZAS1rA0JFYO3T2S_MCQk4",
  authDomain: "leonardo-790ab.firebaseapp.com",
  databaseURL: "https://leonardo-790ab-default-rtdb.firebaseio.com",
  projectId: "leonardo-790ab",
  storageBucket: "leonardo-790ab.appspot.com",
  messagingSenderId: "760250237013",
  appId: "1:760250237013:web:cb48e28e419409326cd4dc",
  measurementId: "G-DTRV6ZDTMC"
};

if (!Firebase.apps.length) {
  Firebase.initializeApp(firebaseConfig);
}

const conexaotabelas = Firebase.firestore();
const auth = Firebase.auth();

export default conexaotabelas;
export { auth };