import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import DefaultInput from '../UI/DefaultInput/DefaultInput';

const PlaceInput = props => {
    return (
        <DefaultInput
            placeholder="Place Name"            
            onChangeText={props.onChangeText}
            ref={props.refAttch}
        />
    );
};

export default PlaceInput;