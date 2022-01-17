import { createStore } from "redux";
// import { reducer } from "../reducer";
import { loveReducer } from "../reducer";
export default createStore(loveReducer);
