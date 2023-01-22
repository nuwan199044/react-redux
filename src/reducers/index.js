import { combineReducers } from "redux";
import AllPostReducer from './reducer-AllPost';
import SelectedPostReducer from './reducer-SelectedPost';

const rootReducer = combineReducers({
    allPosts : AllPostReducer,
    selectedPost : SelectedPostReducer
})

export default rootReducer;

