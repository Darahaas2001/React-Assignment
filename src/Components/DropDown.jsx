import React from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { newPosts } from '../Actions';
import { Filter, Sort } from '../Utils';

const DropDown = (props) => {
	const clickHandler = (text) => {
		console.log(text);
		if (['Male', 'Female'].includes(text)) {
			console.log('Im here');
			props.newPosts(Filter(props.posts, text));
		} else if (text === 'Age') {
			props.newPosts(Sort(props.posts, text));
		}
	};

	return (
		<Dropdown
			text={props.text}
			icon={props.icon}
			floating
			labeled
			button
			className="icon"
		>
			<Dropdown.Menu>
				<Dropdown.Header icon="user" content={props.content} />
				<Dropdown.Menu scrolling>
					{props.tagOptions.map((option) => (
						<Dropdown.Item
							key={option.value}
							{...option}
							onClick={(e) => clickHandler(e.target.innerText)}
						/>
					))}
				</Dropdown.Menu>
			</Dropdown.Menu>
		</Dropdown>
	);
};

const mapStateToProps = (state) => {
	return {
		posts: state.posts,
	};
};
export default connect(mapStateToProps, { newPosts })(DropDown);
