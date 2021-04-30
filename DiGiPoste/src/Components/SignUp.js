//import React, { Component } from 'react';
import React from "react";
import {
    Text, StyleSheet, View,
    TouchableOpacity,
    Image,
    TextInput,
    CheckBox
} from 'react-native';

//const [isSelected, setSelection] = useState(false);
class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelected: false

        };
    }

    componentDidMount() {

    }

    setSelection() {
        this.setState({ isSelected: true })
    }

    render() {
        var { isSelected } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={{
                        //justifyContent: "flex-start",
                        //alignItems: "center",
                        marginTop: '0%', marginLeft: "5%"
                    }}
                        onPress={() => {
                            this.props.navigation.navigate('HomeAdmin')
                        }}
                    >
                        <Image
                            style={{
                                marginTop: '6%', marginRight: "0%",
                                width: 60, height: 60
                            }}
                            source={require('../Svg/b.png')} >
                        </Image>
                        {/* <BackPage></BackPage> */}
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <Text style={{
                        marginTop: '3%', marginLeft: "15%", fontSize: 40, width: "70%",
                        color: '#FAF5F0', textAlign: "center", fontWeight: 'bold',
                    }}>Ajouter un nouveau client</Text>

                    <View style={{
                        marginTop: "5%", width: "99%", height: "100%"
                    }} >
                        <TextInput style={styles.inputStyle}
                            placeholder='Nom'
                            autoCapitalize='none'
                            placeholderTextColor="#FAF5F0"
                            onChangeText={(text) => this.setState({ email: text })}
                        ></TextInput>

                        <TextInput style={styles.inputStyle}
                            placeholder='Prénom'
                            autoCapitalize='none'
                            placeholderTextColor="#FAF5F0"
                            onChangeText={(text) => this.setState({ email: text })}
                        ></TextInput>


                        <TextInput style={styles.inputStyle}
                            placeholder='Adresse Email '
                            autoCapitalize='none'
                            placeholderTextColor="#FAF5F0"
                            onChangeText={(text) => this.setState({ password: text })}
                        ></TextInput>
                        <TextInput style={styles.inputStyle}
                            placeholder='Adresse '
                            autoCapitalize='none'
                            placeholderTextColor="#FAF5F0"
                            onChangeText={(text) => this.setState({ password: text })}
                        ></TextInput>
                        <TextInput style={styles.inputStyle}
                            placeholder='N° CIN/Passport'
                            autoCapitalize='none'
                            placeholderTextColor="#FAF5F0"
                            secureTextEntry
                            onChangeText={(text) => this.setState({ password: text })}
                        ></TextInput>
                        <TextInput style={styles.inputStyle}
                            placeholder='N° Téléphone'
                            autoCapitalize='none'
                            placeholderTextColor="#FAF5F0"
                            secureTextEntry
                            onChangeText={(text) => this.setState({ password: text })}
                        ></TextInput>
                        <TextInput style={styles.inputStyle}
                            placeholder='Create password'
                            autoCapitalize='none'
                            placeholderTextColor="#FAF5F0"
                            secureTextEntry
                            onChangeText={(text) => this.setState({ password: text })}
                        ></TextInput>
                        <TextInput style={styles.inputStyle}
                            placeholder='Confirm password'
                            autoCapitalize='none'
                            placeholderTextColor="#FAF5F0"
                            secureTextEntry
                            onChangeText={(text) => this.setState({ password: text })}
                        ></TextInput>


                    </View>

                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.buttonSign}
                        onPress={() => {
                            this.props.navigation.navigate('DataExplorer')
                        }}
                    >
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
        //backgroundColor: "red",
        flex: 0.5,
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
        //justifyContent: "center",
        alignItems: "center",
    },
    buttonSign: {
        backgroundColor: "#1066FF",
        marginTop: "3%",
        height: "60%",
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

export default SignUp;


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