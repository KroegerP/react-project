import React from 'react';
import Clock from './Clock';

const Header = ({title}) => {
        return (
            <header className='header'>
                <h1>{title}'s Landing Page</h1>
                <Clock />
            </header>
        )
}

//Header.defaultProps = {
//    title: 'Guest',
//}

//const headingstyle = {
//    color: 'red',
//}

export default Header