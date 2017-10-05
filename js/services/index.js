import * as firebase from "firebase";

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
      console.log("initializing firebase");
      firebase.initializeApp(config);
    } catch (err) {
      console.log(err);
      if (!/already exists/.test(err.message)) {
        console.log("Firebase initialization error", err.stack);
      }
    }
  },

  getAuth(){
    return firebase.auth();
  },

  createParent(email, password, username, consent) {
    
    return new Promise((resolve, reject) => {
      const auth = firebase.auth();
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          user.updateProfile({ displayName: username });
          const database = firebase.database().ref('parent/'+user.uid);
          database
            .set({ 
              consent: consent,
              settings: {
                imagesPerSession: 25,
                maxImageDuration: 10,
                sound: true,
                random: false
              }
            })
            .then(() => resolve(user));
          
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  signIn(email, password) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          resolve(user);
        }).catch(err=>{
          reject(err);
        });
    });
  },

  createChild(name, age) {
    return new Promise((resolve, reject) => {
      const auth = firebase.auth();
      const child = firebase.database().ref("child/");
      const parent = firebase.database().ref("parent/" + auth.currentUser.uid);
      try {
        var newChild = child.push();
        newChild
          .set({
            name: name,
            age: age,
            highScore: 0,
            level: 0,
            parentID: auth.currentUser.uid,
            totalScore: 0
          })
          .then(() => {
            parent.update({ childID: newChild.key }).then(() => {
              resolve(newChild.key);
            });
          });
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  },

  logoutUser(){
    firebase.auth().signOut();
  },

  getUser() {
    return firebase.auth().currentUser;
  },

  async getChildFromParent() {
    const auth = firebase.auth();
    try {
      const snapshot = await firebase.database().ref("parent/" + auth.currentUser.uid).once("value");
      const CID = snapshot.val().childID;
      const childRef = await firebase
        .database()
        .ref("child/" + CID)
        .once("value");
      return { childDetails: childRef.val(), childID: CID };
    } catch (err) {
      //console.log(err);
      throw err;
    }
  },

  addExercise(childID, name) {
    return new Promise((resolve, reject) => {
      const childRef = firebase
        .database()
        .ref("child/" + childID + "/exercises/");
      const exeRef = firebase.database().ref("exercise/");
      try {
        var newExe = exeRef.push();
        newExe
          .set({
            exerciseName: name,
            imagesTouched: 0,
            score: 0,
            status: "active",
            totalDuration: 0
          })
          .then(() => {
            var exercise = childRef.push();
            exercise.set({ exerciseId: newExe.key }).then(() => {
              resolve(newExe.key);
            });
          });
      } catch (err) {
        reject(err);
      }
    });
  },

  fetchExeriseList(childID) {
    return new Promise((resolve, reject) => {
      var response = [];
      const childRef = firebase
        .database()
        .ref("child/" + childID + "/exercises/");
      try {
        childRef.on("value", snapshot => {
          var numExe = snapshot.numChildren();
          snapshot.forEach(exe => {
            var exeRef = firebase
              .database()
              .ref("exercise/" + exe.val().exerciseId);
            exeRef.once("value").then(snapshot => {
              response.push({
                exerciseName: snapshot.val().exerciseName,
                score: snapshot.val().score,
                exerciseID: snapshot.key
              });
              if (response.length == numExe) {
                resolve(response);
              }
            });
          });
        });
      } catch (err) {
        reject(err);
      }
    });
  },

  addImage(exeID, bytes) {
    return new Promise((resolve, reject) => {
      const exeRef = firebase.database().ref("exercise/" + exeID + "/images/");
      const imageRef = firebase.database().ref("image");
      const store = firebase.storage().ref();
      try {
        var newImg = imageRef.push();
        const metadata = {
          contentType: "image/jpeg"
        };
        // console.log(image.base64,"logging image data");
        const storageRef = store.child(exeID + "/" + newImg.key + ".jpg");
        storageRef.put(bytes, metadata).then(() => {
          storageRef.getDownloadURL().then(URL => {
            newImg
              .set({
                duration: 0,
                score: 0,
                status: "active",
                touchDuration: 0,
                url: URL,
                waitTime: 0
              })
              .then(() => {
                var image = exeRef.push();
                image.set({ imageID: newImg.key }).then(() => {
                  resolve(newImg.key);
                });
              });
          });
        });
      } catch (err) {
        reject(err);
      }
    });
  },

  fetchImageList(exeID) {
    return new Promise((resolve, reject) => {
      var response = [];
      const exeRef = firebase.database().ref("exercise/" + exeID + "/images/");
      try {
        exeRef.on("value", snapshot => {
          var numImg = snapshot.numChildren();
          snapshot.forEach(img => {
            var imgRef = firebase.database().ref("image/" + img.val().imageID);
            imgRef.once("value").then(snapshot => {
              response.push({
                imageID: snapshot.key,
                URL: snapshot.val().url
              });
              if (response.length == numImg) {
                resolve(response);
              }
            });
          });
        });
      } catch (err) {
        reject(err);
      }
    });
  },

  getChild(childID) {
    return new Promise((resolve, reject) => {
      const childRef = firebase.database().ref("child/" + childID);
      try {
        childRef.once("value").then(snapshot => {
          resolve(snapshot.val());
        });
      } catch (err) {
        reject(err);
      }
    });
  },

  getExercise(exeID) {
    return new Promise((resolve, reject) => {
      const exeRef = firebase.database().ref("exercise/" + exeID);
      try {
        exeRef.once("value").then(snapshot => {
          resolve(snapshot.val());
        });
      } catch (err) {
        reject(err);
      }
    });
  }
};
