import React, {Component} from 'react';
import './Homepage.styles.css'

class Homepage extends Component {
    constructor(){
        super()
        this.state = { 
            movies: [],
            another:[],
        }
    }


    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=7e21b72b8f689d3251fd5259f0c5b1b7`)
            .then(data => data.json())
            .then(response => response) 
            .then(data => this.setState({movies: data.results}))
        fetch(`https://api.themoviedb.org/3/search/movie?query=documentary&api_key=7e21b72b8f689d3251fd5259f0c5b1b7`)
            .then(data => data.json())
            .then(response => response) 
            .then(data => this.setState({another: data.results}))    
    }


    render(){
        console.log(this.state)
        return(
            <div>
                <div>
                <h1>Trending Movies</h1>
                </div>

                <div className='movies'>
                    {this.state.movies.map(movie => {
                    return ( 
                        <div key={movie.id} className='Block'>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}></img>
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>
                        </div>)})
                }
                </div>
                    <div>
                    <h1>Another</h1>
                    </div>

                    <div className='movies'>
                    {this.state.another.map(movie => {
                    return ( 
                        <div key={movie.id} className='Block'>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}></img>
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>
                        </div>)})
                }
                </div>

            </div>
        )
    }
}
export default Homepage