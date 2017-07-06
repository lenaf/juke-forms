import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class NewPlaylist extends Component {

    constructor() {
        super();

        this.state = {
            inputValue: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
       this.setState({
           inputValue:''
       });
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value
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
                        <div className="form-group">
                            <div className="col-xs-10 col-xs-offset-2">
                                <button type="submit" className="btn btn-success" disabled ={this.state.inputValue.length>16 ||this.state.inputValue.length<1 }>Create Playlist</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>

        )
    }

}
