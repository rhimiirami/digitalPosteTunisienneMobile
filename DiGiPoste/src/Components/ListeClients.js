
import React from 'react';
import {
    Text, StyleSheet, View,
    TouchableOpacity,
    Image,
    ScrollView,
    ActivityIndicator,
    TextInput
} from 'react-native';
import { EditP, SearchIcon, Delete } from '../Svg/TimeTokenIcons'








class ListeClients extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            busy: true,
            filteredDataSource: [
                { "id": 1, "nom": "aymen", "prenom": "darajii" },
                { "id": 2, "nom": "tafwik", "prenom": "tounsi" },
                { "id": 3, "nom": "rami", "prenom": "rhimi" },
                { "id": 4, "nom": "tom", "prenom": "tomi" },
                { "id": 5, "nom": "olfa", "prenom": "sahli" },
                { "id": 6, "nom": "Yoser", "prenom": "meliki" },
                { "id": 7, "nom": "rania", "prenom": "nasri" },
                { "id": 8, "nom": "hamza", "prenom": "hadda" }],
            masterDataSource: [
                { "id": 1, "nom": "aymen", "prenom": "darajii" },
                { "id": 2, "nom": "tafwik", "prenom": "tounsi" },
                { "id": 3, "nom": "rami", "prenom": "rhimi" },
                { "id": 4, "nom": "tom", "prenom": "tomi" },
                { "id": 5, "nom": "olfa", "prenom": "sahli" },
                { "id": 6, "nom": "Yoser", "prenom": "meliki" },
                { "id": 7, "nom": "rania", "prenom": "nasri" },
                { "id": 8, "nom": "hamza", "prenom": "hadda" }],
            search: ''

        };
    }

    componentDidMount() {

    }

    searchFilterFunction = (text) => {
        //console.log(text);
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = this.state.masterDataSource.filter(

                function (item) {
                    //console.log(item)
                    const itemData = item.nom
                        ? item.nom.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            //console.log("newData" + JSON.stringify(newData));
            this.setState({ filteredDataSource: newData, search: text })
            //setFilteredDataSource(newData);
            //setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            //setFilteredDataSource(masterDataSource);
            //setSearch(text);
            this.setState({ filteredDataSource: this.state.masterDataSource, search: text })
        }
    };

    rendergetListClient() {
        if (this.state.filteredDataSource.length == 0) {
            return (
                <View style={{ flexDirection: "row", height: "100%", width: "100%" }}>
                    <ActivityIndicator size="large" color="green" />
                    <Text>Chargement...</Text>
                </View>
            )
        }
        else {
            return (
                this.state.filteredDataSource.map((element, index) => {
                    return (

                        <ScrollView key={index} showsVerticalScrollIndicator={false}>
                            <View style={{
                                width: "100%", marginTop: '0%', marginLeft: "0%",
                                alignItems: "center", height: "100%"
                            }}>
                                <View style={styles.item}>
                                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
                                        onPress={() => this.props.navigation.navigate('ProfileClient')}>
                                        <Image
                                            style={{ marginLeft: "0%", width: 50, height: 45 }}
                                            source={require('../Svg/bPro.png')} >
                                        </Image>

                                        <Text key={index} style={{
                                            color: "#27277A", fontWeight: "bold",
                                            fontSize: 16, textAlign: "center", marginLeft: "5%"
                                        }}>{element.nom} {element.prenom}</Text>
                                    </TouchableOpacity>
                                    <View style={{
                                        justifyContent: "space-evenly", flexDirection: "row",
                                        alignItems: "center"
                                    }}> 


                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('UpdateClient')}>
                                        <EditP></EditP>
                                        </TouchableOpacity>
                                        
                                        <TouchableOpacity onPress={() => { this.delete(index) }}>
                                            <Delete></Delete>
                                        </TouchableOpacity>

                                    </View>



                                </View>
                            </View>
                        </ScrollView>


                    )
                })
            )
        }

    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: "5%" }}>


                        <TouchableOpacity style={{ marginLeft: "3%" }}
                            onPress={() => this.props.navigation.navigate('HomeAdmin')}>
                            <Image
                                style={{
                                    marginTop: '6%', marginRight: "0%",
                                    width: 60, height: 60
                                }}
                                source={require('../Svg/bAcc.png')} >
                            </Image>
                        </TouchableOpacity>


                        <Text style={{ color: "#27277A", fontWeight: "bold", fontSize: 24, textAlign: "center", marginLeft: "10%" }}>Liste des clients</Text>

                    </View>

                </View>




                <View style={styles.body}>
                    <View style={styles.inputStyle}>
                        <View style={{ marginTop: "0%" }}>
                            <SearchIcon></SearchIcon>
                        </View>

                        <TextInput
                            placeholder='Rechercher'
                            autoCapitalize='none'
                            //style={styles.textInputStyle}
                            //style={{ width: "100%", height: "100%", }}
                            onChangeText={(text) => this.searchFilterFunction(text)}
                            value={this.state.search}
                            underlineColorAndroid="transparent"
                        // onChangeText={(search) => this.value(search)}
                        ></TextInput>


                    </View>
                    <View style={{ width: "100%", height: "100%", marginTop: "5%" }}>
                        <ScrollView>
                            {this.rendergetListClient()}
                        </ScrollView>
                    </View>


                </View>


            </View>
        );
    }

    delete(index) {

        if (index === 0) {
            this.setState({
                filteredDataSource: [
                    { "id": 2, "nom": "tafwik", "prenom": "tounsi" },
                    { "id": 3, "nom": "rami", "prenom": "rhimi" },
                    { "id": 4, "nom": "tom", "prenom": "tomi" },
                    { "id": 5, "nom": "olfa", "prenom": "sahli" },
                    { "id": 6, "nom": "Yoser", "prenom": "meliki" },
                    { "id": 7, "nom": "rania", "prenom": "nasri" },
                    { "id": 8, "nom": "hamza", "prenom": "hadda" }],
                masterDataSource: [
                    { "id": 2, "nom": "tafwik", "prenom": "tounsi" },
                    { "id": 3, "nom": "rami", "prenom": "rhimi" },
                    { "id": 4, "nom": "tom", "prenom": "tomi" },
                    { "id": 5, "nom": "olfa", "prenom": "sahli" },
                    { "id": 6, "nom": "Yoser", "prenom": "meliki" },
                    { "id": 7, "nom": "rania", "prenom": "nasri" },
                    { "id": 8, "nom": "hamza", "prenom": "hadda" }],
            })
            //alert("00000" + index)
        }
        if (index === 1) {
            this.setState({
                filteredDataSource: [
                    { "id": 1, "nom": "aymen", "prenom": "darajii" },
                    { "id": 3, "nom": "rami", "prenom": "rhimi" },
                    { "id": 4, "nom": "tom", "prenom": "tomi" },
                    { "id": 5, "nom": "olfa", "prenom": "sahli" },
                    { "id": 6, "nom": "Yoser", "prenom": "meliki" },
                    { "id": 7, "nom": "rania", "prenom": "nasri" },
                    { "id": 8, "nom": "hamza", "prenom": "hadda" }],
                masterDataSource: [
                    { "id": 1, "nom": "aymen", "prenom": "darajii" },
                    { "id": 3, "nom": "rami", "prenom": "rhimi" },
                    { "id": 4, "nom": "tom", "prenom": "tomi" },
                    { "id": 5, "nom": "olfa", "prenom": "sahli" },
                    { "id": 6, "nom": "Yoser", "prenom": "meliki" },
                    { "id": 7, "nom": "rania", "prenom": "nasri" },
                    { "id": 8, "nom": "hamza", "prenom": "hadda" }],
            })
            //alert("00000" + index)
        }
        if (index === 2) {
            this.setState({
                filteredDataSource: [
                    { "id": 1, "nom": "aymen", "prenom": "darajii" },
                    { "id": 2, "nom": "tafwik", "prenom": "tounsi" },

                    { "id": 4, "nom": "tom", "prenom": "tomi" },
                    { "id": 5, "nom": "olfa", "prenom": "sahli" },
                    { "id": 6, "nom": "Yoser", "prenom": "meliki" },
                    { "id": 7, "nom": "rania", "prenom": "nasri" },
                    { "id": 8, "nom": "hamza", "prenom": "hadda" }],
                masterDataSource: [
                    { "id": 1, "nom": "aymen", "prenom": "darajii" },
                    { "id": 2, "nom": "tafwik", "prenom": "tounsi" },

                    { "id": 4, "nom": "tom", "prenom": "tomi" },
                    { "id": 5, "nom": "olfa", "prenom": "sahli" },
                    { "id": 6, "nom": "Yoser", "prenom": "meliki" },
                    { "id": 7, "nom": "rania", "prenom": "nasri" },
                    { "id": 8, "nom": "hamza", "prenom": "hadda" }],
            })
            //alert("00000" + index)
        }
        if (index === 3) {
            this.setState({
                filteredDataSource: [

                    { "id": 1, "nom": "aymen", "prenom": "darajii" },
                    { "id": 2, "nom": "tafwik", "prenom": "tounsi" },
                    { "id": 3, "nom": "rami", "prenom": "rhimi" },

                    { "id": 5, "nom": "olfa", "prenom": "sahli" },
                    { "id": 6, "nom": "Yoser", "prenom": "meliki" },
                    { "id": 7, "nom": "rania", "prenom": "nasri" },
                    { "id": 8, "nom": "hamza", "prenom": "hadda" }],
                masterDataSource: [

                    { "id": 1, "nom": "aymen", "prenom": "darajii" },
                    { "id": 2, "nom": "tafwik", "prenom": "tounsi" },
                    { "id": 3, "nom": "rami", "prenom": "rhimi" },

                    { "id": 5, "nom": "olfa", "prenom": "sahli" },
                    { "id": 6, "nom": "Yoser", "prenom": "meliki" },
                    { "id": 7, "nom": "rania", "prenom": "nasri" },
                    { "id": 8, "nom": "hamza", "prenom": "hadda" }],
            })
            //alert("00000" + index)
        }
        if (index === 4) {
            this.setState({
                filteredDataSource: [
                    { "id": 1, "nom": "aymen", "prenom": "darajii" },
                    { "id": 2, "nom": "tafwik", "prenom": "tounsi" },
                    { "id": 3, "nom": "rami", "prenom": "rhimi" },
                    { "id": 4, "nom": "tom", "prenom": "tomi" },

                    { "id": 6, "nom": "Yoser", "prenom": "meliki" },
                    { "id": 7, "nom": "rania", "prenom": "nasri" },
                    { "id": 8, "nom": "hamza", "prenom": "hadda" }],
                masterDataSource: [
                    { "id": 1, "nom": "aymen", "prenom": "darajii" },
                    { "id": 2, "nom": "tafwik", "prenom": "tounsi" },
                    { "id": 3, "nom": "rami", "prenom": "rhimi" },
                    { "id": 4, "nom": "tom", "prenom": "tomi" },

                    { "id": 6, "nom": "Yoser", "prenom": "meliki" },
                    { "id": 7, "nom": "rania", "prenom": "nasri" },
                    { "id": 8, "nom": "hamza", "prenom": "hadda" }],
            })
            //alert("00000" + index)
        }
        if (index === 5) {
            this.setState({
                filteredDataSource: [
                    { "id": 1, "nom": "aymen", "prenom": "darajii" },
                    { "id": 2, "nom": "tafwik", "prenom": "tounsi" },
                    { "id": 3, "nom": "rami", "prenom": "rhimi" },
                    { "id": 4, "nom": "tom", "prenom": "tomi" },
                    { "id": 5, "nom": "olfa", "prenom": "sahli" },

                    { "id": 7, "nom": "rania", "prenom": "nasri" },
                    { "id": 8, "nom": "hamza", "prenom": "hadda" }],
                masterDataSource: [
                    { "id": 1, "nom": "aymen", "prenom": "darajii" },
                    { "id": 2, "nom": "tafwik", "prenom": "tounsi" },
                    { "id": 3, "nom": "rami", "prenom": "rhimi" },
                    { "id": 4, "nom": "tom", "prenom": "tomi" },
                    { "id": 5, "nom": "olfa", "prenom": "sahli" },

                    { "id": 7, "nom": "rania", "prenom": "nasri" },
                    { "id": 8, "nom": "hamza", "prenom": "hadda" }],
            })
            //alert("00000" + index)
        }
        if (index === 6) {
            this.setState({
                filteredDataSource: [
                    { "id": 1, "nom": "aymen", "prenom": "darajii" },
                    { "id": 2, "nom": "tafwik", "prenom": "tounsi" },
                    { "id": 3, "nom": "rami", "prenom": "rhimi" },
                    { "id": 4, "nom": "tom", "prenom": "tomi" },
                    { "id": 5, "nom": "olfa", "prenom": "sahli" },
                    { "id": 6, "nom": "Yoser", "prenom": "meliki" },

                    { "id": 8, "nom": "hamza", "prenom": "hadda" }],
                masterDataSource: [
                    { "id": 1, "nom": "aymen", "prenom": "darajii" },
                    { "id": 2, "nom": "tafwik", "prenom": "tounsi" },
                    { "id": 3, "nom": "rami", "prenom": "rhimi" },
                    { "id": 4, "nom": "tom", "prenom": "tomi" },
                    { "id": 5, "nom": "olfa", "prenom": "sahli" },
                    { "id": 6, "nom": "Yoser", "prenom": "meliki" },

                    { "id": 8, "nom": "hamza", "prenom": "hadda" }],
            })
            //alert("00000" + index)
        }
        if (index === 7) {
            this.setState({
                filteredDataSource: [
                    { "id": 1, "nom": "aymen", "prenom": "darajii" },
                    { "id": 2, "nom": "tafwik", "prenom": "tounsi" },
                    { "id": 3, "nom": "rami", "prenom": "rhimi" },
                    { "id": 4, "nom": "tom", "prenom": "tomi" },
                    { "id": 5, "nom": "olfa", "prenom": "sahli" },
                    { "id": 6, "nom": "Yoser", "prenom": "meliki" },
                    { "id": 7, "nom": "rania", "prenom": "nasri" },
                ],
                masterDataSource: [
                    { "id": 1, "nom": "aymen", "prenom": "darajii" },
                    { "id": 2, "nom": "tafwik", "prenom": "tounsi" },
                    { "id": 3, "nom": "rami", "prenom": "rhimi" },
                    { "id": 4, "nom": "tom", "prenom": "tomi" },
                    { "id": 5, "nom": "olfa", "prenom": "sahli" },
                    { "id": 6, "nom": "Yoser", "prenom": "meliki" },
                    { "id": 7, "nom": "rania", "prenom": "nasri" },
                    { "id": 8, "nom": "hamza", "prenom": "hadda" }],
            })
            //alert("00000" + index)
        }
        if (index === 8) {
            this.setState({
                filteredDataSource: [],
                masterDataSource: [],
            })
            //alert("00000" + index)
        }
        /* else {
            alert("" + index)
        } */
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAF5F0",
        flex: 1
    },
    header: {
        flex: 0.75,

    },
    body: {
        flex: 4,
        alignItems: "center"

    },
    footer: {
        backgroundColor: "#FAF5F0",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputStyle: {
        borderRadius: 25,
        paddingLeft: "5%",
        backgroundColor: "#FAF5F0",
        fontSize: 16,
        width: "90%",
        marginLeft: "2%",
        marginTop: "3%",
        borderWidth: 1,
        borderColor: "#27277A",
        flexDirection: "row",
        alignItems: "center"
    },
    buttonNext: {
        backgroundColor: "#FAF5F0",
        marginTop: "5%",
        height: "17%",
        width: "60%",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonNext0: {
        backgroundColor: "#27277A",
        marginTop: "3%",
        height: "34%",
        width: "60%",
        borderColor: '#FAF5F0',
        borderWidth: 1,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonSelectedItem0: {
        width: '80%',
        justifyContent: "center",
        alignItems: "flex-start",
        height: '8%',
        backgroundColor: "#FFCCE9",
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: '5%',
        marginLeft: '10%',
        borderRadius: 25,
    },
    item0: {
        width: '80%',
        justifyContent: "center",
        alignItems: "flex-start",
        height: '8%',
        borderWidth: 1,
        borderColor: '#27277A',
        marginTop: '5%',
        marginLeft: '10%',
        borderRadius: 25,
    },
    buttonSelectedItem: {
        width: '100%',
        justifyContent: "center",
        alignItems: "flex-start",
        height: '3%',
        backgroundColor: "#FFCCE9",
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: '5%',
        marginLeft: '10%',
        borderRadius: 25,
    },
    item: {
        flexDirection: "row",
        width: '90%',
        justifyContent: "space-around",
        alignItems: "center",
        height: '70%',
        borderWidth: 1,
        borderColor: '#27277A',
        marginTop: '5%',
        //  marginLeft: '10%',
        borderRadius: 25,
        //backgroundColor: "red",
    },
    serach: {
        width: "100%",
        height: "90%",
        color: "black",
        borderColor: '#27277A',
        borderWidth: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    contentContainer: {
        height: 1500,
        width: 300,
    },

});

export default ListeClients;


