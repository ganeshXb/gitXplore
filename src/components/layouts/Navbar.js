import React , {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Navbar extends Component {

    static defaultProps ={
        title: 'gitXplore',
        icon: 'fab fa-github'
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

    render() {
        return(
            <nav className="navbar bg-priamry">
                <h1>
                    <i className={this.props.icon}></i>
                    {this.props.title} 
                </h1>

                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Navbar