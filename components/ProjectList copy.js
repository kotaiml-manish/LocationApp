/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { Component, useState } from 'react';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { Card } from 'react-native-material-ui';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Geolocation from '@react-native-community/geolocation';
import { Input, Center, NativeBaseProvider } from "native-base";
// import { useNavigation } from '@react-navigation/native';

import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal,
    TextInput,
    Button,
    Dimensions,
    TouchableWithoutFeedback,
    Alert
} from 'react-native';

let _THIS;
class ProjectList extends Component {

    constructor(props) {
        super(props);
        _THIS = this;
        this.state = {
            modalVisible: false,
            project_list: [
                {
                    id: '1',
                    name: 'example name 1',
                    location: 'example location 1',
                    date: '2016-01-01',
                },
                {
                    id: '2',
                    name: 'example name 2',
                    location: 'example location 2',
                    date: '2016-01-01',
                },
                {
                    id: '3',
                    name: 'example name 3',
                    location: 'example subname 3',
                    date: '2016-01-01',
                },

                {
                    id: '4',
                    name: 'example name 4',
                    location: 'example location 4',
                    date: '2016-01-01',
                },
                {
                    id: '5',
                    name: 'example name 5',
                    location: 'example location 5',
                    date: '2016-01-01',
                },
                {
                    id: '6',
                    name: 'example name 6',
                    location: 'example subname 6',
                    date: '2016-01-01',
                },
                {
                    id: '7',
                    name: 'example name 7',
                    location: 'example location 7',
                    date: '2016-01-01',
                },
                {
                    id: '8',
                    name: 'example name 8',
                    location: 'example location 8',
                    date: '2016-01-01',
                },
                {
                    id: '9',
                    name: 'example name 9',
                    location: 'example subname 9',
                    date: '2016-01-01',
                },
                {
                    id: '10',
                    name: 'example name 10',
                    location: 'example subname 10',
                    date: '2016-01-01',
                },
                {
                    id: '11',
                    name: 'example name 11',
                    location: 'example subname 11',
                    date: '2016-01-01',
                },
                {
                    id: '12',
                    name: 'example name 12',
                    location: 'example subname 12',
                    date: '2016-01-01',
                },
                {
                    id: '13',
                    name: 'example name 13',
                    location: 'example subname 13',
                    date: '2016-01-01',
                },
                {
                    id: '14',
                    name: 'example name 14',
                    location: 'example subname 14',
                    date: '2016-01-01',
                },
                {
                    id: '15',
                    name: 'example name 15',
                    location: 'example subname 15',
                    date: '2016-01-01',
                },
            ],
        };
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    list = () => {
        return this.state.project_list.map((element) => {
            return (
                
                <TouchableWithoutFeedback
                key={element.id}
                    style={styles.listContainer}
                    onPress={() => _THIS.props.navigation. navigate('Gallery')}>
                    <View style={styles.actionBox}>
                        <View style={styles.flex_row}>
                            <View style={styles.v_center}>
                                <Image source={require('../assets/img/check.png')} style={styles.actionIcon} />
                            </View>
                            <View style={[styles.v_center, styles.ml_3]}>
                                <Text style={styles.prjct_name}>{element.name}</Text>
                                <Text style={styles.fw_normal}>{element.location}</Text>
                            </View>
                        </View>
                        <View style={styles.jcc}>
                            <Text style={[styles.projectDate, styles.fw_bold]}>{element.date}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            );
        });
    };


    render() {
        const { modalVisible } = this.state;
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={[styles.mx_3, styles.listHeadWrapper]}>
                    <Text style={styles.listHead}>All Projects</Text>
                </View>
                <ScrollView style={styles.scroll_view}>
                    <View>{this.list()}</View>
                </ScrollView>

                <TouchableOpacity style={styles.addButtonwrap} onPress={() => this.setModalVisible(true)}>
                    <MaterialCommunityIcons name="plus" size={40} />
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => this.setModalVisible(!modalVisible)}
                        >
                            <Image source={require('../assets/img/back.png')} style={styles.back_btn} />
                        </TouchableOpacity>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Add Project</Text>
                            <View style={styles.inputs}>
                                <View style={styles.form_group}>
                                    <Text style={styles.form_header}>Project Name</Text>
                                    <TextInput
                                        style={styles.input}
                                        // onChangeText={onChangeNumber}
                                        // value={}
                                        placeholder="useless placeholder"
                                        keyboardType="numeric"
                                    />
                                </View>
                                <View style={styles.form_group}>
                                    <Text style={styles.form_header}>Location</Text>
                                    <TextInput
                                        style={styles.input}
                                        // onChangeText={onChangeNumber}
                                        // value={}
                                        placeholder="useless placeholder"
                                        keyboardType="numeric"
                                    />
                                </View>
                                <View style={styles.form_group}>
                                    <Button
                                        title="Submit"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e8e8e8e8',
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingBottom: 16,
    },
    prjct_name: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#3a86ff'
    },
    back_btn: {
        width: 20,
        height: 20,
    },
    form_header: {
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 5
    },
    form_group: {
        marginBottom: 16,
    },
    inputs: {
        marginTop: 16,
        width: '90%',
        maxWidth: 400,
    },
    input: {
        borderWidth: 1,
        borderColor: '#c4c4c4c4'
    },
    modalText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    buttonClose: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    modalView: {
        position: 'relative',
        marginTop: 40,
        alignItems: 'center',
        height: '100%',
        // paddingTop: '20%'
    },
    scroll_view: {
        width: '100%',
        paddingTop: 16,
        paddingBottom: 16,
    },
    flex_row: {
        flexDirection: 'row',
    },
    aic: {
        alignItems: 'center',
    },
    jcc: {
        justifyContent: 'center',
    },
    jcs: {
        justifyContent: 'flex-start',
        backgroundColor: 'red',
    },
    listContainer: {

    },
    actionBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        marginLeft: 16,
        marginRight: 16,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    v_center: {
        justifyContent: 'center',
    },
    fw_bold: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    mx_3: {
        marginRight: 16,
        marginLeft: 16,
    },
    mr_3: {
        marginRight: 16,
    },
    ml_3: {
        marginLeft: 16,
    },
    actionIcon: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
    },
    listHeadWrapper: {
        marginTop: 10,
        marginBottom: 10,
        width: '100%',
        paddingLeft: 16,
        paddingRight: 16,
    },
    listHead: {
        fontSize: 20,
        fontWeight: '800',
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
    addButton: {
        width: '100%',
        height: '100%',
    },
});

export default ProjectList;