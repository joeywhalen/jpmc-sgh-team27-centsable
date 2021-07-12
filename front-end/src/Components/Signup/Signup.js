import React, { Component } from 'react'
import AuthApiService from '../../Services/APIService'
export default class Signup extends Component {
  constructor(){
    super()
    this.state = {
      fullname: "",
      username: "",
      password:"",
      error: null
    }
  }

  onChange = (event) => {
    event.preventDefault();
    this.setState({
      
      [event.target.name] : event.target.value
    })
    console.log(this.state)
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {fullname, username, password} = event.target;
    
    if(fullname.length === 0 || username.length === 0) {
      this.setState({
        error: 'Name or username must be filled'
      })
      return;
    }

    if(password.length > 40 || username.length > 40 || fullname.length > 40 ){
      this.setState({
        error: 'Password, Username and Fullname must be less than 40 characters long'
      })
      return;
    }
    

    if(password.length < 8){
      this.setState({
        error: 'Passwords must be atleast 8 characters long'
      })
      return;
    }
    
    AuthApiService.createUser({
      fullname: fullname.value,
      username: username.value,
      password: password.value
    })
    .then(user => {
      fullname.value = '';
      username.value = '';
      password.value = '';
    })
    .catch(res => {
      this.setState({
        error: res.error
      })
    })
  }



  render() {
    return (
      <div className="inner-container">
        <div className="header">
          <h2 className="home-titles"> Register </h2>
        </div>

        <div className="box">
          <form className="register-form" onSubmit={this.handleSubmit}>

            <label className="label"> Full Name: </label>
            <input value={this.state.fullname} type="text" name="fullname" className="landing-form-text" placeholder="Full Name" onChange={this.onChange}/>


            <label className="label"> Username: </label>
            <input value={this.state.username} type="text" name="username"placeholder="youremail@email.com" className="landing-form-text" onChange={this.onChange}/>

            <label className="label"> Password: </label>
            <input value={this.state.password} type="password" name="password" className="landing-form-text" onChange={this.onChange}/>

            <button className="btn" type="submit"> Submit </button>
          </form>
        </div>
      </div>
    )
  }
}
