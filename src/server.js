const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(express.json());

app.post('./api/registerUser', (req,res) => {
    console.log('Registering user...', req.body);
    const date = new Date().toLocaleDateString;
    const newUser = {
        id: req.body.user.id,
        username: req.body.user.username,
        password: req.body.user.password,
        alternateName: req.body.user.alternateName,
        joinDate: date,
    }
    res.json(newUser);
});

app.get('/api/albums', (req, res) => {
    const albums = [
        {
            id: 0001,
            albumTitle: 'The Score',
            albumArtist: 'The Fugees',
            albumYear: 1994,
        },
        {
            id: 0002,
            albumTitle: 'The Blueprint',
            albumArtist: 'Jay-Z',
            albumYear: 2001,
        },
        {
            id: 0003,
            albumTitle: 'Please Please Me',
            albumArtist: 'The Beatles',
            albumYear: 1964,
        }];
    res.json(albums);
});

app.get('/', (req, res) => {
    res.json({ message: 'Hello from the Server!' });
});

app.get('/api/loginData', (req, res) => {
    const user = {
        id: 001,
        username: 'swiftarrow4',
        alternateName: 'Peter Kroeger',
        joinDate: '05/31/2021'
    };
    res.json(user);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));