import { combineReducers } from 'redux';

const getPosts = (state = [], action) => {
	if (action.type === 'GET_USERS') {
		return action.payload;
	}
	return state;
};

const gridCount = (state = 3, action) => {
	if (action.type === 'GRID_COUNT') {
		return action.payload;
	}
	return state;
};

const newPosts = (state = [], action) => {
	if (action.type === 'NEW_POSTS') return action.payload;
	return state;
};

const like = (state = [], action) => {
	if (action.type === 'LIKE' && action.payload.operation === 'PUSH') {
		return [...state, action.payload.data];
	} else if (action.type === 'LIKE' && action.payload.operation === 'POP') {
		return state.filter((post) => post !== action.payload.data);
	}
	return state;
};
export default combineReducers({
	posts: getPosts,
	gridCount,
	newPosts,
	like,
});
