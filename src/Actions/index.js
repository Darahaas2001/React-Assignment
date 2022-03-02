import jsonPlaceholder from '../API/jsonPlaceholder';

export const fetchUsers = () => async (dispatch, _getState) => {
	const { data } = await jsonPlaceholder.get('/?&results=20');
	dispatch({ type: 'GET_USERS', payload: data.results });
};

export const gridCount = (count) => {
	return {
		type: 'GRID_COUNT',
		payload: count,
	};
};

export const newPosts = (posts) => {
	return {
		type: 'NEW_POSTS',
		payload: posts,
	};
};

export const like = (id) => {
	return {
		type: 'LIKE',
		payload: id,
	};
};
