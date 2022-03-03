import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchBar from './SearchBar';
import Cards from './Cards';
import Content from './Content';
import '../CSS/App.css';

function App() {
	return (
		<div className="ui container">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<React.Fragment>
								<SearchBar />
								<Cards />
							</React.Fragment>
						}
					/>
					<Route path="/info/:salt" element={<Content />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
