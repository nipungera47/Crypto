import firebaseConfig from "./config/firebaseConfig";
import {initializeApp} from  "firebase/app";
import {getAuth} from "firebase/app";
import {getFirestore} from "firebase/app";

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const db = getFirestore(firebaseApp);

export {auth , db};
