import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "../constants";

export const addToCart = (data) => {
	return {
		type: ADD_TO_CART,
		data,
	};
};

export const removeFromCart = (productId) => {
	return {
		type: REMOVE_FROM_CART,
		productId,
	};
};

export const emptyCart = () => {
	return {
		type: EMPTY_CART,
	};
};
