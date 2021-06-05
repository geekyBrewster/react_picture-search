import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };
    
    //Need to make this an arrow function so we bind 'this' to the context here instead of using child/SearchBar's context
    onSearchSubmit = async (searchTerm) =>{
        const response = await unsplash.get('/search/photos', {
            params: { query: searchTerm },

        });
        //one way to get response since GET returns a promise
        // }).then((response) => {
        //     this.setState({ images: response.data.results });
        // })

        this.setState({ images: response.data.results }); //or use async/await
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onInputSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
                <ImageList images={this.state.images} />
            </div>
            
        );
    }

}


export default App;