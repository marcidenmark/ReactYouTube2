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
		this.state = {
			videos: [],
			selectedVideo: [0]
		};
		this.videoSearch('siliconvalley')
	}

	videoSearch(term) {
		YTSearch({key:API_KEY, term: term}, (videos)=> {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}
	render() {
		const videoSearch = _ .debounce((term ) => { this.videoSearch(term)}, 300 )
		// the function will be called once every 300 miliseconds
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />

			</div>
		);
	}
}
export default App;
//				<VideoListItem video= {this.state.selectedVideo} />
// 				<VideoList
//					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
//					videos={this.state.videos} />

