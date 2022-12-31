// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

import productSaga from "./Product/product-saga";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(rootReducer);

const store = configureStore({
	reducer: rootReducer,
	middleware: () => [sagaMiddleware],
});

// run the middleware --- ProductSaga
sagaMiddleware.run(productSaga);
export default store;
