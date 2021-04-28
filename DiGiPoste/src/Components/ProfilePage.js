import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Profile from "./Profile";
import Menu from '../Svg/Menu'
import LogoutProfile from "./LogoutProfile";
import { Help, Home, LogoP, Notification, Profil, Setting, Transaction } from '../Svg/TimeTokenIcons'
import PhotoProfil from './PhotoProfil';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';



function menu({ navigation }) {

    return (


        <View style={styles.container}>

            <View style={{
                justifyContent: "space-between",
                //flexDirection: "row",
                marginLeft: 10,
                marginRight: 10,
                marginTop: "2%",
                //backgroundColor: "#00ACEE"

            }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menu} >
                    <Menu>
                    </Menu>
                </TouchableOpacity>

                {/* <View style={styles.logo}>
                    <LogoP style={styles.logo}>
                    </LogoP>

                </View> */}



            </View>

            <View style={{ alignItems: "center" }}>

                <PhotoProfil></PhotoProfil>


                <View style={styles.information}>


                    <Profile navigation={navigation}></Profile>


                </View>

                <View style={{
                    marginRight: "9%", width: "100%", height: "100%"
                }}>

                    <LogoutProfile navigation={navigation}> </LogoutProfile>

                </View>


            </View>


        </View>


    );
}



function CustomDrawerContent(props) {
    return (
        <View {...props} style={{ flex: 1, backgroundColor: '#FAF5F0' }}>



            {/* <TouchableOpacity onPress={() => props.navigation.closeDrawer()} style={{ marginTop: '11%', marginLeft: "50%" }}  >
                <Text>Close</Text>
            </TouchableOpacity> */}
            <View style={{ marginTop: '11%', alignItems: "center" }}>
                <PhotoProfil></PhotoProfil>
            </View>
            <TouchableOpacity
                //onPress={() => props.navigation.closeDrawer()} 
                style={{ alignItems: "center", marginTop: '11%', marginLeft: "20%", flexDirection: "row" }}
            >
                <View style={{ marginTop: '0%', marginLeft: "0%" }}>
                    <Profil></Profil>
                </View>

                <View style={{ marginTop: '0%', marginLeft: "10%" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: '#27277A', textAlign: "center" }}>Profil</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                //onPress={() => props.navigation.closeDrawer()} 
                style={{ alignItems: "center", marginTop: '5%', marginLeft: "20%", flexDirection: "row" }}
            >
                <View style={{ marginTop: '0%', marginLeft: "0%" }}>
                    <Notification></Notification>
                </View>

                <View style={{ marginTop: '0%', marginLeft: "10%" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: '#27277A', textAlign: "center" }}>Notification</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                //onPress={() => props.navigation.closeDrawer()} 
                style={{ alignItems: "center", marginTop: '5%', marginLeft: "20%", flexDirection: "row" }}
            >
                <View style={{ marginTop: '0%', marginLeft: "0%" }}>
                    <Transaction></Transaction>
                </View>

                <View style={{ marginTop: '0%', marginLeft: "10%" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: '#27277A', textAlign: "center" }}>Transaction</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                //onPress={() => props.navigation.closeDrawer()} 
                style={{ alignItems: "center", marginTop: '5%', marginLeft: "20%", flexDirection: "row" }}
            >
                <View style={{ marginTop: '0%', marginLeft: "0%" }}>
                    <Setting></Setting>
                </View>

                <View style={{ marginTop: '0%', marginLeft: "10%" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: '#27277A', textAlign: "center" }}>Setting</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                //onPress={() => props.navigation.closeDrawer()} 
                style={{ alignItems: "center", marginTop: '5%', marginLeft: "20%", flexDirection: "row" }}
            >
                <View style={{ marginTop: '0%', marginLeft: "0%" }}>
                    <Help></Help>
                </View>

                <View style={{ marginTop: '0%', marginLeft: "10%" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: '#27277A', textAlign: "center" }}>Help</Text>
                </View>
            </TouchableOpacity>
            <View style={{ alignItems: "center" }}>
                <Image
                    source={require('../Svg/poste.gif')}
                    //source={{ uri: `data:image/jpeg;base64,${photoUser}` }}
                    resizeMode="cover"
                    style={{ marginTop: "30%", marginLeft: "0%" }}
                ></Image>
            </View >
        </View >
    );
}



export default class ProfilePage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        const { navigation } = this.props;
        var self = this;
    }

    render() {
        const Drawer = createDrawerNavigator();
        return (
            <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} >
                <Drawer.Screen name="Menu" component={menu} />

            </Drawer.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#27277A",
        // alignItems: "center",

    },
    image: {
        width: 150,
        height: 150,
        backgroundColor: "#fff",
        borderRadius: 500,
        //justifyContent:"center"
    },
    information: {


    },

    menu: {
        marginTop: "5%"
    },
    logo: {
        marginLeft: '5%',
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    profile: {
        alignItems: "center",
        //height:"40%",
        borderBottomColor: "#eee",
        //borderBottomWidth: 1,
        //paddingBottom: "1%",
        flexDirection: "row"
    },
    textdata: {
        color: "white",
        fontSize: 14,
        //marginRight: "66%",
        padding: 10
    }



});





