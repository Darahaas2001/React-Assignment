import React from 'react';
import SearchBar from './SearchBar';
import Cards from './Cards';
import '../CSS/App.css';

function App() {
	return (
		<div className="ui container">
			<SearchBar />
			<Cards />
		</div>
	);
}

export default App;
