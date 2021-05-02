//import React, { Component } from 'react';
import React from 'react';
import {
    Text, StyleSheet, View,
    TouchableOpacity,
    Image,
    AsyncStorage
} from 'react-native';

import OneIconC from '../Svg/OneIconC';

import TogggleP from '../Svg/TogggleP';

class OneRun extends React.Component {

    constructor(props) {
        super(props);
        this.state = {


        };
    }

    componentDidMount() {
        //AsyncStorage.clear();
        /*  setInterval(() => {
             this.props.navigation.navigate('TwoRun')
         }, 2000) */
    }


    render() {

        return (
            <View style={styles.container}
            >
                <View style={styles.header}>
                    

                        <Image
                            style={{
                                marginTop: '10%', marginRight: "5%",
                                width: 250, height: 70
                            }}
                            source={require('../Svg/title.png')} >
                        </Image>

                   
                </View>
                <View style={styles.body}>
                  
                    <TouchableOpacity style={{
                        marginTop: '15%',
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                        onPress={() => {
                            this.props.navigation.navigate('TwoRun')
                        }} >
                        <Image
                            style={{
                                marginTop: '0%', marginRight: "0%",
                                //width: 250, height: 250
                            }}
                            source={require('../Svg/Pe.png')} >
                        </Image>
                    </TouchableOpacity>
                    <Text style={{
                        marginTop: '10%', marginLeft: "10%", fontSize: 25, width: "80%",
                        color: '#FFFFFF', textAlign: "center"
                    }}>	Transférer de l'argent et Consulter toutes les transactions effectuées..
                    </Text>
                    {/* <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <TouchableOpacity
                            style={styles.buttonNext}
                            onPress={() => {
                                this.props.navigation.navigate('TwoRun')
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: '#FFFFFF', textAlign: "center"
                                }}
                            >Next</Text>
                        </TouchableOpacity>

                    </View> */}
                </View>
                <View style={styles.footer}>

                    <OneIconC></OneIconC>

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
        justifyContent: "center",
        alignItems: "center",
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
    buttonNext: {
        backgroundColor: "#1066FF",
        marginTop: "0%",
        height: "27%",
        width: "80%",
        //borderColor: '#fff',
        //borderWidth: 1,
        //width: "100%",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },

});

export default OneRun;


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