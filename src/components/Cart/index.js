import React from "react";
import { useSelector } from "react-redux";
import "./cart.css";

const Cart = () => {
	const cartData = useSelector((state) => state.cartData);
	console.log("cart data: ", cartData);
	const amount =
		cartData.length &&
		cartData.map((item) => item.price).reduce((prev, next) => prev + next);

	return (
		<>
			<h1 className="main-heading">Cart Details</h1>
			{/* <div className="cart">
				{cartData.map((item) => {
					return <CartList item={item} key={item.id} />;
				})}
			</div> */}
			{/* Cart details in Table form  */}
			<table className="cart-table">
				<tr>
					<th>Product Name</th>
					<th>Color</th>
					<th>Price</th>
					<th>Description</th>
				</tr>
				{cartData.map((item) => {
					console.log(item);
					return (
						<tr key={item.id}>
							<td>{item.title}</td>
							<td>{item.color}</td>
							<td>{item.price}</td>
							<td>{item.description}</td>
						</tr>
					);
				})}
			</table>

			<div className="products-list">
				<div className="products-list__item">
					<p>Amount</p>
					<span>{parseFloat(amount).toFixed(3)}</span>
				</div>
				<div className="products-list__item">
					<p>Discount</p>
					<span>{parseFloat(amount / 5).toFixed(3)}</span>
				</div>
				<div className="products-list__item">
					<p>Tax*</p>
					<span>{parseFloat(amount / 50).toFixed(3)}</span>
				</div>
				<div className="products-list__item">
					<p>Total</p>
					<span>{parseFloat(amount + amount / 50).toFixed(3)}</span>
				</div>
			</div>
		</>
	);
};

export default Cart;
