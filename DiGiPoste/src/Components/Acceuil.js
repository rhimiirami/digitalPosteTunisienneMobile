import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import FermeSVG from '../Svg/FermeSVG';
import { Flech0 } from '../Svg/TimeTokenIcons'


class CovertisseurDevises extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ChangedDemandes: false,
            ChangedClients: false,
            ChangedComptes: false,
            ChangeTransactions: false,
            ChangeTransfert:false

        };
    }

    componentDidMount() {
    }

    showDemandes() {
        if (this.state.ChangedDemandes === false) {
            this.setState({ ChangedDemandes: true });
            this.setState({ ChangedClients: false });
            this.setState({ ChangeTransfert: false });
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
            this.setState({ ChangeTransfert: false });
            this.setState({ ChangedComptes: false });
        } else if (this.state.ChangedClients === true) {
            this.setState({ ChangedClients: false });
        }
    }
    showComptes() {
        if (this.state.ChangedComptes === false) {
            this.setState({ ChangedComptes: true });
            this.setState({ ChangedDemandes: false });
            this.setState({ ChangeTransfert: false });
            this.setState({ ChangedClients: false });
        } else if (this.state.ChangedComptes === true) {
            this.setState({ ChangedComptes: false });
        }
    }
    showTransaction() {

        if (this.state.ChangeTransactions === false) {
            this.setState({ ChangeTransactions: true });
            this.setState({ ChangedComptes: false });
            this.setState({ ChangeTransfert: false });
            this.setState({ ChangedDemandes: false });
            this.setState({ ChangedClients: false });
        } else if (this.state.ChangeTransactions === true) {
            this.setState({ ChangeTransactions: false });
        }
    }

    showTransfert() {

        if (this.state.ChangeTransfert === false) {
            this.setState({ ChangeTransfert: true });
            this.setState({ ChangeTransactions: false });
            this.setState({ ChangedComptes: false });
            this.setState({ ChangedDemandes: false });
            this.setState({ ChangedClients: false });
        } else if (this.state.ChangeTransfert === true) {
            this.setState({ ChangeTransfert: false });
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

                <View style={styles.header}>

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
                            color: "#fff", fontSize: 15, fontWeight: "bold",
                            textAlign: "auto", marginTop: "0%"
                        }}>
                            Effectuer une demande
                    </Text>
                        <FermeSVG></FermeSVG>
                    </TouchableOpacity>
                    {(!this.state.ChangedDemandes) === false && <Text style={{
                        color: "red", fontSize: 15, fontWeight: "bold",
                        textAlign: "auto", marginTop: "2%"
                    }} onPress={() => this.props.navigation.navigate('SignIn')}>
                        authentication obligatoire
                    </Text>
                    }




                    <TouchableOpacity onPress={() => { this.showComptes() }}
                        style={styles.buttonNext}>
                        <Text style={{
                            color: "#fff", fontSize: 15, fontWeight: "bold",
                            textAlign: "auto", marginRight:"40%"
                        }}>
                            Devises
                    </Text>
                        <Flech0></Flech0>
                    </TouchableOpacity>



                    {(!this.state.ChangedComptes) === false && <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('CovertisseurDevises')} style={styles.select}>
                        <Text style={{
                            color: "#1066FF", fontSize: 15, fontWeight: "bold",
                            textAlign: "auto", marginTop: "0%"
                        }}>
                            Convertisseur
                    </Text>
                    </TouchableOpacity>
                    }
                    {(!this.state.ChangedComptes) === false && <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Graph')} style={styles.select}>
                        <Text style={{
                            color: "#1066FF", fontSize: 15, fontWeight: "bold",
                            textAlign: "auto", marginTop: "0%"
                        }}>
                            Graph
                    </Text>
                    </TouchableOpacity>
                    }




                    <TouchableOpacity onPress={() => { this.showTransfert() }}
                        style={styles.buttonNext}>
                        <Text style={{
                            color: "#fff", fontSize: 15, fontWeight: "bold",
                            textAlign: "auto", marginRight:"13%"
                        }}>
                            Transferer de l'argent
                    </Text>
                        <FermeSVG></FermeSVG>
                    </TouchableOpacity>
                    {(!this.state.ChangeTransfert) === false && <Text style={{
                        color: "red", fontSize: 15, fontWeight: "bold",
                        textAlign: "auto", marginTop: "2%"
                    }} onPress={() => this.props.navigation.navigate('SignIn')}>
                        authentication obligatoire
                    </Text>
                    }





                        <TouchableOpacity onPress={() => { this.showTransaction() }}
                        style={styles.buttonNext}>
                        <Text style={{
                            color: "#fff", fontSize: 15, fontWeight: "bold",
                            textAlign: "auto", marginRight:"25%"
                        }}>
                            Transactions
                    </Text>
                        <FermeSVG></FermeSVG>
                    </TouchableOpacity>
                    {(!this.state.ChangeTransactions) === false && <Text style={{
                        color: "red", fontSize: 15, fontWeight: "bold",
                        textAlign: "auto", marginTop: "2%"
                    }} onPress={() => this.props.navigation.navigate('SignIn')}>
                        authentication obligatoire
                    </Text>
                    }



                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Simuler')}
                        style={styles.buttonNext}>
                        <Text style={{
                            color: "#fff", fontSize: 15, fontWeight: "bold",
                            textAlign: "auto", marginRight:"20%"
                        }}>
                            Simuler un crédit
                    </Text>
                        <Flech0></Flech0>
                    </TouchableOpacity>



                    <TouchableOpacity onPress={() => this.props.navigation.navigate('LocalisationAgences')}
                        style={styles.buttonNext}>
                        <Text style={{
                            color: "#fff", fontSize: 15, fontWeight: "bold",
                            textAlign: "auto", marginRight:"20%"
                        }}>
                             Trouver Agence
                    </Text>
                        <Flech0></Flech0>
                    </TouchableOpacity>



                    <TouchableOpacity onPress={() => { this.showClients() }}
                        style={styles.buttonNext}>
                        <Text style={{
                            color: "#fff", fontSize: 15, fontWeight: "bold",
                            textAlign: "auto", marginRight:"20%"
                        }}>
                            Contacter nous..
                    </Text>
                        <Flech0></Flech0>
                    </TouchableOpacity>
                    {(!this.state.ChangedClients) === false && <TouchableOpacity onPress={this.dialCall}
                        style={styles.select}>
                        <Text style={{
                            color: "#1066FF", fontSize: 15, fontWeight: "bold",
                            textAlign: "auto", marginTop: "0%"
                        }}>
                            Contacter l'Administrateur
                    </Text>
                    </TouchableOpacity>
                    }
                    {(!this.state.ChangedClients) === false && <TouchableOpacity onPress={() => this.props.navigation.navigate('ContactSiege')}
                        style={styles.select}>
                        <Text style={{
                            color: "#1066FF", fontSize: 15, fontWeight: "bold",
                            textAlign: "auto", marginTop: "0%"
                        }}>
                            Contacter le siège
                    </Text>
                    </TouchableOpacity>
                    }
                    <View style={{ alignItems: "center", marginTop: "5%" }}>
                        <Image
                            style={{
                                marginTop: '0%',
                                width: 80, height: 80
                            }}
                            source={require('../Svg/logo.png')} >
                        </Image>
                        <Text style={{
                            color: "#fff", fontSize: 18, fontWeight: "bold",
                            textAlign: "auto", marginTop: "1%"
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
        alignItems: 'center',
        marginTop: "2%",
        flex: 0.5,
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
        height: "8%",
        width: "70%",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    buttonNext: {
        backgroundColor: "#1066FF",
        marginTop: "6%",
        height: "8%",
        width: "70%",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    select: {
        backgroundColor: "#FFD99C",
        marginTop: "4%",
        height: "8%",
        width: "70%",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

});
export default CovertisseurDevises;