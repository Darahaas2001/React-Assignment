export const Search = (inputArr, term) => {
	if (!term) return inputArr;
	let searchExp = new RegExp(term, 'i');
	let newArr = inputArr.filter(
		(obj) =>
			searchExp.test(obj.name.first) ||
			searchExp.test(obj.name.last) ||
			searchExp.test(obj.email)
	);
	return newArr;
};

export const Filter = (inputArr, key) => {
	if (!key) return [];
	let newArr = inputArr.filter((input) => input.gender === key.toLowerCase());
	return newArr;
};

export const Sort = (inputArr, key) => {
	if (!key) return [];
	let newArr = inputArr.sort((a, b) => b.dob.age - a.dob.age);
	return newArr;
};
