import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const updateFolderScore = function* updateFolderScore(action) {
  let list = action.payload.imageList;
  let folder = action.payload.folder;
  let child = action.payload.child;
  child.childDetails.totalScore -= folder.folderDetails.score;
  child.childDetails.correctTaps -= folder.folderDetails.correctTaps;
  child.childDetails.wrongTaps -= folder.folderDetails.wrongTaps;
  child.childDetails.todayScore -= folder.folderDetails.score;
  folder.folderDetails.correctTaps = 0;
  folder.folderDetails.wrongTaps = 0;
  folder.folderDetails.score = 0;
  folder.folderDetails.isPlayed = true;
  for (let i = 0; i < list.length; i++) {
    folder.folderDetails.correctTaps += list[i].imageDetails.correctTaps;
    folder.folderDetails.wrongTaps += list[i].imageDetails.wrongTaps;
    folder.folderDetails.score += list[i].imageDetails.score;

    yield call(Db.updateImage, list[i].imageID, {
      correctTaps: list[i].imageDetails.correctTaps,
      wrongTaps: list[i].imageDetails.wrongTaps,
      score: list[i].imageDetails.score,
      status: true
    });
  }
  child.childDetails.todayScore += folder.folderDetails.score;
  child.childDetails.totalScore += folder.folderDetails.score;
  child.childDetails.correctTaps += folder.folderDetails.correctTaps;
  child.childDetails.wrongTaps += folder.folderDetails.wrongTaps;
  if (folder.folderDetails.score > child.childDetails.highScore) {
    child.childDetails.highScore = folder.folderDetails.score;
  }

  yield call(Db.updateExercise, folder.folderID, {
    correctTaps: folder.folderDetails.correctTaps,
    wrongTaps: folder.folderDetails.wrongTaps,
    score: folder.folderDetails.score,
    isPlayed: folder.folderDetails.isPlayed,
    timeStamp: new Date().toDateString()
  });
  yield call(Db.updateChild, child.childID, {
    correctTaps: child.childDetails.correctTaps,
    wrongTaps: child.childDetails.wrongTaps,
    todayScore: child.childDetails.todayScore,
    totalScore: child.childDetails.totalScore,
    highScore: child.childDetails.highScore,
    lastActivity: new Date().toDateString()
  });

  yield put({ type: "FOLDER", payload: folder });
  yield put({ type: "SET_CHILD" });
  yield put({ type: "GAME_OVER" });
};

const watchUpdateFolderScore = function* watchUpdateFolderScore() {
  yield takeLatest("UPDATE_FOLDER_SCORE", updateFolderScore);
};

export default watchUpdateFolderScore;
