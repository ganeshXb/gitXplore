import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserSearch extends Component {
    
    state={
        text: ''
    }

    static propTypes={
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired
    }

    onSubmit=(e)=> {
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('Please Enter keywords to Search', 'light');
        }
        else{
            this.props.searchUsers(this.state.text);
            this.setState({text:''});
        }
    }

    onChange=(e)=>{
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
                <form className='form' onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="search users..." value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="Search" className='btn btn-dark btn-block' />
                </form>
                {
                    this.props.showClear &&
                    <button className='btn btn-light btn-block' onClick={this.props.clearUsers}>Clear</button>
                }
            </div>
        )
    }
}

export default UserSearch
