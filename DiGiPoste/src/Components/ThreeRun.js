//import React, { Component } from 'react';
import React from 'react';
import {
    Text, StyleSheet, View,
    TouchableOpacity,
    Image
} from 'react-native';
import ThreeIconC from '../Svg/ThreeIconC';



class ThreeRun extends React.Component {

    constructor(props) {
        super(props);
        this.state = {


        };
    }

    componentDidMount() {
       
    }


    render() {

        return (
            <View style={styles.container} >
                <View style={styles.header}>
                    {/* <TouchableOpacity style={{marginTop: '5%', marginLeft: "5%" }} onPress={() => { this.props.navigation.navigate('TwoRun')}}>
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
                   {/*  <Text style={{
                        marginTop: '3%', marginLeft: "15%", fontSize: 40, width: "70%",
                        color: '#FFFFFF', textAlign: "center", fontWeight: 'bold',
                    }}>Take back control</Text> */}
                    <TouchableOpacity style={{
                        marginTop: '3%',
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onPress={() => {
                        this.props.navigation.navigate('SignIn')
                    }}>
                        <Image
                            style={{
                                marginTop: '-20%', marginRight: "0%",
                                //width: 250, height: 250
                            }}
                            source={require('../Svg/Three.png')} >
                        </Image>
                    </TouchableOpacity>
                    <Text style={{
                        marginTop: '10%', marginLeft: "10%", fontSize: 25, width: "80%",
                        color: '#FFFFFF', textAlign: "center"
                    }}>Voir l'echange des devises avec un convertisseur et graph</Text>
                   {/*  <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <TouchableOpacity
                            style={styles.buttonCreate}
                            onPress={() => {
                                this.props.navigation.navigate('SignIn')
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: '#27277A', textAlign: "center"
                                }}
                            >Create your account</Text>
                        </TouchableOpacity>

                    </View> */}
                </View>
                <View style={styles.footer}>

                    <ThreeIconC></ThreeIconC>
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
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        //backgroundColor: "red",
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonCreate: {
        backgroundColor: "#FAF5F0",
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

export default ThreeRun;
