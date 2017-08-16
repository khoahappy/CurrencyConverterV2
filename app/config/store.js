import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import logger from "redux-logger";
import reducers from "../reducers";
import rootSaga from "./saga";
const sagaMiddleWare = createSagaMiddleware();

const middleware = [sagaMiddleWare];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleWare.run(rootSaga);

export default store;
