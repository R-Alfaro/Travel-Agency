import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import Slider from './components/Slider';
import Search from './components/Search';
import Iconboxes from './components/Iconboxes';
import PopularPlaces from './components/PopularPlaces';
import Follow from './components/Follow';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Contact from './components/Contact';


class App extends React.Component {
	render() {
		return (
			<div id='home' className="App scrollspy">
				{/* Navbar */}
				<Navbar />

				{/* Sidenav */}
				<Sidenav />

				{/* Slider */}
				<Slider />

				{/* Search */}
				<Search />

				{/* Search */}
				<Iconboxes />

				{/* PopularPlaces */}
				<PopularPlaces />

				{/* Follow */}
				<Follow />

				{/* Gallery */}
				<Gallery />

				{/* Contact */}
				<Contact />

				{/* FOoter */}
				<Footer />
			</div>
		);
	}
}

export default App;