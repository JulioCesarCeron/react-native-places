import { SET_PLACES } from './actionTypes';
import { uiStartLoading, uiStopLoading } from './index'

export const addPlace = (placeName, location, image) => {
    return dispatch => {
        dispatch(uiStartLoading())
        fetch(
            'https://us-central1-react-native-places-eee90.cloudfunctions.net/storeImage',{
                method: 'POST',
                body: JSON.stringify({
                    image: image.base64,
                }),
            }
        )
        .catch(err => {
            console.log(err)
            alert('Something went wrong, please try again!')
            dispatch(uiStopLoading())
        })
        .then(res => res.json())
        .then(parsedRes => {
            const placeData = {
                name: placeName,
                location: location,
                image: parsedRes.imageUrl
            };
            return fetch('https://react-native-places-eee90.firebaseio.com/places.json', {
                method: 'POST',
                body: JSON.stringify(placeData)
            })
        })
        .catch(err => {
            console.log(err)
            alert('Something went wrong, please try again!')
            dispatch(uiStopLoading())
        })
        .then(res => res.json())
        .then(parsedRes => {
            console.log(parsedRes)
            dispatch(uiStopLoading())
        })
    };
};

export const getPlaces = () => {
    return dispatch => {
        fetch('https://react-native-places-eee90.firebaseio.com/places.json').then(res => res.json()).then(parsedRes => {
            
            console.log(parsedRes)
        const places = []
            for (let key in parsedRes) {
                places.push({
                    ...parsedRes[key],
                    image: {
                        uri: parsedRes[key].image
                    },
                    key: key
                })
            }
            dispatch(setPlaces(places))
        })
    }
}

export const setPlaces = places => {
    return {
        type: SET_PLACES,
        places: places
    }
}

export const deletePlace = key => {
    return {
        type: DELETE_PLACE,
        placeKey: key,
    };
};
