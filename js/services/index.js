import * as firebase from "firebase";
import RNFetchBlob from "react-native-fetch-blob";

const config = {
  apiKey: "AIzaSyCRjJ3k7AmjPowyhdWswv56xfvdyEo_Thc",
  authDomain: "childmind-7f9a6.firebaseapp.com",
  databaseURL: "https://childmind-7f9a6.firebaseio.com",
  projectId: "childmind-7f9a6",
  storageBucket: "childmind-7f9a6.appspot.com",
  messagingSenderId: "993751585054"
};

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;

export default {
  initDb() {
    try {
      firebase.initializeApp(config);
    } catch (err) {
      console.log(err);
      if (!/already exists/.test(err.message)) {
        console.log("Firebase initialization error", err.stack);
      }
    }
  },

  getAuth() {
    return firebase.auth();
  },

  reloadUser() {
    firebase.auth().currentUser.reload();
  },

  createParent(email, password, username, consent) {
    return new Promise((resolve, reject) => {
      const auth = firebase.auth();
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          user.updateProfile({ displayName: username });
          const database = firebase.database().ref("parent/" + user.uid);
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
        })
        .catch(err => {
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
            correctTaps: 0,
            wrongTaps: 0,
            todayScore: 0,
            level: 0,
            lastActivity: new Date().toDateString(),
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

  logoutUser() {
    firebase.auth().signOut();
  },

  async getUser() {
    await firebase.auth().currentUser.reload();
    const snapshot = await firebase
      .database()
      .ref("parent/" + firebase.auth().currentUser.uid)
      .once("value");
    return { parent: snapshot.val(), user: firebase.auth().currentUser };
  },

  async getChildFromParent() {
    const auth = firebase.auth();
    try {
      const snapshot = await firebase
        .database()
        .ref("parent/" + auth.currentUser.uid)
        .once("value");
      const CID = snapshot.val().childID;
      const childRef = await firebase
        .database()
        .ref("child/" + CID)
        .once("value");
      return { childDetails: childRef.val(), childID: CID };
    } catch (err) {
      throw err;
    }
  },

  addExercise(childID, name) {
    return new Promise((resolve, reject) => {
      let timeStamp = new Date().toDateString();
      const childRef = firebase
        .database()
        .ref("child/" + childID + "/exercises/");
      const exeRef = firebase.database().ref("exercise/");
      try {
        var newExe = exeRef.push();
        newExe
          .set({
            exerciseName: name,
            correctTaps: 0,
            wrongTaps: 0,
            totalTaps: 0,
            score: 0,
            isPlayed: false,
            timeStamp: timeStamp,
            status: false,
            totalDuration: 0
          })
          .then(() => {
            childRef.once("value").then(snapshot => {
              var exercise = childRef.push();
              exercise
                .set({ exerciseId: newExe.key, order: snapshot.numChildren() })
                .then(() => {
                  resolve(newExe.key);
                });
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
        .ref("child/" + childID + "/exercises/")
        .orderByChild("order");
      try {
        childRef.on("value", snapshot => {
          var numExe = snapshot.numChildren();
          if (numExe == 0) {
            resolve(response);
          }
          snapshot.forEach(exe => {
            var exeRef = firebase
              .database()
              .ref("exercise/" + exe.val().exerciseId);
            exeRef.once("value").then(snapshot => {
              response.push({
                folderDetails: snapshot.val(),
                folderID: snapshot.key
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

  fetchOrderList(childID) {
    return new Promise((resolve, reject) => {
      var response = [];
      const childRef = firebase
        .database()
        .ref("child/" + childID + "/exercises/")
        .orderByChild("order");
      try {
        childRef.on("value", snapshot => {
          var numExe = snapshot.numChildren();
          if (numExe == 0) {
            resolve(response);
          }
          response.length = 0;
          snapshot.forEach(exe => {
            response.push({
              order: exe.val().order,
              exerciseID: exe.val().exerciseId
            });
            if (response.length == numExe) {
              resolve(response);
            }
          });
        });
      } catch (err) {
        reject(err);
      }
    });
  },

  updateOrder(childID, folder1ID, order1, folder2ID, order2) {
    try {
      return new Promise((resolve, reject) => {
        const childRef = firebase
          .database()
          .ref("child/" + childID + "/exercises/")
          .orderByChild("order");
        try {
          childRef.on("value", snapshot => {
            var numExe = snapshot.numChildren();
            if (numExe == 0) {
              resolve();
            }
            snapshot.forEach(exe => {
              let exeRef = firebase
                .database()
                .ref("child/" + childID + "/exercises/" + exe.key);
              if (exe.val().exerciseId == folder2ID) {
                exeRef.update({ order: order2 });
              } else if (exe.val().exerciseId == folder1ID) {
                exeRef.update({ order: order1 });
                resolve();
              }
            });
          });
        } catch (err) {
          reject(err);
        }
      });
    } catch (err) {
      console.log(err);
    }
  },

  addImage(exeID, images) {
    return new Promise(async (resolve, reject) => {
      for (let i in images) {
        const exeRef = firebase
          .database()
          .ref("exercise/" + exeID + "/images/");
        const imageRef = firebase.database().ref("image");
        const store = firebase.storage().ref();

        try {
          var newImg = imageRef.push();
          const metadata = {
            contentType: "image/jpeg"
          };
          const RNBlob = RNFetchBlob.polyfill.Blob;
          let blob = await RNBlob.build(RNFetchBlob.wrap(images[i].path), {
            type: "image/jpg;"
          });
          const storageRef = await store.child(
            exeID + "/" + newImg.key + ".jpg"
          );
          await storageRef.put(blob, metadata);
          let URL = await storageRef.getDownloadURL();
          await newImg.set({
            correctTaps: 0,
            wrongTaps: 0,
            score: 0,
            status: false,
            touchDuration: 0,
            url: URL,
            waitTime: 0
          });
          var image = await exeRef.push();
          await image.set({ imageID: newImg.key });
          if (i == images.length - 1) {
            resolve("success");
          }
        } catch (err) {
          reject(err);
        }
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
                imageDetails: snapshot.val()
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
          resolve({ folderDetails: snapshot.val(), folderID: exeID });
        });
      } catch (err) {
        reject(err);
      }
    });
  },

  verifyEmail() {
    const auth = firebase.auth();
    return new Promise((resolve, reject) => {
      try {
        auth.currentUser.sendEmailVerification().then(() => {
          resolve("success");
        });
      } catch (err) {
        reject(err);
      }
    });
  },

  updateExercise(exeID, update) {
    return new Promise((resolve, reject) => {
      // let timeStamp = new Date().toDateString();
      // update = { ...update, timeStamp: timeStamp };
      const exeRef = firebase.database().ref("exercise/" + exeID);
      try {
        exeRef.update(update).then(() => {
          resolve(exeID);
        });
      } catch (err) {
        reject(err);
      }
    });
  },

  updateParent(name) {
    return new Promise((resolve, reject) => {
      try {
        firebase
          .auth()
          .currentUser.updateProfile({ displayName: name })
          .then(() => {
            resolve();
          });
      } catch (err) {
        reject(err);
      }
    });
  },

  updateChild(childID, update) {
    return new Promise((resolve, reject) => {
      const childRef = firebase.database().ref("child/" + childID);
      try {
        childRef.update(update).then(() => {
          resolve(childID);
        });
      } catch (err) {
        reject(err);
      }
    });
  },

  updateSettings(update) {
    return new Promise((resolve, reject) => {
      const childRef = firebase
        .database()
        .ref("parent/" + firebase.auth().currentUser.uid + "/settings/");
      try {
        childRef.update(update).then(() => {
          resolve();
        });
      } catch (err) {
        reject(err);
      }
    });
  },

  fetchRandomImageList() {
    return new Promise((resolve, reject) => {
      const listRef = firebase.database().ref("auxilary/images/");
      try {
        let list = [];
        listRef.once("value").then(snapshot => {
          snapshot.forEach(img => {
            list.push(img.val());
          });
          resolve(list);
        });
      } catch (err) {
        reject(err);
      }
    });
  },

  updateImage(imgID, update) {
    return new Promise((resolve, reject) => {
      const imgRef = firebase.database().ref("image/" + imgID);
      try {
        imgRef.update(update).then(() => {
          resolve(imgID);
        });
      } catch (err) {
        reject(err);
      }
    });
  },

  removeFolder(exeID, childID) {
    return new Promise((resolve, reject) => {
      try {
        const childRef = firebase
          .database()
          .ref("child/" + childID + "/exercises");
        const exeRef = firebase.database().ref("exercise/" + exeID);
        const imgListRef = firebase
          .database()
          .ref("exercise/" + exeID + "/images");
        let currentOrder;
        imgListRef.once("value").then(snapshot => {
          let count = 1;
          let numImg = snapshot.numChildren();
          snapshot.forEach(img => {
            var imgRef = firebase.database().ref("image/" + img.val().imageID);
            imgRef.remove();
            ++count;
            if (count == numImg) {
              exeRef.remove().then(() => {
                childRef.once("value").then(snapshot => {
                  snapshot.forEach(exe => {
                    if (exeID == exe.val().exerciseId) {
                      currentOrder = exe.val().order;
                      firebase
                        .database()
                        .ref("child/" + childID + "/exercises/" + exe.key)
                        .remove()
                        .then(() => {
                          let cnt = 0;
                          childRef.once("value").then(snapshot => {
                            snapshot.forEach(exe => {
                              let newOrder = exe.val().order;
                              if (newOrder > currentOrder) {
                                firebase
                                  .database()
                                  .ref(
                                    "child/" + childID + "/exercises/" + exe.key
                                  )
                                  .update({ order: --newOrder });
                              }
                              ++cnt;
                              if (cnt == snapshot.numChildren()) {
                                resolve("");
                              }
                            });
                          });
                        });
                    }
                  });
                });
              });
            }
          });
        });
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  },

  resetPassword(email) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          resolve("");
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  async addPrize(childID, points, description) {
    const childRef = firebase.database().ref("child/" + childID + "/prizes/");
    let prize = childRef.push();
    try {
      await prize.set({ description: description, points: parseInt(points) });
      return prize.key;
    } catch (err) {
      return err;
    }
  },

  fetchPrizeList(childID) {
    return new Promise((resolve, reject) => {
      const childRef = firebase
        .database()
        .ref("child/" + childID + "/prizes/")
        .orderByChild("points");
      let response = [];
      try {
        childRef.once("value").then(snapshot => {
          var numExe = snapshot.numChildren();
          if (numExe == 0) {
            resolve(response);
          } else {
            snapshot.forEach(prize => {
              response.push({
                prizeID: prize.key,
                points: prize.val().points,
                description: prize.val().description
              });
              if (response.length == numExe) {
                resolve(response);
              }
            });
          }
        });
      } catch (err) {
        reject(err);
      }
    });
  },
  fetchStockImageList() {
    return new Promise((resolve, reject) => {
      try {
        const stockRef = firebase.database().ref("stockImages");
        let response = [];
        stockRef.once("value").then(snapshot => {
          let numFolder = snapshot.numChildren();
          snapshot.forEach(folder => {
            let dataFolderContent = [];
            const folderRef = firebase
              .database()
              .ref("stockImages/" + folder.key + "/");
            folderRef.once("value").then(snapshot => {
              snapshot.forEach(img => {
                dataFolderContent.push({
                  uri: img.val().url
                });
                if (dataFolderContent.length === snapshot.numChildren()) {
                  response.push({
                    name: folder.key,
                    dataFolderContent: dataFolderContent
                  });
                }
                if (response.length == numFolder) {
                  resolve(response);
                }
              });
            });
          });
        });
      } catch (error) {
        reject(error);
      }
    });
  },

  removePrize(childID, prizeID) {
    return new Promise((resolve, reject) => {
      try {
        const prizeRef = firebase
          .database()
          .ref("child/" + childID + "/prizes/" + prizeID);
        prizeRef.remove().then(() => {
          resolve("success");
        });
      } catch (error) {
        reject(error);
      }
    });
  },

  updatePrize(childID, prizeID, update) {
    return new Promise((resolve, reject) => {
      try {
        const prizeRef = firebase
          .database()
          .ref("child/" + childID + "/prizes/" + prizeID);
        prizeRef.update(update).then(() => {
          resolve("success");
        });
      } catch (error) {
        reject(error);
      }
    });
  },

  addStockImages(exeID, images) {
    return new Promise(async (resolve, reject) => {
      for (let i in images) {
        const exeRef = firebase
          .database()
          .ref("exercise/" + exeID + "/images/");
        const imageRef = firebase.database().ref("image");
        try {
          var newImg = imageRef.push();
          let URL = images[i].path;
          await newImg.set({
            correctTaps: 0,
            wrongTaps: 0,
            score: 0,
            status: false,
            touchDuration: 0,
            url: URL,
            waitTime: 0
          });
          var image = await exeRef.push();
          await image.set({ imageID: newImg.key });
          if (i == images.length - 1) {
            resolve("success");
          }
        } catch (err) {
          reject(err);
        }
      }
    });
  }
};
