import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import { Repository } from '../repos/Repositories';

class User extends Component{

    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }

    render(){
        const { name, website, login, company, location, avatar_url, html_url, bio, blog, following, followers, public_repos, public_gists, hireable } = this.props.users;
        return(
            <Fragment>
                <Link to="/" className='btn btn-light'> Back to Search </Link>

                Hireable:{' '}
                {hireable ? <i className='fas fa-check text-success'/> : <i className='fas fa-times-circle text-danger'/>}

                <div className='card-grid-2'>
                    <div className='all-center'>
                        <img src = {avatar_url} className='round-img' alt='' style ={{width:'150px'}} />
                        <h1> {name} </h1>
                        <p> <i className='fas fa-map-marker-alt'></i> {location}</p>
                    </div>
                    <div >
                        {bio && 
                        <Fragment>
                            <h3> Bio </h3>
                            <p> {bio}</p>
                        </Fragment>}

                        <a href={html_url} target='_blank' className='btn btn-dark' rel="noreferrer"> github profile</a>

                        <ul>
                            <li>
                                {login &&
                                <Fragment>
                                    <b> Username </b> : {login}   
                                </Fragment>}
                            </li>
                            <li>
                                {company &&
                                <Fragment>
                                    <b> Company </b> : {company}   
                                </Fragment>}
                            </li>
                            <li>
                                {website &&
                                <Fragment>
                                    <b> Website </b> : {website}   
                                </Fragment>}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='card text-center'>
                    <div className='badge badge-primary'> Followers : {followers}</div>
                    <div className='badge badge-success'> Following : {following}</div>
                    <div className='badge badge-danger'> Public Repos : {public_repos}</div>
                    <div className='badge badge-primary'> Public Gists : {public_gists}</div>
                </div>
                <Repository repositories={this.props.repositories} />
            </Fragment>
        )
    }
}

export default User