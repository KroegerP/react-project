import React from 'react';
import Button from './Button';
import store from '../store';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            user: {
                id: 0,
                username: '',
                password: '',
                passwordConfirm: '',
                alternateName: '',
                joinDate: ''
            }
        };
    }

    componentDidMount() {
    
    }

    generateNewId() {
        const newID = Math.floor(Math.random() * 10000) + 1
        this.setState({user: {
            ...this.state.user,
            id: newID
        }});
    }

    async handleSignUp(e) {
        e.preventDefault();
        // if(this.state.password !== this.state.passwordConfirm) {
        //     this.setState({ user: {
        //         id: 0,
        //         username: '',
        //         password: '',
        //         passwordConfirm: '',
        //         alternateName: '',
        //         joinDate: ''
        //     }});
        //     return;
        // }
        this.generateNewId();
        const data = new FormData(this.state.user);
        fetch('/api/registerUser', { method: 'POST', body: data })
          .then(res => res.json())
          .then(json => (json.user))
          .then(store.dispatch({ type: 'SIGNUP' }))
    }
    render() {
        return (
            <form className='add-form' onSubmit={(e) => this.handleSignUp(e)}>
                <h2>Sign Up</h2>
                    <div className='form-control'>
                        <label>Username</label>
                        <input
                            type='text'
                            placeholder='Username'
                            value={this.state.user.username}
                            onChange={(e) => this.setState({ user: { ...this.state.user, username: e.target.value }})}
                        />
                    </div>
                    <div className='form-control'>
                        <label>Alternate Name</label>
                        <input
                            type='text'
                            placeholder='Alternate Name'
                            value={this.state.user.alternateName}
                            onChange={(e) => this.setState({ user: { ...this.state.user,alternateName: e.target.value }})}
                        />
                    </div>
                    <div className='form-control'>
                        <label>Password</label>
                        <input
                            type='password'
                            placeholder='Password'
                            value={this.state.user.password}
                            onChange={(e) => this.setState({ user: { ...this.state.user,password: e.target.value }})}
                        />
                    </div>
                    <div className='form-control'>
                        <label>Confirm Password</label>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            value={this.state.user.passwordConfirm}
                            onChange={(e) => this.setState({ user: { ...this.state.user, passwordConfirm: e.target.value }})}
                        />
                    </div>
                    <li className="panelNav"><Link to="/"><Button type='submit' text='Sign Up' /></Link></li>       
            </form>
        );
    }
}

export default SignUp;