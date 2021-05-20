import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import WebView from 'react-native-webview';

const myScript = `
      document.body.style.backgroundColor = '#27277A';
      
      //document.querySelector("header").remove();
      //document.getElementById("real_estate_loan_amount_simulator-simulator").remove("");
     
      //document.querySelector(".wysiwyg-container").remove();
       document.querySelector("footer").remove();
      true; // note: this is required, or you'll sometimes get silent failures
    `;
class CovertisseurDevises extends React.Component {

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

          
           <WebView
                        
                        source={{ html: '<iframe width="100%" height="100%" src="https://www.xe.com/fr/" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' }}
                        /* source={{
                            uri: 'https://www.xe.com/fr/'
                        }} */
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


export default CovertisseurDevises;


