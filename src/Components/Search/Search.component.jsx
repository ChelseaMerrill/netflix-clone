import React, {Component} from 'react'
import './search.styles.css'


class Search extends Component {
    constructor(props){
        super(props)
        this.state = { 
            movies: [],
        }
    }
    render(){
        return <div>
           <input placeholder='Search'></input>
           <button>Go</button> 
        </div>
    }
}
//onClick for Go -> 
// search database for title 
//search result component with 'results' props



export default Search