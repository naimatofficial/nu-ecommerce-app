import React from "react";
import CartItem from "./CartItem";

const CartList = ({ item }) => {
	return (
		<ul className="cart-list">
			<CartItem item={item} />
		</ul>
	);
};

export default CartList;
