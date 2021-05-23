import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import WebView from 'react-native-webview';
import Indicator from './Indicator';

class LocalisationAgences extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userAcceuil: (this.props.route.params) ? this.props.route.params : "",
            userClient: (this.props.route.params) ? this.props.route.params : "",
            userAdmin: (this.props.route.params) ? this.props.route.params : "",
            loading: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: true })
        }, 20000)
    }

    goBack() {
        //alert("im here0")
        if (this.props.route.params.userAcceuil === "acceuil") {
            this.props.navigation.navigate('Acceuil')
            //alert("im here")
        } else if (this.props.route.params.userClient === "client") {
            this.props.navigation.navigate('HomeClient')
            // alert("im here----")
        }
    }

    Indicatir() {
        setTimeout(() => {
            this.setState({ loading: true })
        }, 20000)
        if (this.state.loading === false)
            return <Indicator />
        else {
            return <WebView source={{
                uri: 'https://umap.openstreetmap.fr/fr/map/digipost_614276#13/36.8570/11.0785'
            }} />
        }
    }
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ marginTop: '0%', marginLeft: "5%" }}
                        onPress={() => { this.goBack() }}>
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

                    {this.state.loading === true && <WebView source={{
                        uri: 'https://umap.openstreetmap.fr/fr/map/digipost_614276#13/36.8570/11.0785'
                    }} />}


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


