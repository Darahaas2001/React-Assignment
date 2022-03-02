import React from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';

const tagOptions = [
	{
		key: 'Male',
		text: 'Male',
		value: 'Male',
		label: { color: 'blue', empty: true, circular: true },
	},
	{
		key: 'Female',
		text: 'Female',
		value: 'Female',
		label: { color: 'pink', empty: true, circular: true },
	},
];
const Filter = (props) => {
	return (
		<DropDown
			tagOptions={tagOptions}
			text={'Filter'}
			icon={'filter'}
			content={'Select Gender'}
		/>
	);
};
const mapStateToProps = (state) => {
	return state;
};
export default connect(mapStateToProps)(Filter);
