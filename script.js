import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getDatabase,
  ref,
  push,
  get,
  remove
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "psicosismusic-2b04a.firebaseapp.com",
  databaseURL: "https://psicosismusic-2b04a-default-rtdb.firebaseio.com",
  projectId: "psicosismusic-2b04a",
  storageBucket: "psicosismusic-2b04a.firebasestorage.app",
  messagingSenderId: "233441166744",
  appId: "1:233441166744:web:6757b5fb8d4fd1803697ed"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export { ref, push, get, remove };
