import React, { Component } from 'react';
import { View, StyleSheet, Text, AsyncStorage } from 'react-native';


class Profile extends Component {

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

    getInformationsById = (userId) => {

        //alert(userId)
        var self = this;

        fetch(self.baseUrl + 'user/getuserinformation?id=' + userId, {
            method: "GET"
        })
            .then(function (response) {
                //console.log(response)
                if (response.ok) {
                    response.json().then(function (json) {
                        //console.log(JSON.stringify(json))

                        //alert("TEST " + json[0].numberOfClaims)
                        self.setState({
                            listInformations: json
                            /* photo: json[0].photo, firstname: json[0].firstname,
                            lastname: json[0].lastname, birth_date: json[0].DateOfBirth, Location: json[0].location,
                            Alltimeearned: json[0].AllTimeEarned, numberclaims: json[0].numberOfClaims */
                        })
                    })

                } else {
                    console.log('with response ' + response.status);
                }
            })
            .catch(error => { console.log("something went wrong!" + error + response) })


    }




    render() {
        // var {photo} = this.state;
        return (

            <View style={{}}>

                <Text style={{ fontSize: 24, fontWeight: "700", color: "#fff", marginTop: "1%", textAlign: "center" }}> </Text>
                <View >

                    <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "auto", marginTop: "4%" }}>
                        Nom : <Text style={styles.textdate}> </Text>
                    </Text>

                </View>

                <View>
                    <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "auto", marginTop: "3%", }}>
                        Prénom :<Text style={styles.textdata2}> </Text>
                    </Text>
                </View>

                <View>
                    <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "auto", marginTop: "3%", }}>
                        Email :<Text style={styles.textdata2}> </Text>
                    </Text>
                </View>

                <View>
                    <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "auto", marginTop: "3%", }}>
                        Adress:<Text style={styles.textdata2}> </Text>
                    </Text>
                </View>

            </View>

        )
    }

}




export default Profile;

const styles = StyleSheet.create({
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
    }


});

//export default Profile;