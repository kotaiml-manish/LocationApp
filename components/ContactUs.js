import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default class ContactUs extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Contact Us Page</Text>
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