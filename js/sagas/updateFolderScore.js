import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const updateFolderScore = function* updateFolderScore(action) {
  let list = action.payload.imageList;
  let folder = action.payload.folder;
  let child = action.payload.child;
  console.log(folder.folderDetails.score);
  child.childDetails.score -= folder.folderDetails.score;
  folder.folderDetails.correctTaps = 0;
  folder.folderDetails.wrongTaps = 0;
  folder.folderDetails.score = 0;
  for (let i = 0; i < list.length; i++) {
    folder.folderDetails.correctTaps += list[i].imageDetails.correctTaps;
    folder.folderDetails.wrongTaps += list[i].imageDetails.wrongTaps;
    folder.folderDetails.score += list[i].imageDetails.score;
    folder.folderDetails.isPlayed = true;
    yield call(Db.updateImage, list[i].imageID, {
      correctTaps: list[i].imageDetails.correctTaps,
      wrongTaps: list[i].imageDetails.wrongTaps,
      score: list[i].imageDetails.score,
      status: true
    });
  }
  console.log(folder.folderDetails.score);

  child.childDetails.totalScore += folder.folderDetails.score;
  if (folder.folderDetails.score > child.childDetails.highScore) {
    child.childDetails.highScore = folder.folderDetails.score;
  }

  yield call(Db.updateExercise, folder.folderID, {
    correctTaps: folder.folderDetails.correctTaps,
    wrongTaps: folder.folderDetails.wrongTaps,
    score: folder.folderDetails.score,
    isPlayed: folder.folderDetails.isPlayed
  });
  yield call(Db.updateChild, child.childID, {
    totalScore: child.childDetails.totalScore,
    highScore: child.childDetails.highScore
  });

  yield put({ type: "FOLDER", payload: folder });
  yield put({ type: "CHILD", payload: child });
  yield put({ type: "LOADED" });
};

const watchUpdateFolderScore = function* watchUpdateFolderScore() {
  yield takeLatest("UPDATE_FOLDER_SCORE", updateFolderScore);
};

export default watchUpdateFolderScore;
