import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(searchTerm){
        //Will eventually make API call here using value
        //returned from SearchBar component
        console.log(searchTerm);
    };

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onInputSubmit={this.onSearchSubmit}/>
            </div>
            
        );
    }

}


export default App;