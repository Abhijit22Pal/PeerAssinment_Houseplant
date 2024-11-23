import { createStore } from "redux";
import cartReducer from "./reducers";

// Create a Redux store using the cartReducer
const store = createStore(cartReducer);

export default store;
