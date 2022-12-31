import React from "react";
import Actions from "../Actions";

const CartItem = ({ item }) => {
	return (
		<li className="cart-item">
			<img src={item.imageUrl} alt={item.title} />
			<h1>{item.title}</h1>
			<p>
				Price: $ <span>{item.price}</span>
			</p>
			<p>{item.description}</p>
			<Actions product={item} />
		</li>
	);
};

export default CartItem;
