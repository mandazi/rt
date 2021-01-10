import React from "react"

export default class Episode extends React.Component {
    
    render() {
        console.log(this.props.episode);
        return (
            <div className="series-episode-wrapper">
                <h3>{this.props.episode.name}</h3>
                <h4>Episode: {this.props.episode.episode}</h4>
                <p>{this.props.episode.description}</p>
                <iframe title={this.props.episode.name} width="560" height="315" src={`https://www.youtube.com/embed/${this.props.episode.youtube_id}`} frameBorder="0" allowFullScreen></iframe>
            </div>
        )
    }
}