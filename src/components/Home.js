import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albumTitle: '',
            albumArtist: '',
            albumYear: '',
            albumCover: '',
            isLoggedIn: false
        }
    }

    componentDidMount() {
        if (this.props.album === null || this.props.user === null) {
            return;
        }
        this.setState({
            albumTitle: this.props.album.albumTitle,
            albumArtist: this.props.album.albumArtist,
            albumYear: this.props.album.albumYear,
            loggedIn: this.props.isLoggedIn
        });
    }

    componentDidUnMount() {
        this.setState({
            albumTitle: '',
            albumArtist: '',
            albumYear: '',
            albumCover: '',
            isLoggedIn: false
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isLoggedIn !== this.props.isLoggedIn) {
            this.setState({
                    albumTitle: this.props.album.albumTitle,
                    albumArtist: this.props.album.albumArtist,
                    albumYear: this.props.album.albumYear,
                    isLoggedIn: this.props.isLoggedIn
                });
        }
    }

    render() {
        if (!this.state.isLoggedIn) {
            return (
                <div>
                    <h1>Default</h1>
                    <hr></hr>
                    <h2>Default</h2>
                    <h3>Default</h3>
                </div>
                )
        }
        return (
            <div>
                <h1>{this.state.albumTitle}</h1>
                <hr></hr>
                <h2>{this.state.albumArtist}</h2>
                <h3>{this.state.albumYear}</h3>
            </div>
        )
    }
}

//Home.defaultProps = {
//    album: {
//        albumTitle: 'Default',
//        albumArtist: 'Default',
//        albumYear: 'Default'
//    }
//}

export default Home;