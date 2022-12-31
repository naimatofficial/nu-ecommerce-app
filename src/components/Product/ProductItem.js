import React from "react";
import Actions from "../Actions";

const ProductItem = ({ product }) => {
	return (
		<li className="product-item">
			<img src={product.imageUrl} alt={product.title} />
			<h1>{product.title}</h1>
			<p>
				Price: $ <span>{product.price}</span>
			</p>
			<p>{product.description}</p>
			<Actions product={product} />
		</li>
	);
};

export default ProductItem;
