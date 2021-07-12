import React from 'react';
import { AuthApiService } from '../../Services/APIService';
class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
        }
    }

    // loginUser = (data) => {
    //     fetch('endpoint', {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then(resp => resp.json())
    //     .then(data)
    // }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    handleOnSubmit = (event) => {
        // this.loginUser();
        event.preventDefault();

        AuthApiService.postLogin({
            username: this.state.username,
            password: this.state.password
        })
        .then(user => console.log(user))
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <label>
                    Username: <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange}/>
                </label>
                <br/>
                <label>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }

}

export default Login