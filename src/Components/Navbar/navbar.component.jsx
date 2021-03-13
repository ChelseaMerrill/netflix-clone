import React, {Component} from 'react';
import Search from '../Search/Search.component.jsx';
import './navbar.styles.css';

class Navbar extends React.Component{
    render() {
        return (
            <div>
                <div>
                    <h1>Movie Project</h1>
                </div>
                <div>
                <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">My List</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">TV Shows</a></li>
                <li><a href="#">Documentaries</a></li>
                <Search/>
                </ul>
                </div>
            </div>
        );
    }
  }

  export default Navbar