import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import WebView from 'react-native-webview';
const scalesPageToFit = Platform.OS === 'android';
const myScript = `
      document.body.style.backgroundColor = 'white';
      document.querySelector(".tribal-fusion-ad__AdWrapper-sc-7nznaa-0.gKugcA.advertSlot").remove();
      document.querySelector("header").remove();
      document.querySelector(".tab-box__TabRow-sc-28io75-1.bCvmkT").remove();
      document.getElementById("tfasyncid_ad_4ab31180-b5f0-11eb-b989-9797d0f7bf0e").remove("");
      document.querySelector(".fluid-container__BaseFluidContainer-qoidzu-0.gHjEXY").remove(".large-container-sc-1j708v7-0.fsQASC");
      document.querySelector(".large-container-sc-1j708v7-0.fsQASC").remove();
      document.querySelector(".fluid-container__BaseFluidContainer-qoidzu-0.Czysz").remove();
      document.querySelector("footer").remove();
    
      true; // note: this is required, or you'll sometimes get silent failures
    `;

class Graph extends React.Component {

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
        alert("userClient==>" + this.props.route.params.userClient + "=========>userAcceuil==>" + this.props.route.params.userAcceuil + "=========>userAcceuil==>" + this.props.route.params.userAcceuil)
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


                    <WebView   
                //    source={{ html: '<iframe width="100%" height="100%" src="https://www.xe.com/fr/currencycharts/" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' }}
                        //scalesPageToFit={false}
                        source={{uri:'https://www.xe.com/fr/currencycharts/'}}
                        scalesPageToFit={scalesPageToFit}
                        bounces={false}
                        scrollEnabled={true}

                    //useWebKit={true}
                    //injectedJavaScript={myScript}
                    />

                    {/* <WebView source={{
                        uri: 'https://www.xe.com/fr/currencycharts/?from=TND&to=EUR'
                    }}
                        scalesPageToFit={false}
                        bounces={false}
                        scrollEnabled={false}

                    //useWebKit={true}
                    //injectedJavaScript={myScript}
                    /> */}
                    {/* <WebView
                        //source={{ html: '<iframe width="100%" height="100%" src="https://adssettings.google.com/authenticated" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' }}
                        source={{
                            uri: 'https://adssettings.google.com/authenticated'
                        }}
                        injectedJavaScript={myScript}
                        useWebKit={true}
                    /> */}

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

export default Graph;


