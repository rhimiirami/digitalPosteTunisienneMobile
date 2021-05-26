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


    render() {
        var { photoUser } = this.state;
        return (

            <View style={{ alignItems: "center", marginTop: "5%", borderRadius: 15 }}>
                <View style={{}}>
                    <Image
                        source={require('../Svg/profilclients.jpg')}
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
        //backgroundColor: "#27277A",
        borderRadius: 500,
        //justifyContent:"center"
    },

});
export default PhotoProfil;
