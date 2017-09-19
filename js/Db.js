import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCRjJ3k7AmjPowyhdWswv56xfvdyEo_Thc",
  authDomain: "childmind-7f9a6.firebaseapp.com",
  databaseURL: "https://childmind-7f9a6.firebaseio.com",
  projectId: "childmind-7f9a6",
  storageBucket: "childmind-7f9a6.appspot.com",
  messagingSenderId: "993751585054"
};

export default {
  initDb() {
    try {
      firebase.initializeApp(config);
    } catch (err) {
      if (!/already exists/.test(err.message)) {
        console.log("Firebase initialization error", err.stack);
      }
    }
  },
  getDatabase() {
    return firebase.database();
  },

  getAuth() {
    return firebase.auth();
  },
  getStorage() {
    return firebase.storage();
  }
};

