import * as React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, useWindowDimensions, Image, ImageBackground, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import Menu from '../Svg/Menu'
import { Help, Home, LogoP, Notification, Profil, Setting, Transaction } from '../Svg/TimeTokenIcons'
import PhotoProfil from './PhotoProfil';
//const { height, width } = Dimensions.get('screen');
function Loading({ navigation }) {

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menu} >

                    <View style={{ flexDirection: 'row', marginTop: "5%" }}>
                        <Menu>
                        </Menu>

                    </View>

                </TouchableOpacity>
            </View>


            <View style={styles.body}>

                <Text>hey</Text>

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

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;
    return (
        <Drawer.Navigator
            drawerType={isLargeScreen ? 'permanent' : 'back'}
            drawerStyle={isLargeScreen ? null : { width: '90%' }}
            overlayColor="transparent"
            drawerContent={props => <CustomDrawerContent {...props} />}  >
            <Drawer.Screen name=" " component={Loading} />

        </Drawer.Navigator>
    );
}






const styles = StyleSheet.create({
    menu: {
        //backgroundColor: "red",
        marginTop: "5%",
        marginLeft: "3%"
    },
    container: {
        flex: 1,
        backgroundColor: "#27277A",
    },
    header: {
        //backgroundColor: "red",
        flex: 2
    },
    body: {
        // marginTop: '5%',
        flex: 3,
        // backgroundColor: "red"

    },


});
