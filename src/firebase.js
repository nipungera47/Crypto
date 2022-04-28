import firebaseConfig from "./config/firebaseConfig";
import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const db = getFirestore(firebaseApp);

export {auth , db};
