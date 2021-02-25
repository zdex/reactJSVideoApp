import React, { Component } from 'react';
import ReactDom from 'react-dom';

/*
//functional component
const SearchBar = () => {
    return <input/>;
};
*/
//class based component
class SearchBar extends Component {

    constructor(props) {

        super(props);

        this.state = {
            term: ''
        };
    }
    render() {
        // return <input onChange={this.onInputChange}/>;
        return (
            <div className="search-bar">
                <input
                    value={this.state.input1}
                    onChange={event => {
                        console.log('changes: ' + event.target.value);
                        this.setState({
                            term: event.target.value
                        });
                        this.onInputChange(event.target.value);
                    }
                    } />
                    <div>
                        <button onClick={this.search.bind(this)}>Search Button</button>
                    </div>      
                    
            </div>
            
        );      
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearch(term);
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    /* onInputChange(event) {
         console.log('changes: ' + event.target.value);
     }*/
}
export default SearchBar;

/**
 * 
 * <div>
                        <button onClick={this.search.bind(this)}>Search Button</button>
                    </div>

 */