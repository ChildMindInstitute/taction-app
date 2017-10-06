import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

// import logger from "redux-logger";

import reducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// store.subscribe(() => {
//   console.log("store changed", store.getState());
// });

sagaMiddleware.run(rootSaga);

export default store;
