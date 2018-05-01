import { TRY_AUTH} from './actionTypes';
import { uiStartLoading, uiStopLoading } from '.';
import startMainTabs from '../../screens/MainTabs/startMainTabs';

export const tryAuth = (authData, authMode) => {
    return dispatch => {
        const apiKey = 'AIzaSyDU3wNx6Ky0ZxSiNBbd6kbx9ZGHvfmxPsY'
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + apiKey

        if (authMode === 'signup') {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + apiKey
        }
        
        dispatch(uiStartLoading())
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: authData.email,
                password: authData.password, 
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(err => {
            console.log('err', err);
            dispatch(uiStopLoading())
            alert('Authentication failed, please try again!')
        }).then(res => res.json())
        .then(parseRes => {
            dispatch(uiStopLoading())
            if (parseRes.error) {
                alert('Authentication failed, please try again!')
            } else {
                startMainTabs()
            }
        })
    };
};