import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            username: '',
            password: ''
        };
    }

    componentDidMount() {
        this.setState({ isLoggedIn: this.props.isLoggedIn });
    }

    onSubmit() {
    }

    render() {
        if (this.state.isLoggedIn) {
            return (<div></div>);
        }
        return (
            <div className="loginScreen">
                <div className='loginContainer'>
                    <form className='add-form' onSubmit={this.onSubmit()}>
                        <h2>Log In</h2>
                            <div className='form-control'>
                                <label>Username</label>
                                <input
                                    type='text'
                                    placeholder='Username'
                                    value={this.state.username}
                                    onChange={(e) => this.setState({ username: e.target.value })}
                                />
                            </div>
                            <div className='form-control'>
                                <label>Password</label>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    value={this.state.password}
                                    onChange={(e) => this.setState({ password: e.target.value })}
                                />
                            </div>
                            <li className="panelNav"><Link to="/"><Button type='submit' text='Login' onClick={this.props.handleLogin} /></Link></li>       
                    </form>
                </div>
                <div className='signUpContainer'>
                    <h2>Don't have an Account?</h2>
                    <br /><br /><br />
                    <li className="panelNav"><Link to="/signup"><Button text='Sign Up' /></Link></li>
                </div>
            </div>
        );
    }
}

export default LoginScreen;