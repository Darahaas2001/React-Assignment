import React, { useEffect, useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { newPosts, gridCount } from '../Actions';
import Filter from './Filter';
import Sort from './Sort';
import { Search } from '../Utils';
const SearchBar = (props) => {
	const [term, setSearchTerm] = useState('');
	useEffect(() => {
		let timer = setTimeout(() => {
			let val = Search(props.posts, term);

			props.newPosts(val);
		}, 500);

		return () => {
			clearTimeout(timer);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [term]);

	const gridHandler = (val) => {
		props.gridCount(val);
	};

	return (
		<div className="ui menu">
			<div className="item">
				<div className="ui icon input">
					<input
						id="search"
						type="text"
						placeholder="Search..."
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<i className="search icon"></i>
				</div>
			</div>

			<div className="item">
				<Filter />
			</div>
			<div className="item">
				<Sort />
			</div>
			<div className="item">
				<Icon name="heart" color="red" />
				{props.likes.length}
			</div>

			<div className="right item">
				<Button.Group>
					<Button onClick={(e) => gridHandler(4)} icon>
						<Icon name="th" />
					</Button>
					<Button icon onClick={(e) => gridHandler(2)}>
						<Icon name="th large" />
					</Button>
				</Button.Group>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => {
	return { posts: state.posts, likes: state.like };
};
export default connect(mapStateToProps, { newPosts, gridCount })(SearchBar);
