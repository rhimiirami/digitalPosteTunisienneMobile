import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import WebView from 'react-native-webview';
import FlechBackSVG from '../Svg/FlechBackSVG';

const myScript = `
      document.body.style.backgroundColor = '#27277A';
      
      //document.querySelector('.VYPuyc.vmi1sd').remove();
      //document.querySelector('.OB3zUb.a1l33d').remove();
      document.querySelector(".heading-text").remove();
      document.querySelector(".header-banner").remove();
      document.querySelector("header").remove();
      document.getElementById("real_estate_loan_amount_simulator-simulator").remove("");
      document.getElementById("real_estate_loan_payback_duration_simulator-simulator").remove("");
      document.querySelector(".content-footer-container").remove();
      document.querySelector(".action-banner").remove();
      document.querySelector(".wysiwyg-container").remove();
      document.querySelector("footer").remove();
      true; // note: this is required, or you'll sometimes get silent failures
    `;
const injectedJavaScript = `const meta = document.createElement('meta'); 
    meta.setAttribute('content', 'width=10, initial-scale=0.5, maximum-scale=0.5, user-scalable=0');
     meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `
class Simuler extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userAcceuil: (this.props.route.params) ? this.props.route.params : "",
            userClient: (this.props.route.params) ? this.props.route.params : "",
            userAdmin: (this.props.route.params) ? this.props.route.params : "",

        };
    }

    componentDidMount() {

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
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ marginTop: '0%', marginLeft: "5%" }}
                        onPress={() => { this.goBack() }}>
                        <Image
                            style={{
                                marginTop: '6%', marginRight: "0%",
                                width: 60, height: 60
                            }}
                            source={require('../Svg/b.png')} >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    {/* <FlechBackSVG></FlechBackSVG> */}
                    <WebView source={{
                        uri: 'https://www.lacentraledefinancement.fr/pret-credit-immobilier/les-simulateurs-de-prets-et-de-credit-immobilier/simulateur-pret-immobilier/'
                    }}
                        scalesPageToFit={false}
                        //useWebKit={true}
                        injectedJavaScript={myScript}
                    />
                    {/* <WebView
                        //source={{ html: '<iframe width="100%" height="100%" src="https://adssettings.google.com/authenticated" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' }}
                        source={{
                            uri: 'https://adssettings.google.com/authenticated'
                        }}
                        injectedJavaScript={myScript}
                        useWebKit={true}
                    /> */}

                </View>
                {/* <View style={styles.footer}>


                </View> */}
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

export default Simuler;



