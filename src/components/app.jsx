import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import ActiveVideo from './active_video';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoListItem from './video_list_item';

const API_KEY = 'AIzaSyA7xjqxI8Dobx2EhGsKG4xBOQzhUZ5JD-g';

class App extends Component {
	constructor(props) {
		super(props);

		this.state= {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('deathstarcanteen')
	}

	videoSearch(term) {
		YTSearch({key:API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}
	render() {
   	return (
   	<div>
   	<SearchBar />
   	tktkt
{/*   		<ActiveVideo />
*/}   	</div>
    );
  }
}
export default App;
