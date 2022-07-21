import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default class AboutUs extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>About Us Page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
}
})