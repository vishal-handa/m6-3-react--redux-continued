const initialState = {
    currentArtist: null,
    status: "loading",
    error: null,
};

export default function artistReducer(state = initialState, action){
    switch (action.type) {
        case 'REQUEST_CURRENT_ARTIST' :{
            return {
                ...state,
                status: 'loading',
            }
        }
        case 'RECEIVE_CURRENT_ARTIST' :{
            return {
                ...state,
                status:'idle',
                currentArtist:{
                    profile: action.profile,
                },
            }
        }
        case 'RECEIVE_CURRENT_ARTIST_ERROR': {
            return {
                ...state,
                error:action.error,
            }
        }
        case 'RECEIVE_RELATED_ARTISTS':{
            return {
                ...state,
                currentArtist:{
                    profile:{
                        ...state.currentArtist.profile,
                    },
                relatedArtists: action.artists,
                }
            }
        }
        default: {
            return state;
        }
    }
}