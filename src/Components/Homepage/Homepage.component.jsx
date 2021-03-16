import React, {Component} from 'react';
import MovieCard from '../MovieCard/MovieCard.component.jsx';
import Trending from './trending.jpg'
import Romance from './romance.jpg'
import Comedy from './comedy.jpg'
import './Homepage.styles.css'

class Homepage extends Component {
    constructor(){
        super()
        this.state = { 
            movies: [],
            another:[],
            comedy:[],
        }
    }


    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=7e21b72b8f689d3251fd5259f0c5b1b7`)
            .then(data => data.json())
            .then(response => response) 
            .then(data => this.setState({movies: data.results}))
        fetch(`https://api.themoviedb.org/3/search/movie?query=romance&api_key=7e21b72b8f689d3251fd5259f0c5b1b7`)
            .then(data => data.json())
            .then(response => response) 
            .then(data => this.setState({another: data.results}))    
        fetch(`https://api.themoviedb.org/3/search/movie?query=funny&api_key=7e21b72b8f689d3251fd5259f0c5b1b7`)
            .then(data => data.json())
            .then(response => response) 
            .then(data => this.setState({comedy: data.results}))
    }


    render(){
        return(
            <div className='background'>
                <div className='title'>
                <img src={Trending} width='250px'/>
                </div>
                <div className='movies'>
                    {this.state.movies.map(movie =>  <MovieCard key={movie.id} movie={movie}/>)}
                </div>
                    <div className='title'>
                    <img src={Romance} width='250px'/>
                    </div>
                <div className='movies'>
                    {this.state.another.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
                </div>
                <div className='title'>
                <img src={Comedy} width='250px'/>
                </div>
                <div className='movies'>
                    {this.state.comedy.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
               
                </div>

            </div>
        )
    }
}
export default Homepage