import {
    SET_PLACES
} from '../actions/actionTypes';

const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLACES:
        return {
            ...state,
            places: action.places
        }
        // case ADD_PLACE:
        //     return {
        //         ...state,
        //         places: state.places.concat({
        //             key: Math.random().toString(),
        //             name: action.placeName,
        //             image: {
        //                 uri: action.image.uri
        //             },
        //             location: action.location
        //         }),
        //     };
        // case DELETE_PLACE:
        //     return {
        //         ...state,
        //         places: state.places.filter(place => {
        //             return place.key !== action.placeKey;
        //         })
        //     };
        default:
            return state;
    }
};

export default reducer;
