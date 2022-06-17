import React from 'react';

class SearchBar extends React.Component {
    // onInputChange(event) {
    //     event.target.value
    // }

    state = { term: '' };

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* onChange={(event) => event.target.value} */}
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;