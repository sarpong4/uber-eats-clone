import { initializeApp } from "firebase/app";
import * as db from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCP-9OgZJd83zXWXrhhMupiPAFfdSgb-aI",
  authDomain: "ubereats-2b103.firebaseapp.com",
  projectId: "ubereats-2b103",
  storageBucket: "ubereats-2b103.appspot.com",
  messagingSenderId: "179130792390",
  appId: "1:179130792390:web:ee5e35554fa9729277dac7",
};

initializeApp(firebaseConfig);

const firestore = db.getFirestore();

const addFirebaseOrder = async (data) => {
  await db.setDoc(db.doc(firestore, "orders", 'order'), data);
};

export default addFirebaseOrder;
