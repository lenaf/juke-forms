import React, { Component } from 'react';
import axios from 'axios';
import Songs from './Songs';

export default class Playlist extends Component {

    constructor() {
        super();
        this.state = {
            playlist: {}
        };
    }

    componentDidMount() {

        const playlistId = this.props.match.params.playlistId;

        axios.get(`/api/playlists/${playlistId}`)
            .then(res => res.data)
            .then(playlist => {
                this.setState({ playlist })
            });
    }

    render() {

        var playlist = this.state.playlist

        return (
            <div>
                <h3>{playlist.name}</h3>
                <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
                {playlist.songs && !playlist.songs.length && <small>No songs.</small>}
                <hr />
            </div>
        );
    }
}
