import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, TextInput ,Text} from 'react-native';

class Simuler extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          montant:"",
          mois:"",
          taux:"5",
          simulation:"",
            userAcceuil: (this.props.route.params) ? this.props.route.params : "",
            userClient: (this.props.route.params) ? this.props.route.params : "",
            userAdmin: (this.props.route.params) ? this.props.route.params : "",

        };
    }

    componentDidMount() {
      this.handleInputTextChange()
    }

    handleInputTextChange(){
      var self =this
      console.log("////////////////")
      console.log("montant="+self.state.montant)
      console.log("mois="+self.state.mois)
      console.log("taux="+self.state.taux)
      let interet = ((self.state.montant*self.state.taux/100)+self.state.montant)/self.state.mois
     // let montantfinal = self.state.montant+interet
      //let x = montantfinal/self.state.mois;
      this.setState({ simulation: interet })
      console.log("Simulation="+self.state.simulation)

     
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
                    
            <View style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginLeft: 10,
                marginRight: 10,
                marginTop: "2%",
                //flex: 0.5,
                //backgroundColor: "#00ACEE"

            }}>
                <TouchableOpacity>
                </TouchableOpacity>
                <Image
                    style={{
                        marginTop: '2%', marginRight: "17%",
                        width: 250, height: 70
                    }}
                    source={require('../Svg/title.png')} >
                </Image>

            </View>
                    
                </View>

                <View style={styles.body}>
                   
                <Text style={{marginTop: '-40%',fontSize: 20, width: "70%",
                color: '#FAF5F0', textAlign: "center", fontWeight: 'bold'}}>
                Transferer de l'argent
                    
                    </Text>

                    
                   
                    <TextInput style={styles.inputStyle}
                        placeholder='Montant (DT)'
                        autoCapitalize='none'
                        placeholderTextColor="#FAF5F0"
                        onChangeText={(itemValue, itemIndex) => this.setState({ montant: itemValue })}
                    ></TextInput>
                     <TextInput style={styles.inputStyle}
                        placeholder='Duree (Mois)'
                        autoCapitalize='none'
                        placeholderTextColor="#FAF5F0"
                        onChangeText={(itemValue, itemIndex) => this.setState({ mois: itemValue })}
                    ></TextInput>
                    <Text style={styles.inputStyle}
                        placeholder='Taux du crédit (%)'
                        autoCapitalize='none'
                        placeholderTextColor="#FAF5F0"
                        value="5"
                        onChangeText={(itemValue, itemIndex) => this.setState({ taux: itemValue })}
                    ></Text>



                    {(this.state.simulation)===NaN ? (<Text></Text>)
                      :(<Text>   {this.state.simulation}DT </Text>)
                    }
                    
                     
                    
                     <TouchableOpacity style={styles.buttonSign} onPress={this.handleInputTextChange.bind(this)}>
                        <Text style={{
                            marginTop: '0%', fontSize: 18,
                            color: '#FAF5F0', textAlign: 'center'
                        }}>{this.state.busyClick ? "S'il vous plaît, attendez ..." : "Simuler"}</Text>
                    </TouchableOpacity>
                    

                    </View>
              
                   <View style={styles.footer}>
                 
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
        flex: 2,
    },
    body:{
        //backgroundColor:"red",
        flex:4,
        alignItems:"center",
        justifyContent:"center",
        marginTop:"40%"
    },
    footer: {
      //  backgroundColor: "green",
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
 
    inputStyle: {
        borderRadius: 25,
        height: "15%",
        width: '80%',
        fontSize: 18,
        marginTop: '3%',
        //marginLeft: "10%",
        paddingLeft: 30,
        borderWidth: 1,
        color: '#FFFFFF',
        borderColor: '#FAF5F0',
    },
    buttonSign: {
        backgroundColor: "#1066FF",
        marginTop: "3%",
        height: "15%",
        width: "50%",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Simuler;


