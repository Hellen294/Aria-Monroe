// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyDzWe0sMFecKa9sHk30pXat5qrT4yDyuJ4",
  authDomain: "soccer2-c47c2.firebaseapp.com",
  databaseURL: "https://soccer2-c47c2-default-rtdb.firebaseio.com",
  projectId: "soccer2-c47c2",
  storageBucket: "soccer2-c47c2.appspot.com",
  messagingSenderId: "942310698005",
  appId: "1:942310698005:web:2f5230da671ef0b47db21c"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
