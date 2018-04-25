import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const DefaultInput = props => {
    return (
        <TextInput
            underlineColorAndroid="transparent"
            {...props}
            style={[styles.input, props.style]}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#eee',
        padding: 5,
        marginTop: 4,
        marginBottom: 4,
    },
});

export default DefaultInput;
