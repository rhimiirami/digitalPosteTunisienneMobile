//import React, { Component } from 'react';
import React from 'react';
import {
    Text, StyleSheet, View,
    TouchableOpacity,
    Image, Modal,
    TextInput,
    AsyncStorage,
    ScrollView
} from 'react-native';


class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            busyClick: false,
            email: "",
            password: "",
            messageLogin: "",
            messagePassword: "",


        };
    }

    componentDidMount() {
        var self = this

    }
    login() {
        let { email, password } = this.state;
        let phoneTest = this.checked(email, password)
        // alert(this.state.email + this.state.password)
        if (this.state.email === "client" && this.state.password === "123456") {
            this.props.navigation.navigate('HomeClient')
        } else if (this.state.email === "admin" && this.state.password === "123456") {
            this.props.navigation.navigate('HomeAdmin')
        } else {
            alert("Please checked your login and password")
        }
    }

    checked = (email, password) => {

        if (email == '') {
            this.setState({ messageLogin: "Login obligatoire" })
            //alert("This field is required")
            return false
        }

        else if (password == '') {
            this.setState({ messagePassword: "Mot de passe obligatoire" })
            //alert("This field is required")
            return false
        }
        else {
         //   alert('Succès')
            return true
        }
    }

    handelLoginBtn = () => {
        let {   email, password } = this.state;
        let phoneTest = this.checked( email, password)
        
        if ( email && password) {
            this.setState({ CodeInput: true })
        }
    }

    render() {
        var { busyClick } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: '15%',
                    }}>
                        <View style={{ alignItems: "center", marginTop: "15%" }}>
                            <Image
                                style={{
                                    marginTop: '0%',
                                    width: 80, height: 80
                                }}
                                source={require('../Svg/logo.png')} >
                            </Image>
                        </View>
                        <Image
                            style={{
                                marginTop: '0%', marginRight: "0%",
                                width: 250, height: 70
                            }}
                            source={require('../Svg/title.png')} >
                        </Image>


                    </View>
                </View>
                <View style={styles.body}>
                    <ScrollView style={{ width: "100%", height: "100%" }}>
                        <View style={{
                            alignItems: "center", marginTop: "30%", width: "100%", height: "100%"
                        }} >
                            <TextInput style={styles.inputStyle}
                                placeholder='Login'
                                autoCapitalize='none'
                                placeholderTextColor="#FAF5F0"
                                onChangeText={(text) => this.setState({ email: text })}
                            ></TextInput>

                            <Text style={{
                                color: "red", fontSize: 13, fontWeight: "bold",
                                textAlign: "center", marginTop: "0%"
                            }}>
                                {this.state.messageLogin}
                            </Text>
                            <TextInput style={styles.inputStyle}
                                placeholder='Mot de passe'
                                autoCapitalize='none'
                                placeholderTextColor="#FAF5F0"
                                secureTextEntry
                                onChangeText={(text) => this.setState({ password: text })}
                            ></TextInput>

                            <Text style={{
                                color: "red", fontSize: 13, fontWeight: "bold",
                                textAlign: "center", marginTop: "0%"
                            }}>
                                {this.state.messagePassword}
                            </Text>
                            <TouchableOpacity style={styles.buttonSign}
                                onPress={() => { this.login() }}
                            //disabled={busyClick}

                            >
                                <Text style={{
                                    marginTop: '0%', fontSize: 18,
                                    color: '#FAF5F0', textAlign: 'center'
                                }}>{this.state.busyClick ? "PLEASE WAIT..." : "Sign in"}</Text>
                            </TouchableOpacity>
                            <View style={{ backgroundColor: "#27277A", width: "100%", height: "100%" }}>
                                <TouchableOpacity style={styles.buttonSign0}


                                >
                                    <Text style={{
                                        marginTop: '0%', fontSize: 18,
                                        color: '#27277A', textAlign: 'center'
                                    }}></Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </ScrollView>
                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#27277A",
        flex: 1
    },
    header: {
        flex: 1,
        
    },
    body: {
        flex: 4,
        
    },
    footer: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonSign: {
        backgroundColor: "#1066FF",
        marginTop: "5%",
        height: "14%",
        width: "80%",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonSign0: {
        backgroundColor: "#27277A",
        marginTop: "3%",
        height: "14%",
        width: "80%",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    inputStyle: {
        borderRadius: 25,
        height: "14%",
        width: '80%',
        fontSize: 18,
        marginTop: '5%',
        paddingLeft: 30,
        borderWidth: 1,
        color: '#FAF5F0',
        borderColor: '#FAF5F0',
    },
    centeredView: {
        flex: 1,
        backgroundColor: "#27277A",
        marginTop: "20%"
    }, modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: '#FFFFFF',
        fontSize: 20, width: "90%"
    },
});

export default SignIn;


