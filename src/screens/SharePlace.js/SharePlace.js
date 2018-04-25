import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { addPlace } from '../../store/actions/index';

class SharePlaceScreen extends Component {
    constructor(props, context) {
        super(props, context);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
    }
    
    onNavigatorEvent = event => {
        console.log('event', event)
        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'sideDrawerToggle') {
                this.props.navigator.toggleDrawer({
                    side: 'left'
                })
            }
        }
    }

    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName)
    }

    render() {
        return (
            <View>
                <PlaceInput onPlaceAdded={this.placeAddedHandler} ></PlaceInput>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
