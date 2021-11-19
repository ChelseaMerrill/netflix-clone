import React, {Component} from 'react';
import MovieCard from '../MovieCard/MovieCard.component.jsx';
import './myList.styles.css'

class myListPage extends Component {
    constructor(){
        super()
        this.state = { 
            movies: [],
        }
    }


    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=7e21b72b8f689d3251fd5259f0c5b1b7`)
            .then(data => data.json())
            .then(response => response) 
            .then(data => this.setState({movies: data.results}))
    }


    render(){
        return(
            <div className='background'>
                <div className='title'>
                    <h1>My List</h1>
                </div>
                <div className='myListMovies'>
                    {this.state.movies.map(movie =>  <MovieCard key={movie.id} movie={movie}/>)}
                </div>
                    
                

            </div>
        )
    }
}
export default myListPage