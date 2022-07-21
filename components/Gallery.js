/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export default class Gallery extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.galleryBlock}>
                        <View style={styles.galleryDate}>
                            <Text style={styles.dateblock}>03-09-2021</Text>
                        </View>
                        <View>
                             <View style={styles.thumbWrap}><Image resizeMode="contain" source={require('../assets/img/img1.jpg')} style={styles.thumb_nail} /></View>
                        </View>
                    </View>
                    <View style={styles.galleryBlock}>
                        <View style={styles.galleryDate}>
                            <Text style={styles.dateblock}>04-09-2021</Text>
                        </View>
                        <View style={styles.galleryRow}>
                            <View style={styles.thumbWrap}>
                                <Image source={require('../assets/img/img1.jpg')} style={styles.thumb_nail} />
                            </View>
                            <View style={styles.thumbWrap}>
                                <Image source={require('../assets/img/img2.jpg')} style={styles.thumb_nail} />
                            </View>
                            <View style={styles.thumbWrap}>
                                <Image source={require('../assets/img/img3.jpg')} style={styles.thumb_nail} />
                            </View>
                            <View style={styles.thumbWrap}>
                                <Image source={require('../assets/img/img4.jpg')} style={styles.thumb_nail} />
                            </View>
                            <View style={styles.thumbWrap}>
                                <Image source={require('../assets/img/img5.jpg')} style={styles.thumb_nail} />
                            </View>
                            <View style={styles.thumbWrap}>
                                <Image source={require('../assets/img/img6.jpg')} style={styles.thumb_nail} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={styles.addButtonwrap}>
                    <MaterialCommunityIcons name="camera" size={40}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginTop: 50,
        paddingLeft: 16,
        paddingRight: 16,
    },
    dateblock: {
        fontWeight: '800',
        fontSize: 20,
        opacity: 0.5
    },
    galleryBlock: {
        marginBottom: 16,
    },
      galleryRow: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    thumb_nail: {
        maxWidth: '100%',
        height: 100,
    },
    thumbWrap: {
        width: '33%',
        padding: 5,
    },
    addButtonwrap: {
        position: 'absolute',
        bottom: 50,
        right: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: '#e7e7e7e7',
        borderRadius: 50,
        padding: 10
   },

});