import ShoppingCartLogo from "../../shop-icon.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { productSearch } from "../../services/Product/action";
import { useDispatch } from "react-redux";

import "../style.css";

const Header = () => {
	const dispatch = useDispatch();
	const result = useSelector((state) => state.cartData);
	console.log("updatedCart: ", result);

	return (
		<header className="header">
			<nav className="nav">
				<div className="nav-left">
					<Link to={"/"} className="brand-logo">
						Naimat Shop
					</Link>
					<Link to={"/"}>Products</Link>
					<div className="search-box">
						<input
							type="text"
							placeholder="Search Products"
							onChange={(event) => dispatch(productSearch(event.target.value))}
						/>
					</div>
				</div>

				<Link to={"/cart"}>
					<span>{result.length}</span>
					<img className="cart-logo" src={ShoppingCartLogo} alt="cart-logo" />
				</Link>
			</nav>
		</header>
	);
};

export default Header;
