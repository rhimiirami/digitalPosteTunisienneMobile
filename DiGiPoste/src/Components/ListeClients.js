import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { Flech0 } from '../Svg/TimeTokenIcons';
import ProfilSvg from '../Svg/ProfilSvg';

class ListeClients extends React.Component {

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
                    <View>
                    <TouchableOpacity style={{ marginTop: '0%', marginLeft: "5%" }}
                        onPress={() => { this.props.navigation.navigate('HomeAdmin') }}>
                        <Image
                            style={{
                                marginTop: '6%', marginRight: "0%",
                                width: 60, height: 60
                            }}
                            source={require('../Svg/b.png')} >
                        </Image>
                    </TouchableOpacity>
                    </View>
                    

                  <View>
                  <Text style={{textAlign:"center",color:"#FFFFFF",fontWeight:"bold",fontSize:20,marginTop:"10%"}}>Liste des clients</Text>
                      </View>  
                </View>

                <View style={styles.body}>


                    <View style={styles.buttonNext0}>
                        <View><ProfilSvg></ProfilSvg></View>

                        <View>
                            <Text style={{ color: "#fff", fontSize: 15, textAlign: "auto" }}>
                                Aymen chebbi
                                        </Text>
                        </View>


                        <View><Flech0></Flech0></View>
                    </View>


                    <View style={styles.buttonNext}>
                        <View><ProfilSvg></ProfilSvg></View>

                        <View>
                            <Text style={{ color: "#fff", fontSize: 15, textAlign: "auto" }}>
                                Aymen chebbi
                                        </Text>
                        </View>


                        <View><Flech0></Flech0></View>
                    </View>

                    <View style={styles.buttonNext}>
                        <View><ProfilSvg></ProfilSvg></View>

                        <View>
                            <Text style={{ color: "#fff", fontSize: 15, textAlign: "auto" }}>
                                Aymen chebbi
                                        </Text>
                        </View>


                        <View><Flech0></Flech0></View>
                    </View>

                    <View style={styles.buttonNext}>
                        <View><ProfilSvg></ProfilSvg></View>

                        <View>
                            <Text style={{ color: "#fff", fontSize: 15, textAlign: "auto" }}>
                                Aymen chebbi
                                        </Text>
                        </View>


                        <View><Flech0></Flech0></View>
                    </View>

                    <View style={styles.buttonNext}>
                        <View><ProfilSvg></ProfilSvg></View>

                        <View>
                            <Text style={{ color: "#fff", fontSize: 15, textAlign: "auto" }}>
                                Aymen chebbi
                                        </Text>
                        </View>


                        <View><Flech0></Flech0></View>
                    </View>

                    <View style={styles.buttonNext}>
                        <View><ProfilSvg></ProfilSvg></View>

                        <View>
                            <Text style={{ color: "#fff", fontSize: 15, textAlign: "auto" }}>
                                Aymen chebbi
                                        </Text>
                        </View>


                        <View><Flech0></Flech0></View>
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
        flexDirection: "row",
        marginLeft: 10,
        marginRight: 10,
        marginTop: "2%",
        flex: 0.5,
    },
    body: {
        // marginTop: '15%',
        flex: 3,
        alignItems: "center",
        //justifyContent: "center"
        // backgroundColor: "red"

    },
    buttonNext0: {
        backgroundColor: "#1066FF",
        //marginTop: "8%",
        height: "10%",
        width: "80%",
        //borderColor: '#fff',
        //borderWidth: 1,
        //width: "100%",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    buttonNext: {
        backgroundColor: "#1066FF",
        marginTop: "10%",
        height: "15%",
        width: "80%",
        //borderColor: '#fff',
        //borderWidth: 1,
        //width: "100%",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
});

export default ListeClients;


