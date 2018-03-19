/**
 * Created by shuozhao on 3/18/18.
 */
import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term : ''};
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <form onSubmit={(event) => event.preventDefault()} className="input-group">
                <input
                    placeholder="Get a five-day forcast in your favorite citeis"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}
