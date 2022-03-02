import React from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';

const tagOptions = [
	{
		key: 'Age',
		text: 'Age',
		value: 'Age',
	},
];
const Sort = (props) => {
	return (
		<DropDown
			tagOptions={tagOptions}
			text={'Sort'}
			icon={'sort'}
			content={'Sort By'}
		/>
	);
};
const mapStateToProps = (state) => {
	return state;
};
export default connect(mapStateToProps)(Sort);
