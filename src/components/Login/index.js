import './index.css'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component {
  state = {username: 'rahul', password: 'rahul@2021', errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({errorMsg})
  }

  onClickSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  render() {
    const {errorMsg} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <div className="main-container">
          <div className="image-container">
            <img
              className="login-page-image"
              alt="website login"
              src="https://res.cloudinary.com/dy1lfg1dp/image/upload/v1678352084/Rectangle_1467_uw3tcc.png"
            />
          </div>
          <div className="form-container">
            <form className="form" onSubmit={this.onClickSubmitForm}>
              <img
                className="logo-login"
                alt="login website logo"
                src="https://res.cloudinary.com/dy1lfg1dp/image/upload/v1678353759/Group_7731_s6q7kr.png"
              />
              <div className="input-container">
                <label htmlFor="username">Username*</label>
                <input
                  id="username"
                  type="text"
                  className="userInput"
                  placeholder="Enter your name"
                  onChange={this.onChangeUsername}
                  value={username}
                />
              </div>
              <div className="input-container">
                <label htmlFor="password">Password*</label>
                <input
                  id="password"
                  type="password"
                  className="userInput"
                  placeholder="Enter your password"
                  onChange={this.onChangePassword}
                  value={password}
                />
                <p className="loginError">{errorMsg}</p>
              </div>

              <button type="submit" className="loginBtn">
                Auto Login
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
