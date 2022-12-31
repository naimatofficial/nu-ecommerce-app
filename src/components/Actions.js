import { addToCart, removeFromCart } from "../services/Cart/action";

import { useDispatch } from "react-redux";

const Actions = ({ product }) => {
	const dispatch = useDispatch();
	return (
		<div className="cart-actions">
			<button
				className="btn btn-primary"
				onClick={() => dispatch(addToCart(product))}
			>
				Add to Cart
			</button>
			<button
				className="btn btn-secondary"
				onClick={() => dispatch(removeFromCart(product.id))}
			>
				Remove to Cart
			</button>
		</div>
	);
};

export default Actions;
