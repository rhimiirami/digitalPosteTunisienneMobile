import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import WebView from 'react-native-webview';

class LocalisationAgences extends React.Component {

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
                    <TouchableOpacity style={{ marginTop: '0%', marginLeft: "5%" }}
                        onPress={() => { this.props.navigation.navigate('Acceuil') }}>
                        <Image
                            style={{
                                marginTop: '1%', marginRight: "0%",
                                width: 60, height: 60
                            }}
                            source={require('../Svg/b.png')} >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>

                    <WebView source={{
                        uri: 'https://umap.openstreetmap.fr/fr/map/digipost_614276#13/36.8570/11.0785'
                    }}/>
                    

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
        flex: 0,
    }, body: {
        // marginTop: '15%',
        flex: 3,
        //alignItems: "center",
        //justifyContent: "center"
        //backgroundColor: "red"

    },
    footer: {
        //backgroundColor: "red",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },


});


export default LocalisationAgences;


