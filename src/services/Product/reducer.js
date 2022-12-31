import { SET_PRODUCT_LIST } from "../constants";

export const productData = (initialData = [], action) => {
	if (action.type === SET_PRODUCT_LIST) {
		return [...action.data];
	} else {
		return initialData;
	}
};
