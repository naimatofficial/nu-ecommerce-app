import React from "react";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import "./product.css";

const Product = () => {
	const products = useSelector((state) => state.productData);

	return (
		<>
			<h1 className="main-heading">Product List</h1>
			<div className="product">
				{products.map((product) => {
					return <ProductList product={product} key={product.id} />;
				})}
			</div>
		</>
	);
};

export default Product;
