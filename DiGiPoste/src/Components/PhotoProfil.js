import React, { Component } from "react";

import { StyleSheet, View, Text, Image, TouchableOpacity, AsyncStorage } from "react-native";



class PhotoProfil extends Component {


    constructor(props) {
        super(props);
        this.state = {
            photoUser: '',
            idUser: ''
        };
    }

    componentDidMount() {

        var self = this;

        /*  AsyncStorage.getItem("userId", (err, id) => {
             //alert(id)
             self.getInformationsById(id);
         }); */


    }

    getInformationsById = (userId) => {

        //alert(userId)
        var self = this;

        fetch(self.urlBackOffice + 'user/getUserById?id=' + userId, {
            method: "GET"
        })
            .then(function (response) {
                //console.log(JSON.stringify(response))
                if (response.ok) {

                    response.json().then(function (json) {
                        //alert(JSON.stringify(json))
                        //console.log("photoUser" + json.photo)
                        //console.log("date" + json.lastname)
                        self.setState({
                            photoUser: json.photo
                        })

                    }).catch(err => alert(err))

                } else {

                    console.log('Network request for backoffice failed with response ' + response.status);


                }
            }).catch(err => alert(err));

    }

    render() {
        var { photoUser } = this.state;
        return (

            <View style={{ alignItems: "center", marginTop: "5%", borderRadius: 15 }}>
                <View style={{}}>
                    <Image
                        source={require('../Svg/profil.png')}
                        //source={{ uri: `data:image/jpeg;base64,${photoUser}` }}
                        resizeMode="cover"
                        style={styles.image}
                    ></Image>

                </View>
            </View>



        )
    }
}


const styles = StyleSheet.create({

    image: {
        width: 150,
        height: 150,
        backgroundColor: "#27277A",
        borderRadius: 500,
        //justifyContent:"center"
    },

});
export default PhotoProfil;
