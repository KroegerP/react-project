import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { Link } from 'react-router-dom';
import actions from '../redux/actions';

function LoginScreen(props) {
    const[loginData, updateLoginData] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = () => {                 // Callback to submit to API
        fetch('./api/handleLogin', {
            method: 'POST',
            body: JSON.stringify(loginData),
        })
        .then(loginData => {
            console.log('User logging in: ', loginData);
            //props.loginUser();
        })
        .catch((error) => {
            console.error(error)
        })
    };

    const handleChange = (e) => {
        updateLoginData({
            ...loginData,
            [e.target.name]: e.target.value.trim() //Trim any additional whitespace
        })
    }

    return (
        <div className="loginScreen">
            <div className='loginContainer'>
                <form className='add-form' onSubmit={handleSubmit}>
                    <h2>Log In</h2>
                        <div className='form-control'>
                            <label>Username</label>
                            <input
                                type='text'
                                name='username'
                                placeholder='Username'
                                value={loginData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-control'>
                            <label>Password</label>
                            <input
                                type='password'
                                name='password'
                                placeholder='Password'
                                value={loginData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <li className="panelNav"><Button onClick={props.handleLogin} text='Login' /></li>       
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

// const mapStateToProps = (state) => {
//     return{
//         id: state.user.id,
//         username: state.user.username,
//         alternateName: state.user.alternateName,
//         dateJoined: state.user.dateJoined,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         loginUser: () => dispatch(actions.loginUser())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
export default LoginScreen;