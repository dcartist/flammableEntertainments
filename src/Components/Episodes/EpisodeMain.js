import React, { Component } from 'react';
import Episode from './Epsidode';

import axios from 'axios';

class EpisodeMain extends Component {
	constructor(props) {
		super();
		this.state = {
			id: props.match.params.id,
			episodeData: [],
		};
	}

	componentDidMount() {
		axios
			.get(`https://flameableent.com/wp-json/acf/v3/posts/${this.state.id}`)
			.then((results) => this.setState({ episodeData: results.data }));
	}

	render() {
		if (this.state.episodeData.length == 0) {
			return <div />;
		} else if (this.state.episodeData.acf) {
			if (this.state.episodeData.acf.episode_num == null) {
				return <div>sorry</div>;
			} else {
				return (
					<div>
						<Episode {...this.state.episodeData.acf} />
					</div>
				);
			}
		} else {
			return <div>missing</div>;
		}
	}
}

export default EpisodeMain;
