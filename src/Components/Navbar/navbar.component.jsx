import React, {Component} from 'react';
import Search from '../Search/Search.component.jsx';
import {Link} from 'react-router-dom'
import Logo from './final.png';
import './navbar.styles.css';


class Navbar extends React.Component{
    render() {
        return (
            <div>
                <div className='jumbotron'>
                    <img src={Logo} width='350px' height='300px'/>
                </div>
                <div className="nav">
                <Link to='/'><h4>Home</h4></Link>
                <h4>My List</h4>
                <h4>Movies</h4>
                <h4>TV Shows</h4>
                <h4>Documentaries</h4>
                <Search/>
                </div>
            </div>
        );
    }
  }

  export default Navbar