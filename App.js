// <script src="http://localhost:8097"></script>

import * as React from 'react';
import Camera from './components/Camera';
import Splash from './components/Splash';
import ProjectList from './components/ProjectList';
import Gallery from './components/Gallery';
import Location from './components/Location';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const ProjectListStack = createNativeStackNavigator();
const GalleryStack = createNativeStackNavigator();
const LocationStack = createNativeStackNavigator();
const AddProjectStack = createNativeStackNavigator();

const GalleryStackScreen = ({ navigation }) => (

  <GalleryStack.Navigator
    screenOptions={{ headerShown: false }}>
    <GalleryStack.Screen name="Gallery" component={Gallery} />

  </GalleryStack.Navigator>
)

const ProjectListStackScreen = ({ navigation }) => (

  <ProjectListStack.Navigator
    screenOptions={{ headerShown: false }}>
    <ProjectListStack.Screen name="Project List" component={ProjectList} />
  </ProjectListStack.Navigator>
)


function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={ProjectListStackScreen} />
        <Drawer.Screen name="Other Projects" component={GalleryStackScreen} />
        <Drawer.Screen name="About Us" component={AboutUs} />
        <Drawer.Screen name="Contact Us" component={ContactUs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  DrawerNavigator:{
    marginTop: 50
  }
})
export default App;
