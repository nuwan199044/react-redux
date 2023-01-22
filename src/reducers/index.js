import { combineReducers } from "redux";
import AllPostReducer from './reducer-AllPost';

const rootReducer = combineReducers({
    allPosts : AllPostReducer
})

export default rootReducer;

