import { combineReducers } from "redux";

import { cartData } from "./Cart/reducer";
import { productData } from "./Product/reducer";

export default combineReducers({ cartData, productData });
