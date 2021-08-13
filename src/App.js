import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import actions from './redux/actions';
import Header from './components/Header';
import Home from './components/Home';
import History from './components/TaskTracker';
import GlobalStats from './components/GlobalStats';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import LoginScreen from './components/LoginScreen';
import SignUp from './components/SignUp';
import AlbumCatalog from './components/AlbumCatalog';
import Substructures from './components/Substructures';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.albumSelection = this.albumSelection.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this); //Code split this with login later
        this.handleTitle = this.handleTitle.bind(this);
        this.state = {
            user: [],               // id, username, alternateName, joinDate
            isLoggedIn: false,
            isLoaded: false,        // For fetching album data
            albums: [{
                id: 0,
                albumTitle: 'Default',
                albumArtist: 'Default',
                albumYear: 0,
            }],
            title: "Guest",
            albumSelection: 0
        };
    }

    albumSelection() {
        if (this.state.albums.length === 0) {
            return;
        }
        const random = Math.floor(Math.random() * this.state.albums.length);
        this.setState({ albumSelection: random });
        return(console.log('Album Selected: ', this.state.albums[random]));
    }

    componentDidMount() {
        this.getAlbumList();
    }

    getAlbumList() {
        fetch('/api/albums')
            .then(res => res.json())
            .then(albums => this.setState({
                albums: albums,
                isLoaded: true
            }, () => console.log('Album data fetched...', albums)))
            .then(() => {
                this.albumSelection();
            })
            .catch(err => console.log(err));
    }

    //setHeaderTitle() {
    //    if (this.state.alternateName !== '') {
    //        this.setState({ title: this.state.user.alternateName });
    //    }
    //    else {
    //        this.setState({ title: this.state.user.username });
    //    }
    //}

    handleLogin() {
        fetch('/api/loginData')
            .then(res => res.json())
            .then(user => this.setState({ user }, () => console.log('User logged in successfully!', user)))
            .then(this.setState({ isLoggedIn: true }))
            .catch(err => console.log(err));
        //this.setState({ isLoggedIn: true });
    }

    handleLogout() {
        this.setState({
            isLoggedIn: false,
            title: "Guest",
            user: {
                id: null,
                username: null,
                alternatName: null,
                joinDate: null
            }
        }, () => console.log("User logged out successfully!"));
    }

    handleTitle() {
        if (this.state.isLoggedIn) {
            if (this.state.alternateName !== null) {
                return (
                    <Header title={this.state.user.alternateName} />
                );
            }
            else {
                return (
                    <Header title={this.state.user.username} />
                );
            }
        }
        else {
            return (<Header title="Guest" />);
        }
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <div>

                <Router>
                    <div>
                        <LeftPanel />
                    </div>
                    <div className="container">
                        {this.handleTitle()}
                        <Switch>
                            <Route exact path="/">
                                {   isLoggedIn ?
                                    <Home isLoggedIn={this.state.isLoggedIn} user={this.state.user} album={this.state.albums[this.state.albumSelection]} /> :
                                    <LoginScreen isLoggedIn={isLoggedIn} handleLogin={this.handleLogin} />
                                }
                            </Route>
                            <Route exact path="/history" component={History} />
                            <Route exact path="/globalstats" component={GlobalStats} />
                            <Route exact path="/signup" component={SignUp} />
                            <Route exact path="/catalog" component={AlbumCatalog} />
                        </Switch>
                    </div>
                    <div>
                        <RightPanel isLoggedIn={isLoggedIn} handleLogin={this.handleLogin} handleLogout={this.handleLogout} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
