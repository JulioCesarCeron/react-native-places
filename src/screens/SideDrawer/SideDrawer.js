import React, { Component } from 'react';
import { View, Text, Button, Dimensions, StyleSheet } from 'react-native'

class SideDrawer extends Component {
    render() {
        return (
            <View style={[styles.container, {width: Dimensions.get('window').width * 0.65 }]} >
                <Text>Side Drawer</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        paddingLeft: 10,
        backgroundColor: 'white',
        flex: 1
    }
})

export default SideDrawer;