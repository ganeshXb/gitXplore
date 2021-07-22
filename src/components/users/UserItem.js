import React from 'react';
import { Link } from 'react-router-dom';

export const UserItem =(props) =>{
    const {login, avatar_url, html_url} = props.user;

    return(
        <div className="card text-center">
            <img src={avatar_url} alt='' className='round-img' style={{width:'60px'}} />
            <h3> Login </h3>
            <Link to={`/users/${login}`} className='btn btn-dark btn-sm my-1'>More</Link>
        </div>
    )

}