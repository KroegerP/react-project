import { combineReducers } from 'redux';

const initialState = {
    user: [],               // id, username, alternateName, joinDate
    isLoggedIn: false,
    isLoaded: false,        // For fetching album data
    albums: [{
        id: 0,
        albumTitle: 'Default',
        albumArtist: 'Default',
        albumYear: 0,
    }],
    title: 'Guest',
    albumSelection: 0
}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'user/userLogin': {
            return {
                ...state,
                user: [
                    ...state.user,
                    {
                        id: action.payload.id,
                        username: action.payload.username,
                        alternateName: action.payload.alternateName,
                        dateJoined: action.payload.dateJoined,
                    }
                ]
            }
        }
        default: 
            return state
    }
}

const rootReducer = combineReducers({});

export default rootReducer;