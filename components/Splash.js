import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
} from "react-native";


class Splash extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        {/* <ImageBackground style={styles.splashBg}> */}
          <Image source={require('../assets/img/location.png')} style={styles.splashImg} />
          <Text style={styles.welcomeText}>Welcome to Photo Location</Text>
        {/* </ImageBackground> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#274c77',
    resizeMode: 'stretch'
  },
  splashImg: {
    width: 100,
    height: 150,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 20,
  }
});

export default Splash;