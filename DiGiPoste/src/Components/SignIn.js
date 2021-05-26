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
            message: "",


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
            this.setState({ message: "This field is required" })
            //alert("This field is required")
            return false
        }

        else if (password == '') {
            this.setState({ message: "This field is required" })
            //alert("This field is required")
            return false
        }
        else {
            alert('Succès')
            return true
        }
    }

    handelLoginBtn = () => {
        //alert("45d5d5za" + this.state.numero)
        let { firstname, lastname, email, address, numeroPassport, numero, password, confirmPassword } = this.state;
        let phoneTest = this.checked(firstname, lastname, email, password, address, numeroPassport, numero, password, confirmPassword)
        //let usernameTest = checkUsername(username)
        //let emailTest = checkEmail(email)
        //let addressTest = checkAddress(address)
        /* if (phoneTest && usernameTest && emailTest && addressTest) {
            //setCodeInput(true)
            this.setState({ CodeInput: true })
        } */
        if (firstname && lastname && email && address && numeroPassport && numero && password && confirmPassword) {
            //setCodeInput(true)
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
                                {this.state.message}
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
                                {this.state.message}
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
                            {/* <TouchableOpacity style={styles.buttonSign}
                                onPress={() => { this.props.navigation.navigate('HomeClient') }}
                            //disabled={busyClick}

                            >
                                <Text style={{
                                    marginTop: '0%', fontSize: 18,
                                    color: '#FAF5F0', textAlign: 'center'
                                }}>{this.state.busyClick ? "PLEASE WAIT..." : "Sign in Client"}</Text>
                            </TouchableOpacity> */}
                            {/* <Text style={{
                            marginTop: '7%', marginLeft: "0%", fontSize: 16, width: "70%",
                            color: '#8CD1C4', textAlign: "center", fontWeight: 'bold',
                        }}>Vous n'avez pas un compte? <Text style={{marginTop: '5%', marginLeft: "0%", fontSize: 16,
                         width: "70%",color: '#FAF5F0', textAlign: "center", fontWeight: 'bold'}}
                        onPress={() => {this.setState({message:"Pour s'inscrire il faut oligatoirement que votre role doit etre ADMIN "})}}
                        >S'inscrire</Text></Text>
                        <Text style={{marginTop: '5%', marginLeft: "0%", fontSize: 16,
                         width: "70%",color: '#FAF5F0', textAlign: "center", fontWeight: 'bold'}}
                       
                        >{this.state.message}</Text> */}

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
        //backgroundColor: "red",
        flex: 1,
        //justifyContent: "center",
        //alignItems: "center",
    },
    body: {
        //backgroundColor: "red",
        flex: 4,
        //justifyContent: "center",
        //alignItems: "center",
    },
    footer: {
        //backgroundColor: "red",
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonSign: {
        backgroundColor: "#1066FF",
        marginTop: "5%",
        height: "14%",
        width: "80%",
        //borderColor: '#fff',
        //borderWidth: 1,
        //width: "100%",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonSign0: {
        backgroundColor: "#27277A",
        marginTop: "3%",
        height: "14%",
        width: "80%",
        //borderColor: '#fff',
        //borderWidth: 1,
        //width: "100%",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    inputStyle: {
        borderRadius: 25,
        height: "14%",
        width: '80%',
        //backgroundColor: "black",
        fontSize: 18,
        marginTop: '5%',
        //marginLeft: "10%",
        paddingLeft: 30,
        borderWidth: 1,
        color: '#FAF5F0',
        borderColor: '#FAF5F0',
    },
    centeredView: {
        flex: 1,
        //justifyContent: "center",
        //alignItems: "center",
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


{/* <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this.loginImap}
                        title="Test Login Imap"
                    />
                    <Button
                        onPress={this.loginSmtp}
                        title="Test Login smtp"
                        color="#841584"
                    />
                </View>
                <View >

                    <Button
                        onPress={this.getMail}
                        title="getMail"
                    />
                    <Button
                        onPress={this.getMails.bind(this)}
                        title="getMails"
                    />
                    <Button
                        onPress={this.getUns.bind(this)}
                        title="getUns"
                    />
                     {this.state.emailFrom.length > 0 &&
                        this.state.emailFrom.map(promotion => {
                            return <Text>{promotion}</Text>
                        })
                    } 
                    {this.state.emailFrom.map((from, index) => {
                        return <View style={{ marginTop: "0%", marginLeft: "0%" }}>

                            <Text key={index} >{from}</Text>
                        </View>

                    })
                    }
                </View>
            </View> */}