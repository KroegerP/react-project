import React from 'react';
import Clock from './Clock';

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <h1>{this.props.title}'s Landing Page</h1>
                <Clock />
            </header>
        )
    }
}

//Header.defaultProps = {
//    title: 'Guest',
//}

//const headingstyle = {
//    color: 'red',
//}

export default Header