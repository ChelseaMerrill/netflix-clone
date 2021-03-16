import React, {Component} from 'react'
import './SingleMovie.styles.css'
class SingleMovie extends Component {

    render(){
        const {title, overview} = this.props.location.state
        return(
            <div>
                <h1>Single Movie</h1>
                <h3>{title}</h3> 
                <p>Overview: {overview}</p>
            </div>
        )
    }
}

export default SingleMovie