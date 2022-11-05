import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

// import { initializeApp, type FirebaseOptions } from "firebase/app";
// import { getFirestore,collection, addDoc, getDocs } from "firebase/firestore";
// const firebaseConfig:FirebaseOptions = {
//   apiKey: "AIzaSyBoIseHmWDnN7sZNeGFzu_ConvDue7rLPE",
//   authDomain: "golfourit-practice.firebaseapp.com",
//   projectId: "golfourit-practice",
//   storageBucket: "golfourit-practice.appspot.com",
//   messagingSenderId: "594596738243",
//   appId: "1:594596738243:web:3b7b8e90a2f03311461e76",
//   measurementId: "G-WH57V5T4LS"
// }

// Initialize Firebase
// const appdb = initializeApp(firebaseConfig);

// const db = getFirestore(appdb);
// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
