import React, {Component} from 'react';
import MovieCard from '../MovieCard/MovieCard.component.jsx';
import ReactPlayer from 'react-player'
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

                <div className='top'>
                    <div>
                         <ReactPlayer
                            url="https://www.youtube.com/watch?v=5UnjrG_N8hU"
                            />
                    </div>
                    <div className='infoSection'>
                        <div className='blockOne'>
                            <h3 className='info title'>Star Wars: Episode III - Revenge of the Sith</h3>
                            <p className='info genre'>Science-Fiction, Adventure, Action | 2hr 20min</p>
                            <p className='info genre'>Released: May 19th 2005 </p>
                        </div>
                        <div>
                            <p className='info'>The evil Darth Sidious enacts his final plan for unlimited power -- and the heroic Jedi Anakin Skywalker must choose a side.</p>
                        </div>
                         <h1 className='info'>The #1 Movie of 2005!!!</h1>
                    </div>
                </div>

                <div className='title'>
                    <img src="https://img.icons8.com/color/96/000000/documentary.png"/>
                    <h1>Trending</h1>
                </div>
                <div className='movies'>
                    {this.state.movies.map(movie =>  <MovieCard key={movie.id} movie={movie}/>)}
                </div>
                    
                <div className='title'>
                    <img src="https://img.icons8.com/color/96/000000/novel--v1.png"/>
                    <h1>Romance</h1>
                </div>
                <div className='movies'>
                    {this.state.another.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
                </div>

                <div className='title'>
                <img src="https://img.icons8.com/color/96/000000/comedy2.png"/>
                    <h1>Comedy</h1>
                </div>
                <div className='movies'>
                    {this.state.comedy.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
               
                </div>

            </div>
        )
    }
}
export default Homepage