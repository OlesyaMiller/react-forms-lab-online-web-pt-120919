import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }

  render() {
    return (
      <form onSubmit={(this.state.username === "" && this.state.password === "") || this.state.username === "" || this.state.password === "" ? null : this.props.handleLogin}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleChange(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.handleChange(event)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    )
  }
}

export default LoginForm;
