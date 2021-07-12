import React from 'react';
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
    }

    render() {
        return (
            <form>
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