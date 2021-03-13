import React, {Component} from 'react'
import './SingleMovie.styles.css'
class SingleMovie extends Component {

    render(){
        const {title, popularity} = this.props.location.state
        console.log(this.props.location.state)
        return(
            <div>
                <h1>Single Movie</h1>
                <h3>{title}</h3> 
                <p>Popularity: {popularity}</p>
            </div>
        )
    }
}

export default SingleMovie