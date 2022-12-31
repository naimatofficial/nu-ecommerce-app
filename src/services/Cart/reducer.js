import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "../constants";

export const cartData = (initialData = [], action) => {
	let updateCart; // duplicate the data

	switch (action.type) {
		case ADD_TO_CART:
			return [...initialData, action.data];
		case REMOVE_FROM_CART:
			if (initialData.length > 0) {
				updateCart = [...initialData];
				updateCart = updateCart.filter((p) => p.id !== action.productId);
				return updateCart;
			}
			return initialData;
		case EMPTY_CART:
			if (initialData.length > 0) {
				initialData = [];
				console.log("Empty-cart action Called");
				return initialData;
			}
			console.log("cart alerdy empty");
			return initialData;

		default:
			return initialData;
	}
};

// const prodId = action.data.id;
// const productIndex = initialData.findIndex((p) => p.id === prodId);
// const existingProduct = initialData[productIndex];
// let updateProduct;
// if (existingProduct) {
// 	updateProduct = { ...existingProduct };
// 	updateProduct.quanity = updateProduct.quanity + 1;
// 	initialData = [...initialData];
// 	initialData[productIndex] = updateProduct;
// 	return [...initialData];
// } else {
// 	updateProduct = { id: prodId, quanity: 1 };
// 	initialData = [...initialData, updateProduct];
// 	return [...initialData];
// }
