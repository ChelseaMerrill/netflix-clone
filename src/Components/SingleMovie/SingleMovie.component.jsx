import React, {Component} from 'react'
import './SingleMovie.styles.css'
import PlayButton from './unnamed.png'
class SingleMovie extends Component {

    render(){
        const {title, overview} = this.props.location.state
        return(
            <div>
                <h1 className='page'>Play Movie</h1>
                <h1 className='page'><img src={PlayButton} height='100mm' width='120mm'/></h1>
                <h2 className='page'>{title}</h2> 
                <h3 className='page'>Overview:</h3>
                <div className='over'>
                <p>{overview}</p>
                </div>
                
            </div>
        )
    }
}

export default SingleMovie