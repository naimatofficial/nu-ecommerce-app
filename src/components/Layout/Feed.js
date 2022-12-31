import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { productList } from "../../services/Product/action";
import Product from "../Product";

const Feed = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(productList());
	}, [dispatch]);

	return (
		<div className="feed">
			{productList ? <Product /> : "No Product Found!"}
		</div>
	);
};

export default Feed;
