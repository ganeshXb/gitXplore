import React, {Component, Fragment} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/layouts/Navbar';
import {Alert} from './components/layouts/Alert';
import User from './components/users/User';
import Users from './components/users/Users';
import UserSearch from './components/UserSearch';
import About from './components/pages/About';

class App extends Component{

  state={
    users:[],
    loading: false,
    alert: null,
    user: {},
    repos:[]
  }

  // search users
  searchUser = async(text) => {
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    this.setState({users:res.data.items});
    this.setState({loading:false});
  }

  // get user data
  getUser = async(username) => {
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/search/users/${username}`);
    this.setState({users:res.data});
    this.setState({loading:false});
  }

  // fetch user repos
  getUserRepos = async(username) => {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/search/users/${username}/repos?per_page=10&sort=created:asc`);
    this.setState({repos:res.data});
    this.setState({loading:false});
  }

  clearUser=()=>{
    this.setState({users:[]});
  }

  setAlert=(message, type)=> {
    this.setState({alert:{message:message, type:type}});
    setTimeout(()=> this.setState({alert:null}), 5000);
  }
  render(){
    return(
      <Router>
        <div className="App">
          <Navbar title='gitXplore' icon="fab fa-github"/>
          <Switch>
            <Route exact path="/" render={props=>{
              <Fragment>
                <Alert alert={this.state.alert} />
                <div className='container'>
                  <UserSearch searchUser={this.searchUser} clearUser={this.clearUser} setAlert={this.setAlert} showClear={this.state.users.length>0?true:false} />
                </div>
              </Fragment>
            }} />

            <Route exact path ="/about" component={About}/>

            <Route exact path ="/user/:login" render={props=>{
              <User {...props} getUser={this.getUser} getUserRepos={this.getUserRepos} repos={this.state.repos} user={this.state.user} />
            }}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
