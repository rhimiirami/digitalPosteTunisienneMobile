import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import PhotoProfil from './PhotoProfil';


class modifProfilClient extends Component {

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
                                this.props.navigation.navigate('ProfileClient')
                            }}
                        >
                            <Image
                                style={{
                                    marginTop: '0%', marginRight: "0%",
                                    width: 60, height: 60
                                }}
                                source={require('../Svg/b.png')} >
                            </Image>
                        </TouchableOpacity>
                        {/*    <PhotoProfil></PhotoProfil> */}
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={{ width: "100%", marginLeft: "20%",padding:"5%",marginTop:"-5%"}}>

                        <View style={{ flexDirection: "column", width: "80%" }}>
                            <View>
                            <Text style={{ color: "#FFFFFF", fontSize: 22}}>Nom</Text>
                            </View>
                           <View style={{marginTop:"3%"}}>
                           <TextInput style={styles.inputStyle}
                                value='Trabelsi'
                            ></TextInput>
                           </View>
                            
                        </View>
                        <View style={{ flexDirection: "column", width: "80%" ,marginTop:"5%" }}>
                            <View>
                            <Text style={{ color: "#FFFFFF", fontSize: 22}}>Prénom</Text>
                            </View>
                          <View>
                          <TextInput style={styles.inputStyle}
                                value='Aymen'
                            ></TextInput>
                          </View>
                            
                        </View>
                        <View style={{ flexDirection: "column", width: "80%",marginTop:"5%" }}>
                            <View>
                            <Text style={{ color: "#FFFFFF", fontSize: 22 }}>Email</Text>
                            </View>
                            <View>
                            <TextInput
                                style={styles.inputStyle}
                                value='trabelsiaymen@email.com'
                            ></TextInput>
                            </View>
                           
                            
                        </View>
                        <View style={{ flexDirection: "column", width: "80%" ,marginTop:"5%"}}>
                            <View>
                            <Text style={{ color: "#FFFFFF", fontSize: 22}}>Adress</Text>
                            </View>
                            <View>
                            <TextInput style={styles.inputStyle}
                                value='Tunis'
                            ></TextInput>
                            </View>
                           
                            
                        </View>
                        <View style={{ flexDirection: "column", width: "80%" ,marginTop:"5%"}}>
                            <View>
                            <Text style={{ color: "#FFFFFF", fontSize: 22 }}>Poste</Text>
                            </View>
                            <View>
                            <TextInput style={styles.inputStyle}
                                value='utilisateur'
                            ></TextInput>
                            </View>
                            
                           
                        </View>




                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.buttonNext}
                        onPress={() => this.props.navigation.navigate('HomeClient')}
                    //onPress={() => {this.props.navigation.navigate('TwoRun')}}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                color: '#FFFFFF', textAlign: "center"
                            }}
                        >Enregistrer</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }

}




export default modifProfilClient;

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
        flex: 5,
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
    inputStyle: {
        borderRadius: 25,
        //  height: "10%",
        width: '100%',
        fontSize: 18,
         marginTop: '2%',
        //  marginLeft: "10%",
        paddingLeft: 30,
        borderWidth: 1,
        color: '#FAF5F0',
        borderColor: '#FAF5F0',
    },
});

//export default Profile;