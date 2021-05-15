import * as React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
//import { useEffect, useState } from 'react';

import Menu from '../Svg/Menu'
import {  Flech0} from '../Svg/TimeTokenIcons'
/* const [ChangedDemandes, setChangedDemandes] = useState(false);
const [ChangedClients, setChangedClients] = useState(false);
const [ChangedComptes, setChangedComptes] = useState(false); */

class CovertisseurDevises extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ChangedDemandes: false,
            ChangedClients:false,
            ChangedComptes:false,

        };
    }

    componentDidMount() {
    }

     showDemandes() {
        if (!this.state.ChangedDemandes) {
            this.setState({ChangedDemandes:true});
            this.setState({ChangedClients:false});
            this.setState({ChangedComptes:false});
        } else if (!this.state.ChangedDemandes) {
            this.setState({ChangedDemandes:false});
        }
    }
     showClients() {
        if (!this.state.ChangedClients) {
            this.setState({ChangedClients:true});
            this.setState({ChangedDemandes:false});
            this.setState({ChangedComptes:false});
        } else if (!this.state.ChangedClients) {
            this.setState({ChangedClients:false});
        }
    }
     showComptes() {
        if (!this.state.ChangedComptes) {
            this.setState({ChangedComptes:true});
            this.setState({ChangedDemandes:false});
            this.setState({ChangedClients:false});
        } else if (!this.state.ChangedComptes) {
            this.setState({ChangedComptes:false});
        }
    }
     disabled() {
        alert('te')
    }
     dialCall () {
        let numeroSiege="222222"
        let phoneNumber = '';
        if (Platform.OS === 'android') {
            phoneNumber = `tel:${numeroSiege}`;
        }
        else {
            phoneNumber = `telprompt:${numeroSiege}`;
        }
        Linking.openURL(phoneNumber);
    };
    render() {
    return (
        <View style={styles.container}>

           <View style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginLeft: 10,
                marginRight: 10,
                marginTop: "2%",
                flex: 0.5,
                //backgroundColor: "#00ACEE"

            }}>
                
                <Image
                    style={{
                        marginTop: '2%', marginRight: "17%",
                        width: 250, height: 70
                    }}
                    source={require('../Svg/title.png')} >
                </Image>

            </View>


            <View style={styles.body}>

                <TouchableOpacity onPress={this.showDemandes}
                    style={styles.buttonNext0}>
                    <Text style={{
                        color: "#fff", fontSize: 20, fontWeight: "bold",
                        textAlign: "auto", marginTop: "0%"
                    }}>
                        Effectuer une demande
                    </Text>
                    <Flech0></Flech0>
                </TouchableOpacity>
                {(!this.state.ChangedDemandes) === false && <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('DemandeCarteCredit')} style={styles.select}>
                    <Text style={{
                        color: "#1066FF", fontSize: 16, fontWeight: "bold",
                        textAlign: "auto", marginTop: "0%"
                    }}>
                        Demander une carte de crédit
                    </Text>
                </TouchableOpacity>
                }
                {(!this.state.ChangedDemandes) === false && <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('DemandeCarnetCheque')} style={styles.select}>
                    <Text style={{
                        color: "#1066FF", fontSize: 16, fontWeight: "bold",
                        textAlign: "auto", marginTop: "0%"
                    }}>
                        Demander un carnet de chèque
                    </Text>

                </TouchableOpacity>
                }
                
                 <TouchableOpacity onPress={this.showComptes}
                    style={styles.buttonNext}>
                    <Text style={{
                        color: "#fff", fontSize: 20, fontWeight: "bold",
                        textAlign: "auto", marginTop: "0%"
                    }}>
                        Devises
                    </Text>
                    <Flech0></Flech0>
                </TouchableOpacity>
                {(!this.state.ChangedComptes) === false && <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('CovertisseurDevises')} style={styles.select}>
                    <Text style={{
                        color: "#1066FF", fontSize: 16, fontWeight: "bold",
                        textAlign: "auto", marginTop: "0%"
                    }}>
                        Convertisseur
                    </Text>
                </TouchableOpacity>
                }
                {(!this.state.ChangedComptes) === false && <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('CovertisseurDevises')} style={styles.select}>
                    <Text style={{
                        color: "#1066FF", fontSize: 16, fontWeight: "bold",
                        textAlign: "auto", marginTop: "0%"
                    }}>
                        Graph
                    </Text>
                </TouchableOpacity>
                } 

                <TouchableOpacity 
                    style={styles.buttonNext}>
                    <Text style={{
                        color: "#fff", fontSize: 20, fontWeight: "bold",
                        textAlign: "auto", marginTop: "0%"
                    }}>
                        Transactions
                    </Text>
                    <Flech0></Flech0>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonNext}>
                    <Text style={{
                        color: "#fff", fontSize: 20, fontWeight: "bold",
                        textAlign: "auto", marginTop: "0%"
                    }}>
                        Simuler un crédit
                    </Text>
                    <Flech0></Flech0>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.showClients}
                    style={styles.buttonNext}>
                    <Text style={{
                        color: "#fff", fontSize: 20, fontWeight: "bold",
                        textAlign: "auto", marginTop: "0%"
                    }}>
                        Contacter nous..
                    </Text>
                    <Flech0></Flech0>
                </TouchableOpacity>
                {(!this.state.ChangedClients) === false && <TouchableOpacity onPress={this.dialCall}
                    style={styles.select}>
                    <Text style={{
                        color: "#1066FF", fontSize: 16, fontWeight: "bold",
                        textAlign: "auto", marginTop: "0%"
                    }}>
                        Contacter l'Administrateur
                    </Text>
                </TouchableOpacity>
                }
                {(!this.state.ChangedClients) === false && <TouchableOpacity  onPress={() => this.props.navigation.navigate('ContactSiege')}
                     style={styles.select}>
                    <Text style={{
                        color: "#1066FF", fontSize: 16, fontWeight: "bold",
                        textAlign: "auto", marginTop: "0%"
                    }}>
                        Contacter le siège
                    </Text>
                </TouchableOpacity>
                }
                <View style={{ alignItems: "center" ,marginTop:"15%"}}>
                <Image
                    style={{
                        marginTop: '0%',
                        width: 80, height: 80
                    }}
                    source={require('../Svg/logo.png')} >
                </Image>
            </View>

            </View>
            
 

        </View>
    );
                }
}



const styles = StyleSheet.create({
    menu: {
        //backgroundColor: "red",
        marginTop: "5%",
        marginLeft: "3%"
    },
    container: {
        flex: 1,
        backgroundColor: "#27277A",
    },
    header: {
        //backgroundColor: "red",
        flex: 0.75
    },
    body: {
       // marginTop: '15%',
        flex: 3,
        alignItems: "center",
        //justifyContent: "center"
        //backgroundColor: "red"

    },
    buttonNext0: {
        backgroundColor: "#1066FF",
        //marginTop: "8%",
        height: "10%",
        width: "80%",
        //borderColor: '#fff',
        //borderWidth: 1,
        //width: "100%",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    buttonNext: {
        backgroundColor: "#1066FF",
        marginTop: "8%",
        height: "10%",
        width: "80%",
        //borderColor: '#fff',
        //borderWidth: 1,
        //width: "100%",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    select: {
        backgroundColor: "#FFD99C",
        marginTop: "4%",
        height: "10%",
        width: "80%",
        //borderColor: '#fff',
        //borderWidth: 1,
        //width: "100%",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

});
export default CovertisseurDevises;