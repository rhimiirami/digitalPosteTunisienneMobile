//import React, { Component } from 'react';
import React from 'react';
import {
    Text, StyleSheet, View,
    TouchableOpacity,
    Image, Modal,
    TextInput,
    AsyncStorage
} from 'react-native';


class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            busyClick: false,
            email: "",
            password: "",
            message:"",
            helpVisiblle: false,
            modalVisible: false,

        };
    }

    componentDidMount() {
        var self = this

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
                         <View style={{ alignItems: "center" ,marginTop:"15%"}}>
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
                    <View style={{
                        alignItems: "center", marginTop: "45%", width: "100%", height: "100%"
                    }} >
                        <TextInput style={styles.inputStyle}
                            placeholder='Login'
                            autoCapitalize='none'
                            placeholderTextColor="#FAF5F0"
                            onChangeText={(text) => this.setState({ email: text })}
                        ></TextInput>


                        <TextInput style={styles.inputStyle}
                            placeholder='Mot de passe'
                            autoCapitalize='none'
                            placeholderTextColor="#FAF5F0"
                            secureTextEntry
                            onChangeText={(text) => this.setState({ password: text })}
                        ></TextInput>
                        <TouchableOpacity style={styles.buttonSign}
                            onPress={() => { this.props.navigation.navigate('HomeAdmin') }}
                        //disabled={busyClick}

                        >
                            <Text style={{
                                marginTop: '0%', fontSize: 18,
                                color: '#FAF5F0', textAlign: 'center'
                            }}>{this.state.busyClick ? "PLEASE WAIT..." : "Sign in Admin"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSign}
                            onPress={() => { this.props.navigation.navigate('HomeClient') }}
                        //disabled={busyClick}

                        >
                            <Text style={{
                                marginTop: '0%', fontSize: 18,
                                color: '#FAF5F0', textAlign: 'center'
                            }}>{this.state.busyClick ? "PLEASE WAIT..." : "Sign in Client"}</Text>
                        </TouchableOpacity>
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
        marginTop: "3%",
        height: "7%",
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
        height: "7%",
        width: '80%',
        //backgroundColor: "black",
        fontSize: 18,
        marginTop: '3%',
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