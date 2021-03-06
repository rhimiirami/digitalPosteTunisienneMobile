import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import PhotoProfilAdmin from './PhotoProfilAdmin';


class ProfileAdmin extends Component {

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
                                this.props.navigation.navigate('HomeAdmin')
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
                       <PhotoProfilAdmin></PhotoProfilAdmin>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={{ alignItems: "flex-start" }}>
                        <Text style={{ fontSize: 24, fontWeight: "700", color: "#fff", marginTop: "1%", textAlign: "center" }}> </Text>
                        <View >

                            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "auto", marginTop: "4%" }}>
                                Nom : Daraji  <Text style={styles.textdate}> </Text>
                            </Text>

                        </View>

                        <View>
                            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "auto", marginTop: "5%", }}>
                                Pr??nom : Wael<Text style={styles.textdata2}> </Text>
                            </Text>
                        </View>

                        <View>
                            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "auto", marginTop: "5%", }}>
                                Email: waeldarraji123@email.com <Text style={styles.textdata2}> </Text>
                            </Text>
                        </View>

                        <View>
                            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "auto", marginTop: "5%", }}>
                                Adress: Nabeul<Text style={styles.textdata2}> </Text>
                            </Text>
                        </View>
                        <View>
                            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "auto", marginTop: "5%", }}>
                                Poste: Chef de service <Text style={styles.textdata2}> </Text>
                            </Text>
                        </View>
                    </View>
                </View>
            
            </View>

        )
    }

}




export default ProfileAdmin;

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