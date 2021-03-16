import React, {Component} from 'react'
import MovieCard from '../MovieCard/MovieCard.component'
import './searchResults.styles.css'

class SearchResults extends Component {
    constructor(props){
        super(props)
        this.state={
            movies:[],
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=7e21b72b8f689d3251fd5259f0c5b1b7&language=en-US&page=1&include_adult=false&query=${this.props.location.pathname.substring(7)}`)
        .then(res=>res.json())
        .then(res=>this.setState({movies: res.results}))
    }

    render(){
        return <div className='results'>
            {this.state.movies.map(movie => <MovieCard key={movie.id} movie={movie}/> )}
        </div>
    }   
}



export default SearchResults