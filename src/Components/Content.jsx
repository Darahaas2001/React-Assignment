import React from 'react';

import { Button, Item } from 'semantic-ui-react';
import { connect } from 'react-redux';

const Content = (props) => {
	let posts = JSON.parse(window.localStorage.getItem('arr'));
	console.log(posts);
	const mappedData = posts.map((post) => {
		return (
			<Item.Group relaxed>
				<Item>
					<Item.Image size="small" src={require('../Images/matthew.png')} />

					<Item.Content verticalAlign="middle">
						<Item.Header>
							{post.name.title}.{post.name.first} {post.name.last}
						</Item.Header>
						<Item.Description>
							Gender : {post.gender} <br /> Country : {post.location.country}{' '}
							<br /> Email : {post.email} <br /> Age : {post.dob.age}{' '}
						</Item.Description>
						<Item.Extra>
							<Button
								onClick={(e) => (window.location.pathname = '/')}
								floated="right"
							>
								Go Back
							</Button>
						</Item.Extra>
					</Item.Content>
				</Item>
			</Item.Group>
		);
	});
	return <React.Fragment>{mappedData}</React.Fragment>;
};
const mapStateToProps = (state) => {
	return { posts: state.posts };
};

export default connect(mapStateToProps)(Content);
