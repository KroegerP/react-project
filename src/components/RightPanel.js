import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

class RightPanel extends React.Component {
    constructor(props) {
        super(props);
/*        this.handleLogoutClick = this.handleLogoutClick.bind(this);*/
        this.state = {
            isLoggedIn: false
        };
    }

    componentDidMount() {
        this.setState({ isLoggedIn: this.props.isLoggedIn });
    }

    //handleLogoutClick() {
    //    this.setState({ isLoggedIn: false });
    //}

    render() {
        let button;
        if (this.props.isLoggedIn === false) {
            button = <li className="panelNav"><Link to="/"><Button text='Login' onClick={this.props.handleLogin} /></Link></li>
        } else {
            button = <li className="panelNav"><Link to="/"><Button text='Logout' onClick={this.props.handleLogout} /></Link></li>
        }
        return (
            <div className="RightPanel">
                <ul>
                    <li className="panelNav"><Link to="/addalbum"><Button color='blue' text='Add Album'></Button></Link></li>
                    {button}
                </ul>
            </div>
        );
    }
}

export default RightPanel;