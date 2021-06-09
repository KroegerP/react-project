import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

class RightPanel extends React.Component {
    constructor(props) {
        super(props);
        this.onCatalog = this.onCatalog.bind(this);
        this.state = {
            onCatalog: false
        };
    }

    onCatalog() {
        this.setState({ onCatalog: !this.state.onCatalog});
    }

    render() {
        let button;
        if (!this.props.isLoggedIn) {
            button = <Link to="/"><Button text='Login' onClick={this.props.handleLogin} /></Link>
        } else {
            button = <Link to="/"><Button text='Logout' onClick={this.props.handleLogout} /></Link>
        }
        let albumButton;
        if (this.state.onCatalog) {
            albumButton = <Link to="/"><Button text='Home' onClick={this.onCatalog} /></Link>
        } else {
            albumButton = <Link to="/catalog"><Button text='Catalog' onClick={this.onCatalog} /></Link>
        }
        return (
            <div className="RightPanel">
                <ul>
                    <li className="panelNav">{albumButton}</li>
                    <li className="panelNav">{button}</li>
                </ul>
            </div>
        );
    }
}

export default RightPanel;