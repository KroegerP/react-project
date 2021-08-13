import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

class LeftPanel extends React.Component {
    constructor(props) {
        super(props);
        this.handleHistoryClick = this.handleHistoryClick.bind(this);
        this.handleHomeClick = this.handleHomeClick.bind(this);
        this.state = { isHistoryPage: false };
    }

    handleHistoryClick() {
        this.setState({ isHistoryPage: true });
    }

    handleHomeClick() {
        this.setState({ isHistoryPage: false });
    }

    handleSubstructureClick() {
        this.setState({})
    }

    render() {
        let button;
        if (this.state.isHistoryPage === true) {
            button = <li className="panelNav"><Link to="/"><Button text='Home' onClick={this.handleHomeClick} /></Link></li>
        } else {
            button = <li className="panelNav"><Link to="/history"><Button text='Task Manage' onClick={this.handleHistoryClick} /></Link></li>
        }
        return (
            <div className="LeftPanel">
                <ul>
                    {button}
                    <li className="panelNav"><Link to="/globalstats"><Button text='Global Stats' onClick={this.handleHistoryClick} /></Link></li>
                </ul>
            </div>
        );
    }
}

export default LeftPanel;