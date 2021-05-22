import * as React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, useWindowDimensions, Image, ImageBackground, Dimensions, Linking } from 'react-native';
import { useEffect, useState } from 'react';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import Menu from '../Svg/Menu'
import { Help, Home, Flech0, LogoP, Notification, Profil, Setting, Transaction } from '../Svg/TimeTokenIcons'
import PhotoProfil from './PhotoProfil';
//const { height, width } = Dimensions.get('screen');

function Loading({ navigation }) {

    const [ChangedDemandes, setChangedDemandes] = useState(false);
    const [ChangedClients, setChangedClients] = useState(false);
    const [ChangedComptes, setChangedComptes] = useState(false);


    function showDemandes() {
        //alert('test')
        if (!ChangedDemandes === true) {
            setChangedDemandes(true);
            setChangedClients(false);
            setChangedComptes(false);
            // alert("if" + Changed)
        } else if (!ChangedDemandes === false) {
            //alert("elseif" + Changed)
            setChangedDemandes(false);
            //setChangedClients(true);
            //setChangedComptes(true);
        }
        //setChanged(true);
    }
    function showClients() {
        //alert('test')
        if (!ChangedClients === true) {
            setChangedClients(true);
            setChangedDemandes(false);
            setChangedComptes(false);
            // alert("if" + Changed)
        } else if (!ChangedClients === false) {
            //alert("elseif" + Changed)
            setChangedClients(false);
            //setChangedDemandes(true);
        }
        //setChanged(true);
    }
    function showComptes() {
        //alert('test')
        if (!ChangedComptes === true) {
            setChangedComptes(true);
            setChangedDemandes(false);
            setChangedClients(false);
            // alert("if" + Changed)
        } else if (!ChangedComptes === false) {
            //alert("elseif" + Changed)
            setChangedComptes(false);
            //setChangedDemandes(true);
        }
        //setChanged(true);
    }
    function disabled() {
        alert('te')
    }
    function dialCall() {
        let numeroSiege = "222222"
        let phoneNumber = '';
        if (Platform.OS === 'android') {
            phoneNumber = `tel:${numeroSiege}`;
        }
        else {
            phoneNumber = `telprompt:${numeroSiege}`;
        }
        Linking.openURL(phoneNumber);
    };
    return (
        <View style={styles.container}>

            <View style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginLeft: 10,
                marginRight: 10,
                marginTop: "2%",
                flex: 0.5,
                //backgroundColor: "#00ACEE"

            }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menu} >
                    <Menu>
                    </Menu>
                </TouchableOpacity>
                <Image
                    style={{
                        marginTop: '2%', marginRight: "17%",
                        width: 250, height: 70
                    }}
                    source={require('../Svg/title.png')} >
                </Image>

            </View>


            <View style={styles.body}>

                <TouchableOpacity onPress={showDemandes}
                    style={styles.buttonNext0}>
                    <Text style={{
                        color: "#fff", fontSize: 15, fontWeight: "bold",
                        textAlign: "auto", marginTop: "0%"
                    }}>
                        Effectuer une demande
                    </Text>
                    <Flech0></Flech0>
                </TouchableOpacity>
                {(!ChangedDemandes) === false && <TouchableOpacity
                    onPress={() => navigation.navigate('DemandeCarteCredit')} style={styles.select}>
                    <Text style={{
                        color: "#1066FF", fontSize: 15, fontWeight: "bold",
                        textAlign: "auto", marginTop: "0%"
                    }}>
                        Demander une carte de crédit
                    </Text>
                </TouchableOpacity>
                }
                {(!ChangedDemandes) === false && <TouchableOpacity
                    onPress={() => navigation.navigate('DemandeCarnetCheque')} style={styles.select}>
                    <Text style={{
                        color: "#1066FF", fontSize: 15, fontWeight: "bold",
                        textAlign: "auto", marginTop: "0%"
                    }}>
                        Demander un carnet de chèque
                    </Text>

                </TouchableOpacity>
                }

                <TouchableOpacity onPress={showComptes}
                    style={styles.buttonNext}>
                    <Text style={{
                        color: "#fff", fontSize: 15, fontWeight: "bold",
                        textAlign: "auto", marginRight: "35%"
                    }}>
                        Devises
                    </Text>
                    <Flech0></Flech0>
                </TouchableOpacity>
                {(!ChangedComptes) === false && <TouchableOpacity
                    onPress={() => navigation.navigate('CovertisseurDevises', { userClient: "client" })} style={styles.select}>
                    <Text style={{
                        color: "#1066FF", fontSize: 15, fontWeight: "bold",
                        textAlign: "auto", marginTop: "0%"
                    }}>
                        Convertisseur
                    </Text>
                </TouchableOpacity>
                }
                {(!ChangedComptes) === false && <TouchableOpacity
                    onPress={() => navigation.navigate('Graph', { userClient: "client" })} style={styles.select}>
                    <Text style={{
                        color: "#1066FF", fontSize: 15, fontWeight: "bold",
                        textAlign: "auto", marginTop: "0%"
                    }}>
                        Graph
                    </Text>
                </TouchableOpacity>
                }


                <TouchableOpacity
                    style={styles.buttonNext}>
                    <Text style={{
                        color: "#fff", fontSize: 15, fontWeight: "bold",
                        textAlign: "auto", marginRight: "10%"
                    }}>
                        Transfert d'argent
                    </Text>
                    <Flech0></Flech0>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('TransactionsClient')}
                    style={styles.buttonNext}>
                    <Text style={{
                        color: "#fff", fontSize: 15, fontWeight: "bold",
                        textAlign: "auto", marginRight: "20%"
                    }}>
                        Transactions
                    </Text>
                    <Flech0></Flech0>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonNext}>
                    <Text style={{
                        color: "#fff", fontSize: 15, fontWeight: "bold",
                        textAlign: "auto", marginRight: "10%"
                    }}>
                        Simuler un crédit
                    </Text>
                    <Flech0></Flech0>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('LocalisationAgences', { userClient: "client" })}
                    style={styles.buttonNext}>
                    <Text style={{
                        color: "#fff", fontSize: 15, fontWeight: "bold",
                        textAlign: "auto", marginRight: "15%"
                    }}>
                        Trouver Agence
                    </Text>
                    <Flech0 style={{ marginLeft: "-4%" }}></Flech0>
                </TouchableOpacity>

                <TouchableOpacity onPress={showClients}
                    style={styles.buttonNext}>
                    <Text style={{
                        color: "#fff", fontSize: 15, fontWeight: "bold",
                        textAlign: "auto", marginRight: "12%"
                    }}>
                        Contacter nous..
                    </Text>
                    <Flech0></Flech0>
                </TouchableOpacity>
                {(!ChangedClients) === false && <TouchableOpacity onPress={dialCall}
                    style={styles.select}>
                    <Text style={{
                        color: "#1066FF", fontSize: 15, fontWeight: "bold",
                        textAlign: "auto", marginTop: "0%"
                    }}>
                        Contacter l'Administrateur
                    </Text>
                </TouchableOpacity>
                }
                {(!ChangedClients) === false && <TouchableOpacity onPress={() => navigation.navigate('ContactSiege')}
                    style={styles.select}>
                    <Text style={{
                        color: "#1066FF", fontSize: 15, fontWeight: "bold",
                        textAlign: "auto", marginTop: "0%"
                    }}>
                        Contacter le siège
                    </Text>
                </TouchableOpacity>
                }
                <View style={{ alignItems: "center", marginTop: "15%" }}>
                    <Image
                        style={{
                            marginTop: '0%',
                            width: 80, height: 80
                        }}
                        source={require('../Svg/logo.png')} >
                    </Image>
                </View>

            </View>



        </View>
    );
}

function CustomDrawerContent(props) {
    return (
        <View {...props} style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View >
                <Text style={{
                    fontSize: 24, fontWeight: "bold",
                    color: '#27277A', textAlign: "center", marginTop: "10%"
                }}>Espace client</Text>
            </View>
            <View style={{ marginTop: '11%', alignItems: "center" }}>
                <PhotoProfil></PhotoProfil>
            </View>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('Profile'), () => { props.navigation.closeDrawer() }}
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
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: '#27277A', textAlign: "center" }}>Compte</Text>
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
                onPress={() => props.navigation.navigate('TransactionsClient')}
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

            <TouchableOpacity onPress={() => props.navigation.navigate('ContactSiege')}
                //onPress={() => props.navigation.closeDrawer()} 
                style={{ alignItems: "center", marginTop: '5%', marginLeft: "20%", flexDirection: "row" }}
            >
                <View style={{ marginTop: '0%', marginLeft: "0%" }}>
                    <Help></Help>
                </View>

                <View style={{ marginTop: '0%', marginLeft: "10%" }}
                >
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: '#27277A', textAlign: "center" }}>Contacter nous..</Text>
                </View>
            </TouchableOpacity>
            <View style={{ alignItems: "center" }}>
                <Image
                    source={require('../Svg/poste.gif')}
                    //source={{ uri: `data:image/jpeg;base64,${photoUser}` }}
                    resizeMode="cover"
                    style={{ marginTop: "10%", marginLeft: "0%" }}
                ></Image>
            </View >

            <TouchableOpacity
                //onPress={() => props.navigation.closeDrawer()} 
                style={{ alignItems: "center", marginTop: '5%', marginLeft: "20%", flexDirection: "row" }}
            >
                <View style={{ marginTop: '0%', marginLeft: "0%" }}>
                    <Help></Help>
                </View>

                <View style={{ marginLeft: "10%" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: '#27277A', textAlign: "center" }}>Déconnexion</Text>
                </View>
            </TouchableOpacity>

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
        flex: 0.75
    },
    body: {
        // marginTop: '15%',
        flex: 3,
        alignItems: "center",
        //justifyContent: "center"
        //backgroundColor: "red"

    },
    buttonNext0: {
        backgroundColor: "#1066FF",
        height: "8%",
        width: "70%",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    buttonNext: {
        backgroundColor: "#1066FF",
        marginTop: "6%",
        height: "8%",
        width: "70%",

        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    select: {
        backgroundColor: "#FFD99C",
        marginTop: "4%",
        height: "8%",
        width: "70%",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

});
