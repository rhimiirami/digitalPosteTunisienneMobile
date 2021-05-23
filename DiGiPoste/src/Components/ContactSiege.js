
import React from 'react';
import {
    Text, StyleSheet, View,
    TouchableOpacity,
    Image,
    ScrollView,
    ActivityIndicator,
    TextInput,
    Linking
} from 'react-native';
import { EditP, SearchIcon, Delete } from '../Svg/TimeTokenIcons'

class ContactSiege extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            busy: true,
            numeroSiege: "121212121212",
            userAcceuil: (this.props.route.params) ? this.props.route.params : "",
            userClient: (this.props.route.params) ? this.props.route.params : "",
            userAdmin: (this.props.route.params) ? this.props.route.params : "",
        };
    }

    componentDidMount() {

    }


    dialCall = () => {

        let phoneNumber = '';
        if (Platform.OS === 'android') {
            phoneNumber = `tel:${this.state.numeroSiege}`;
        }
        else {
            phoneNumber = `telprompt:${this.state.numeroSiege}`;
        }
        Linking.openURL(phoneNumber);
    };

    goBack() {
        //alert("im here0")
        if (this.props.route.params.userAcceuil === "acceuil") {
            this.props.navigation.navigate('Acceuil')
            //alert("im here")
        } else if (this.props.route.params.userClient === "client") {
            this.props.navigation.navigate('HomeClient')
            // alert("im here----")
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: "5%" }}>
                        <TouchableOpacity style={{ marginLeft: "3%" }}
                            onPress={() => { this.goBack() }}>
                            <Image
                                style={{
                                    marginTop: '6%', marginRight: "0%",
                                    width: 60, height: 60
                                }}
                                source={require('../Svg/bAcc.png')} >
                            </Image>
                        </TouchableOpacity>


                        <Text style={{ color: "#27277A", fontWeight: "bold", fontSize: 24, textAlign: "center", marginLeft: "10%" }}>Contacter le Siège</Text>

                    </View>

                </View>




                <View style={styles.body}>
                    <View style={styles.cadre}>


                        <TouchableOpacity onPress={() => { Linking.openURL('https://www.poste.tn/') }}
                            style={styles.buttonNext}>
                            <Text style={{
                                color: "#27277A", fontSize: 20, fontWeight: "bold",
                                textAlign: "auto", marginTop: "0%"
                            }}>
                                Site web
                    </Text>
                        </TouchableOpacity>
                        <View style={{ width: "10%" }}>

                        </View>

                        <TouchableOpacity onPress={() => { Linking.openURL('https://www.facebook.com/TunisianPost/') }}
                            style={styles.buttonNext}>
                            <Text style={{
                                color: "#27277A", fontSize: 20, fontWeight: "bold",
                                textAlign: "auto", marginTop: "0%"
                            }}>
                                Facebook
                    </Text>

                        </TouchableOpacity>
                    </View>
                    <View style={styles.cadre1}>


                        <TouchableOpacity onPress={() => { Linking.openURL('https://www.youtube.com/channel/UCgdccp_xpo1937Jp3N8O_fA') }}
                            style={styles.buttonNext}>
                            <Text style={{
                                color: "#27277A", fontSize: 20, fontWeight: "bold",
                                textAlign: "auto", marginTop: "0%"
                            }}>
                                YouTube
                    </Text>

                        </TouchableOpacity>

                        <View style={{ width: "10%" }}>

                        </View>
                        <TouchableOpacity onPress={() => { Linking.openURL('https://twitter.com/Poste_Tn') }}
                            style={styles.buttonNext}>
                            <Text style={{
                                color: "#27277A", fontSize: 20, fontWeight: "bold",
                                textAlign: "auto", marginTop: "0%"
                            }}>
                                Twitter
                    </Text>

                        </TouchableOpacity>
                    </View>





                    <View style={styles.cadre1}>
                        <TouchableOpacity onPress={() => this.dialCall()}
                            style={styles.buttonNext}>
                            <Text style={{
                                color: "#27277A", fontSize: 20, fontWeight: "bold",
                                textAlign: "auto", marginTop: "0%"
                            }}>
                                Téléphone
                    </Text>

                        </TouchableOpacity>
                        <View style={{ width: "10%" }}>

                        </View>
                        <TouchableOpacity onPress={() => Linking.openURL('mailto:rhimiirami@gmail.com')}
                            style={styles.buttonNext}>
                            <Text style={{
                                color: "#27277A", fontSize: 20, fontWeight: "bold",
                                textAlign: "auto", marginTop: "0%"
                            }}>
                                Email
                    </Text>

                        </TouchableOpacity>
                    </View>
                    {/*  <TouchableOpacity 
                    style={styles.buttonNext}>
                    <Text style={{
                        color: "#fff", fontSize: 20, fontWeight: "bold",
                        textAlign: "auto", marginTop: "0%"
                    }}>
                        SMS
                    </Text>
                   
                </TouchableOpacity> */}


                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAF5F0",
        flex: 1
    },
    header: {
        flex: 0.75,

    },
    body: {
        flex: 4,
        alignItems: "center",



    },
    cadre: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",


    },
    cadre1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "10%"

    },

    buttonNext: {
        backgroundColor: "#FAF5F0",
        marginTop: "20%",
        height: "100%",
        width: "40%",
        borderRadius: 25,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#27277A"
    },
});

export default ContactSiege;


