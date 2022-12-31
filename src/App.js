import Feed from "./components/Layout/Feed";
import Header from "./components/Layout/Header";

import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { Fragment } from "react";

function App() {
	return (
		<Fragment>
			<Header />
			<div className="app-feed">
				<Routes>
					<Route path="/" element={<Feed />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
		</Fragment>
	);
}

export default App;
