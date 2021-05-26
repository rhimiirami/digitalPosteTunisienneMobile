//import React, { Component } from 'react';
import React from "react";
import {
    Text, StyleSheet, View,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';

//const [isSelected, setSelection] = useState(false);
class SignUpAccount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,

            numCompte: "",
            nom: "",
            prenom: "",
            numCinPass: "",
            numTel: "",

            msgNumCompte: "",
            msgNom: "",
            msgPrenom: "",
            msgCinPass: "",
            msgTel: ""

        };
    }

    
    handelLoginBtn = () => {
        let { numCompte, nom, prenom, numCinPass ,numTel} = this.state;
        let phoneTest = this.checked( numCompte, nom, prenom, numCinPass ,numTel)
        if (numCompte && nom && prenom && numCinPass && numTel) {
            this.setState({ CodeInput: true })
        }
    }
    checked = (numCompte, nom, prenom, numCinPass, numTel) => {

        if (numCompte == '') {
            this.setState({ msgNumCompte: "Numéro compte obligatoire" })
            return false
        }

        else if (nom == '') {
            this.setState({ msgNom: "Nom obligatoire" })
            return false
        }
        else if (prenom == '') {
            this.setState({ msgPrenom: "Prénom obligatoire" })
            return false
        }
        else if (numCinPass == '') {
            this.setState({ msgCinPass: "N° CIN/Passeport obligatoire" })
            return false
        }
        else if (numTel == '') {
            this.setState({ msgTel: "N° Téléphone obligatoire" })
            return false
        }
        else {
          //  alert('Succès')
            return true
        }
    }

    setSelection() {
        this.setState({ isSelected: true })
    }

    render() {
        var { isSelected } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={{marginTop: '0%', marginLeft: "5%"}}
                        onPress={() => {this.props.navigation.navigate('HomeAdmin') }} >
                        <Image
                            style={{
                                marginTop: '6%', marginRight: "0%",
                                width: 60, height: 60
                            }}
                            source={require('../Svg/b.png')} >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <Text style={{
                        marginTop: '3%', marginLeft: "7%", fontSize: 40, width: "80%",
                        color: '#FAF5F0', textAlign: "center", fontWeight: 'bold',
                    }}>Ajouter un compte postale</Text>

                    <View style={{
                        marginTop: "5%", width: "99%", height: "100%"
                    }} >


                        <TextInput style={styles.inputStyle}
                            placeholder='Numéro de compte'
                            autoCapitalize='none'
                            placeholderTextColor="#FAF5F0"
                            onChangeText={(text) => this.setState({ numCompte: text })}
                        ></TextInput>   
                        <Text style={{
                            color: "red", fontSize: 13, fontWeight: "bold",
                            textAlign: "center", marginTop: "0%"
                        }}>
                            {this.state.msgNumCompte}
                        </Text>



                        <TextInput style={styles.inputStyle}
                            placeholder='Nom'
                            autoCapitalize='none'
                            placeholderTextColor="#FAF5F0"
                            onChangeText={(text) => this.setState({ nom: text })}
                        ></TextInput>
                        <Text style={{
                            color: "red", fontSize: 13, fontWeight: "bold",
                            textAlign: "center", marginTop: "0%"
                        }}>
                            {this.state.msgNom}
                        </Text>




                        <TextInput style={styles.inputStyle}
                            placeholder='Prénom'
                            autoCapitalize='none'
                            placeholderTextColor="#FAF5F0"
                            onChangeText={(text) => this.setState({ prenom: text })}
                        ></TextInput>
                        <Text style={{
                            color: "red", fontSize: 13, fontWeight: "bold",
                            textAlign: "center", marginTop: "0%"
                        }}>
                            {this.state.msgPrenom}
                        </Text>





                        <TextInput style={styles.inputStyle}
                            placeholder='N° CIN/Passport'
                            autoCapitalize='none'
                            placeholderTextColor="#FAF5F0"
                            secureTextEntry
                            onChangeText={(text) => this.setState({ numCinPass: text })}
                        ></TextInput>
                        <Text style={{
                            color: "red", fontSize: 13, fontWeight: "bold",
                            textAlign: "center", marginTop: "0%"
                        }}>
                            {this.state.msgCinPass}
                        </Text>



                        <TextInput style={styles.inputStyle}
                            placeholder='N° Téléphone'
                            autoCapitalize='none'
                            placeholderTextColor="#FAF5F0"
                            secureTextEntry
                            onChangeText={(text) => this.setState({ numTel: text })}
                        ></TextInput>
                        <Text style={{
                            color: "red", fontSize: 13, fontWeight: "bold",
                            textAlign: "center", marginTop: "0%"
                        }}>
                            {this.state.msgTel}
                        </Text>


                    </View>

                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.buttonSign}
                      //  onPress={() => this.props.navigation.navigate('ListeComptesPostales')}
                      onPress={() => {
                        this.handelLoginBtn()
                    }} >
                        <Text style={{
                            marginTop: '0%', fontSize: 18,
                            color: '#FAF5F0', textAlign: 'center'
                        }}>{this.state.busyClick ? "S'il vous plaît, attendez ..." : "Enregistrer"}</Text>
                    </TouchableOpacity>
                </View >
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#27277A",
        flex: 1
    },
    header: {
        flex: 0.5,
    },
    body: {
        flex: 4,
       
    },
    footer: {
       
        flex: 0.5,
        alignItems: "center",
    },
    buttonSign: {
        backgroundColor: "#1066FF",
        marginTop: "3%",
        height: "60%",
        width: "80%",
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
        marginLeft: "10%",
        paddingLeft: 30,
        borderWidth: 1,
        color: '#FAF5F0',
        borderColor: '#FAF5F0',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
});

export default SignUpAccount;


