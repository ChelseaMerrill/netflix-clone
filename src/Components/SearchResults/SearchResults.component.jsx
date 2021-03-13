import React, {Component} from 'react'
import MovieCard from '../MovieCard/MovieCard.component'

class SearchResults extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return <div className='results'>
            {this.props.results.map(result => <MovieCard key={result.id} movie={result}/> )}
        </div>
    }   
}



export default SearchResults