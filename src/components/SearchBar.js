import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    onFormSubmit = event => {
        event.preventDefault();
         //props callback func. coming from parent component
         //need to add 'this' for props used inside function
        this.props.onInputSubmit(this.state.term);
    };

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Enter Search Text:</label>
                        <input 
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;