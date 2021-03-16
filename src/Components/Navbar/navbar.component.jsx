import React, {Component} from 'react';
import Search from '../Search/Search.component.jsx';
import {Link} from 'react-router-dom'
import Logo from './final.png';
import './navbar.styles.css';


class Navbar extends React.Component{
    render() {
        return (
            <div>
                <div className='logo'>
                    <img src={Logo} width='300px' height='300px'/>
                </div>
                <div id="nav">
                <Link to='/'><p>Home</p></Link>
                <p>My List</p>
                <p>Movies</p>
                <p>TV Shows</p>
                <p>Documentaries</p>
                <Search/>
                </div>
            </div>
        );
    }
  }

  export default Navbar