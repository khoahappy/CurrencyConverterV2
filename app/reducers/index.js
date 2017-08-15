import { combineReducers } from "redux";
import currencies from "./currencies";
import themes from "./themes";
import nav from "./nav";
export default combineReducers({
    currencies,
    themes,
    nav
});
