import React from 'react';

class SearchBar extends React.Component{
    state = {term: ''}

    onChangeText = (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text"
                               value={this.state.term}
                               onChange={this.onChangeText}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;