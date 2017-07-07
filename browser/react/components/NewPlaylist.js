import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class NewPlaylist extends Component {

    constructor() {
        super();

        this.state = {
            inputValue: "",
            dirty: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
       this.setState({
           inputValue:''
       });
       axios.post('/api/playlists/',{name : this.state.inputValue})
        .then(res => res.data)
        .then(result => {
         console.log(result) // response json from the server!
  });


    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value,
            dirty:true
        });

    }

    render() {

        return (

            <div className="well">
                <form
                    className="form-horizontal"
                    onSubmit={this.handleSubmit}
                >
                    <fieldset>
                        <legend>New Playlist</legend>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">Name</label>
                            <div className="col-xs-10">
                                <input
                                    onChange={this.handleChange}
                                    className="form-control"
                                    type="text"
                                    value={this.state.inputValue}
                                />
                            </div>
                        </div>
                        { this.state.inputValue.length>16 ||(this.state.dirty &&this.state.inputValue.length<1) ?
                        <div className="alert alert-warning">Please enter a name</div> :
                        <div></div>
                        }
                        <div className="form-group">
                            <div className="col-xs-10 col-xs-offset-2">
                                <button type="submit" className="btn btn-success" disabled ={this.state.inputValue.length>16 ||this.state.inputValue.length<1}>Create Playlist</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>

        )
    }

}
