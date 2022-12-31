import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ product }) => {
	return (
		<ul className="product-list">
			<ProductItem product={product} />
		</ul>
	);
};

export default ProductList;
