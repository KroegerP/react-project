//Component for the album catalogging, will hold the album list and the form to add a new album
import {useState} from 'react';

export default function AlbumCatalog() {
    const [newAlbum, setAlbum] = useState({
        id: 0,
        albumTitle: '',
        albumArtist: '',
        albumYear: 0,
    });

    function addAlbum() {       // Post new album data

    }

    const handleChange = (e) => {
        setAlbum({
            ...newAlbum,
            [e.target.name]: e.target.value.trim() //Trim any additional whitespace
        })
    }

    return (
        <div>
            <form className="add-form" onSubmit={addAlbum}>
                <div className="form-control">
                    <label>Add a New Album</label>
                    <input
                        type='text'
                        name='albumTitle'
                        placeholder='Title'
                        value={newAlbum.albumTitle}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-control">
                    <label>Artist</label>
                    <input
                        type='text'
                        name='albumArtist'
                        placeholder='Artist'
                        value={newAlbum.albumArtist}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
    )
}
