import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import Lightbox from 'react-native-lightbox';
import Carousel from 'react-native-looped-carousel';

const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_PADDING = 10;
console.disableYellowBox = true;
const renderCarousel = () => (
    <Carousel style={{ width: WINDOW_WIDTH, height: WINDOW_WIDTH }}>
        <Image
            style={{ flex: 1 }}
            resizeMode="contain"
            source={{ uri: 'http://cdn.lolwot.com/wp-content/uploads/2015/07/20-pictures-of-animals-in-hats-to-brighten-up-your-day-1.jpg' }}
        />
        <View style={{ backgroundColor: '#6C7A89', flex: 1 }} />
        <View style={{ backgroundColor: '#019875', flex: 1 }} />
        <View style={{ backgroundColor: '#E67E22', flex: 1 }} />
    </Carousel>
)

export default () => (
    <ScrollView style={styles.container}>
        <View style={styles.galleryRow}>
            <Lightbox underlayColor="white" style={styles.ltbx}>
                <Image
                    style={styles.contain}
                    resizeMode="contain"
                    source={require('../assets/img/img1.jpg')}
                />
            </Lightbox>
        </View>
        <View style={styles.row}>
            <Lightbox style={styles.col}>
                <View style={[styles.square, styles.squareFirst]}>
                    <Image
                        style={styles.contain}
                        resizeMode="contain"
                        source={require('../assets/img/img1.jpg')}
                    />
                </View>
            </Lightbox>
        </View>

    </ScrollView>
)

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: BASE_PADDING,
    },
    closeButton: {
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        padding: 8,
        borderRadius: 3,
        textAlign: 'center',
        margin: 10,
        alignSelf: 'flex-end',
    },

    col: {
        flex: 1,
    },

    // carousel: {
    //     height: WINDOW_WIDTH - BASE_PADDING * 2,
    //     width: WINDOW_WIDTH - BASE_PADDING * 2,
    //     backgroundColor: 'white',
    // },
    contain: {
        flex: 1,
        height: 150,
    },
    galleryRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    ltbx: {
        // width: 100,
        // height: 200
    },
    row: {
        flexDirection: 'row',
        marginLeft: -BASE_PADDING,
        marginRight: -BASE_PADDING,
    },
    square: {
        width: WINDOW_WIDTH / 3,
        height: WINDOW_WIDTH / 3,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    // squareFirst: {
    //     backgroundColor: '#C0392B',
    // },
    squareSecond: {
        backgroundColor: '#019875',
    },
    squareText: {
        textAlign: 'center',
        color: 'white',
    },
});
