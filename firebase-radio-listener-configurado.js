import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBF3SbUb_-HOObKNmXcpOlVyvtt3Lv7xGY",
  authDomain: "radiolua-98df1.firebaseapp.com",
  databaseURL: "https://radiolua-98df1-default-rtdb.firebaseio.com",
  projectId: "radiolua-98df1",
  storageBucket: "radiolua-98df1.firebasestorage.app",
  messagingSenderId: "693418516394",
  appId: "1:693418516394:web:6653b029b0aa79682cd5d3"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const audio = document.getElementById("audio");

onValue(ref(db, 'radio/musicVolume'), (snapshot) => {
  if (snapshot.exists()) {
    audio.volume = snapshot.val();
  }
});

onValue(ref(db, 'radio/liveMode'), (snapshot) => {
  if (snapshot.val() === true) {
    console.log("AO VIVO ATIVADO");
  } else {
    console.log("AO VIVO DESATIVADO");
  }
});