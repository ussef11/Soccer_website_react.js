
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyDDKcck7SLk-Vr8SBhpwJ838sPKsWf3OmU",
    authDomain: "stockimg-3472a.firebaseapp.com",
    databaseURL: "https://stockimg-3472a-default-rtdb.firebaseio.com",
    projectId: "stockimg-3472a",
    storageBucket: "stockimg-3472a.appspot.com",
    messagingSenderId: "192241779694",
    appId: "1:192241779694:web:da90eb0fdd2231341044ff",
    measurementId: "G-EFNEQJ1WSZ"
});

const storage = getStorage(firebaseConfig)
export default storage;