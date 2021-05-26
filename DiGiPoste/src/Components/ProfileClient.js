import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import PhotoProfil from './PhotoProfil';


class ProfileClient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photo: '',
            firstname: '',
            lastname: '',
            birth_date: '',
            Location: '',
            numberclaims: '',
            Alltimeearned: '',
            listInformations: [] = []


        };
    }







    componentWillUnmount() {

    }

    componentDidMount() {


    }



    render() {
        // var {photo} = this.state;
        return (

            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: "column" }}>
                        <TouchableOpacity style={{
                            //justifyContent: "flex-start",
                            //alignItems: "center",
                            marginTop: '2%', marginLeft: "5%"
                        }}
                            onPress={() => {
                                this.props.navigation.navigate('HomeClient')
                            }}
                        >
                            <Image
                                style={{
                                    marginTop: '0%', marginRight: "0%",
                                    width: 60, height: 60
                                }}
                                source={require('../Svg/b.png')} >
                            </Image>
                            {/* <BackPage></BackPage> */}
                        </TouchableOpacity>
                        <PhotoProfil></PhotoProfil>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={{ alignItems: "flex-start" }}>
                        <Text style={{ fontSize: 24, fontWeight: "700", color: "#fff", marginTop: "1%", textAlign: "center" }}> </Text>
                        <View >

                            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "auto", marginTop: "4%" }}>
                                Nom :Trabelsi  <Text style={styles.textdate}> </Text>
                            </Text>

                        </View>

                        <View>
                            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "auto", marginTop: "5%", }}>
                                Prénom : Aymen<Text style={styles.textdata2}> </Text>
                            </Text>
                        </View>

                        <View>
                            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "auto", marginTop: "5%", }}>
                                Email: trabelsiaymen@email.com <Text style={styles.textdata2}> </Text>
                            </Text>
                        </View>

                        <View>
                            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "auto", marginTop: "5%", }}>
                                Adress: Tunis<Text style={styles.textdata2}> </Text>
                            </Text>
                        </View>
                        <View>
                            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "auto", marginTop: "5%", }}>
                                Poste: utilisateur <Text style={styles.textdata2}> </Text>
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.buttonNext}
                        onPress={() => this.props.navigation.navigate('modifProfilClient')}
                    //onPress={() => {this.props.navigation.navigate('TwoRun')}}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                color: '#FFFFFF', textAlign: "center"
                            }}
                        >Modifier</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }

}




export default ProfileClient;

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#27277A",
        flex: 1
    },
    header: {
        //backgroundColor: "red",
        flex: 2,
        //justifyContent: "center",
        //alignItems: "center",
    },
    body: {
        //backgroundColor: "red",
        flex: 3,
        //justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        //backgroundColor: "red",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textdate: {
        color: "white",
        fontSize: 18,
        paddingTop: 7,
        fontWeight: "bold",
        //marginRight: "66%",
        //padding: 2
    },
    textdata2: {
        color: "white",
        fontSize: 18,
        //paddingTop: 1,
        marginLeft: "40%",
        //padding: 2
    },
    profile: {
        alignItems: "center",
        //height:"40%",
        borderBottomColor: "#eee",
        //borderBottomWidth: 1,
        //paddingBottom: "1%",
        flexDirection: "row"
    },

    image: {
        width: 150,
        height: 150,
        backgroundColor: "#fff",
        borderRadius: 500,
        //justifyContent:"center"
    },


    menu: {
        marginTop: "5%"
    },
    logo: {
        marginLeft: '5%',
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    profile: {
        alignItems: "center",
        //height:"40%",
        borderBottomColor: "#eee",
        //borderBottomWidth: 1,
        //paddingBottom: "1%",
        flexDirection: "row"
    },

    buttonNext: {
        backgroundColor: "#1066FF",
        marginTop: "0%",
        height: "40%",
        width: "80%",
        //borderColor: '#fff',
        //borderWidth: 1,
        //width: "100%",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },

});

//export default Profile;