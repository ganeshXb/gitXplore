import React, {Component} from 'react';
import { UserItem } from './UserItem';
import Spinner from '../layouts/Spinner';
import userEvent from '@testing-library/user-event';

class Users extends Component{

    render(){
        if(this.props.loading){
            return(
                <Spinner />
            )
        }
        else{
            return(
                <div style={UserStyle}>
                    {this.props.users.map(user=>(
                        <UserItem key={userEvent.id} user={user}/>
                    ))}
                </div>
            )
        }
    }
}

const UserStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default Users
