import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class WorldMap extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>World Map!</Text>
            </View>
        )
    }
}