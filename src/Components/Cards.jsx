import React, { useEffect } from 'react';
import {
	Container,
	Card,
	Icon,
	Dimmer,
	Loader,
	Image,
	Segment,
	Grid,
	Button,
} from 'semantic-ui-react';
import '../CSS/Cards.css';

import { connect } from 'react-redux';
import { fetchUsers, like } from '../Actions';

const Cards = (props) => {
	useEffect(() => {
		props.fetchUsers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const clickHandler = (id) => {
		if (!props.likes.includes(id))
			return props.like({ operation: 'PUSH', data: id });
		return props.like({ operation: 'POP', data: id });
	};

	const cardClickHandler = (salt) => {
		let data = props.posts.filter((post) => post.login.salt === salt);
		window.localStorage.setItem('arr', JSON.stringify(data));
		window.location.pathname = `/info/${salt}`;
	};

	const cards = () => {
		if (props.posts && props.posts.length > 0) {
			return props.posts.map((card) => {
				return (
					<Grid.Column>
						<Card>
							<Image
								src={require('../Images/matthew.png')}
								wrapped
								ui={false}
								onClick={(e) => cardClickHandler(card.login.salt)}
							/>
							<Card.Content>
								<Card.Header>
									{card.name.title}.{card.name.first} {card.name.last}
								</Card.Header>
								<Card.Meta>{card.email}</Card.Meta>
								<Card.Meta>Age : {card.dob.age}</Card.Meta>
							</Card.Content>
							<Card.Content extra>
								<a href="*#" style={{ pointerEvents: 'none' }}>
									<Icon name="user" />
									{card.gender}
								</a>

								<Button
									color={props.likes.includes(card.login.salt) ? 'red' : 'grey'}
									floated="right"
									id={card.login.salt}
									onClick={(e) => clickHandler(e.target.id)}
								>
									<Icon name="heart" />
									like
								</Button>
							</Card.Content>
						</Card>
					</Grid.Column>
				);
			});
		}
		return (
			<div>
				<Segment>
					<Dimmer active>
						<Loader indeterminate>Loading !!!</Loader>
					</Dimmer>
				</Segment>
			</div>
		);
	};

	return (
		<Container>
			<Grid>
				<Grid.Row relaxed columns={props.gridCount}>
					{cards()}
				</Grid.Row>
			</Grid>
		</Container>
	);
};

const mapStateToProps = (state) => {
	if (state.newPosts.length > 0) {
		return {
			posts: state.newPosts,
			gridCount: state.gridCount,
			likes: state.like,
		};
	}
	return { posts: state.posts, gridCount: state.gridCount, likes: state.like };
};

export default connect(mapStateToProps, { fetchUsers, like })(Cards);

/**
 *   <Card>
    <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Daniel</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
  </Card>
 */
