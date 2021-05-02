//import React, { Component } from 'react';
import React from 'react';
import {
    Text, StyleSheet, View,
    TouchableOpacity,
    Image
} from 'react-native';
import TwoIconC from '../Svg/TwoIconC';


class TwoRun extends React.Component {

    constructor(props) {
        super(props);
        this.state = {


        };
    }

    componentDidMount() {


    }


    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                   {/*  <TouchableOpacity style={{marginTop: '5%', marginLeft: "5%" }}
                        onPress={() => {this.props.navigation.navigate('OneRun')}}>
                        <Image
                            style={{
                                marginTop: '6%', marginRight: "0%",
                                width: 60, height: 60
                            }}
                            source={require('../Svg/b.png')} >
                        </Image>
                        
                    </TouchableOpacity> */}
                    <Image
                            style={{
                                marginTop: '10%',
                                width: 250, height: 70
                            }}
                            source={require('../Svg/title.png')} >
                        </Image>
                </View>
                <View style={styles.body}>
                    {/* <Text style={{
                        marginTop: '3%', marginLeft: "15%", fontSize: 40, width: "70%",
                        color: '#FFFFFF', textAlign: "center", fontWeight: 'bold',
                    }}>Get complete transparency</Text> */}
                    <TouchableOpacity style={{
                        marginTop: '5%',
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                        onPress={() => {
                            this.props.navigation.navigate('ThreeRun')
                        }} >
                        <Image
                            style={{
                                marginTop: '6%', marginRight: "0%",
                                //width: 250, height: 250
                            }}
                            source={require('../Svg/Two.png')} >
                        </Image>
                    </TouchableOpacity>
                    <Text style={{
                        marginTop: '20%', marginLeft: "10%", fontSize: 25, width: "80%",
                        color: '#FFFFFF', textAlign: "center"
                    }}>Consulter vos transactions par détails en toutes sécurité</Text>
                    {/* <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <TouchableOpacity
                            style={styles.buttonNext}
                            onPress={() => {
                                this.props.navigation.navigate('ThreeRun')
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

                    <TwoIconC></TwoIconC>
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

export default TwoRun;


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