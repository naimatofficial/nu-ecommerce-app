import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST, SEARCH_PRODUCT } from "../constants";

function* getProducts() {
	let data;
	yield fetch("http://localhost:4000/products")
		.then((respnse) => {
			// convert into json format
			return respnse.json();
		})
		.then((products) => {
			data = products;
		})
		.catch((err) => console.log(err));

	yield put({ type: SET_PRODUCT_LIST, data: data });
}

function* searchProducts(_data) {
	let data;
	yield fetch(`http://localhost:4000/products?q=${_data.query}`)
		.then((respnse) => {
			// convert into json format
			return respnse.json();
		})
		.then((products) => {
			data = products;
		})
		.catch((err) => console.log(err));

	yield put({ type: SET_PRODUCT_LIST, data: data });
}

function* productSaga() {
	yield takeEvery(PRODUCT_LIST, getProducts);
	yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

export default productSaga;
