import * as React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import FermeSVG from '../Svg/FermeSVG';
//import { useEffect, useState } from 'react';

import Menu from '../Svg/Menu'
import { Flech0 } from '../Svg/TimeTokenIcons'
/* const [ChangedDemandes, setChangedDemandes] = useState(false);
const [ChangedClients, setChangedClients] = useState(false);
const [ChangedComptes, setChangedComptes] = useState(false); */

class CovertisseurDevises extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ChangedDemandes: false,
            ChangedClients: false,
            ChangedComptes: false,
            ChangeTransactions: false

        };
    }

    componentDidMount() {
    }

    showDemandes() {
        if (this.state.ChangedDemandes === false) {
            this.setState({ ChangedDemandes: true });
            this.setState({ ChangedClients: false });
            this.setState({ ChangedComptes: false });
        } else if (this.state.ChangedDemandes === true) {
            this.setState({ ChangedDemandes: false });
        }
    }
    showClients() {
        //alert(this.state.ChangedClients)
        if (this.state.ChangedClients === false) {
            this.setState({ ChangedClients: true });
            this.setState({ ChangedDemandes: false });
            this.setState({ ChangedComptes: false });
        } else if (this.state.ChangedClients === true) {
            this.setState({ ChangedClients: false });
        }
    }
    showComptes() {
        if (this.state.ChangedComptes === false) {
            this.setState({ ChangedComptes: true });
            this.setState({ ChangedDemandes: false });
            this.setState({ ChangedClients: false });
        } else if (this.state.ChangedComptes === true) {
            this.setState({ ChangedComptes: false });
        }
    }
    showTransaction() {

        if (this.state.ChangeTransactions === false) {
            this.setState({ ChangeTransactions: true });
            this.setState({ ChangedComptes: false });
            this.setState({ ChangedDemandes: false });
            this.setState({ ChangedClients: false });
        } else if (this.state.ChangeTransactions === true) {
            this.setState({ ChangeTransactions: false });
        }
    }

    disabled() {
        alert('te')
    }
    dialCall() {
        let numeroSiege = "222222"
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
                    alignItems: 'center',
                    //justifyContent: "space-between",
                    //flexDirection: "row",
                    //marginLeft: 10,
                    //marginRight: 10,
                    marginTop: "2%",
                    flex: 0.5,
                    //backgroundColor: "#00ACEE"

                }}>

                    <Image
                        style={{
                            marginTop: '2%', marginRight: "0%",
                            width: 250, height: 70
                        }}
                        source={require('../Svg/title.png')} >
                    </Image>

                </View>


                <View style={styles.body}>

                    <TouchableOpacity onPress={() => { this.showDemandes() }}
                        style={styles.buttonNext0}>
                        <Text style={{
                            color: "#fff", fontSize: 20, fontWeight: "bold",
                            textAlign: "auto", marginTop: "0%"
                        }}>
                            Effectuer une demande
                    </Text>
                        <FermeSVG></FermeSVG>
                    </TouchableOpacity>
                    {(!this.state.ChangedDemandes) === false && <Text style={{
                        color: "red", fontSize: 16, fontWeight: "bold",
                        textAlign: "auto", marginTop: "2%"
                    }} onPress={() => this.props.navigation.navigate('SignIn')}>
                        authentication obligatoire
                    </Text>
                    }
                    <TouchableOpacity onPress={() => { this.showComptes() }}
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

                    <TouchableOpacity onPress={() => { this.showTransaction() }}
                        style={styles.buttonNext}>
                        <Text style={{
                            color: "#fff", fontSize: 20, fontWeight: "bold",
                            textAlign: "auto", marginTop: "0%"
                        }}>
                            Transactions
                    </Text>
                        <FermeSVG></FermeSVG>
                    </TouchableOpacity>
                    {(!this.state.ChangeTransactions) === false && <Text style={{
                        color: "red", fontSize: 16, fontWeight: "bold",
                        textAlign: "auto", marginTop: "2%"
                    }} onPress={() => this.props.navigation.navigate('SignIn')}>
                        authentication obligatoire
                    </Text>
                    }

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

                    <TouchableOpacity onPress={() => { this.showClients() }}
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
                    {(!this.state.ChangedClients) === false && <TouchableOpacity onPress={() => this.props.navigation.navigate('ContactSiege')}
                        style={styles.select}>
                        <Text style={{
                            color: "#1066FF", fontSize: 16, fontWeight: "bold",
                            textAlign: "auto", marginTop: "0%"
                        }}>
                            Contacter le siège
                    </Text>
                    </TouchableOpacity>
                    }
                    <View style={{ alignItems: "center", marginTop: "10%" }}>
                        <Image
                            style={{
                                marginTop: '0%',
                                width: 80, height: 80
                            }}
                            source={require('../Svg/logo.png')} >
                        </Image>
                        <Text style={{
                            color: "#fff", fontSize: 20, fontWeight: "bold",
                            textAlign: "auto", marginTop: "2%"
                        }} onPress={() => this.props.navigation.navigate('SignIn')}>
                            SIGN IN
                    </Text>
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