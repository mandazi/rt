import React from "react"

export default class EpisodeLink extends React.Component {
    
    render() {
        return (
            <div className="series-episode-wrapper">
                <a href={`/series/${this.props.series.url}/episode/${this.props.episode.episode}/`}>
                    <img src={`https://img.youtube.com/vi/${this.props.episode.youtube_id}/maxresdefault.jpg`} alt={this.props.episode.name} border="0" width="250" />
                    <h3>{this.props.episode.name}</h3>
                    <h4>Episode: {this.props.episode.episode}</h4>
                </a>
            </div>
        )
    }
}