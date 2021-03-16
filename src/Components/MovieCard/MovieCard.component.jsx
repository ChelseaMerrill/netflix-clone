import {Link} from 'react-router-dom'

export default function MovieCard(props){
    return ( 
        <div key={props.movie.id} className='Block'> 
            <img src={`https://image.tmdb.org/t/p/w400${props.movie.backdrop_path}`}></img>
            <h5>{props.movie.title}</h5>
            {/* <p>{props.movie.overview}</p> */}
            <Link to={{pathname:`singleMovie/${props.movie.id}`, state: props.movie}}><button>View Movie</button></Link>
        </div>)
}

