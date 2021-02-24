import React, {Component} from 'react';
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
            input1: ''
        }; 
    }
    render() {
       // return <input onChange={this.onInputChange}/>;
       return ( 
        <div>
        <input
        value={this.state.input1}
        onChange={event => {
           console.log('changes: ' + event.target.value);
           this.setState({
            input1: event.target.value
           });
           }
        }/>
        value of input 1 is: {this.state.input1}
       
        </div>
        
        
        );
    }

   /* onInputChange(event) {
        console.log('changes: ' + event.target.value);
    }*/
}
export default SearchBar;