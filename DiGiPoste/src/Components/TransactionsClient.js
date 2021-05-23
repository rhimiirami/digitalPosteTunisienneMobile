
import React from 'react';
import {
    Text, StyleSheet, View,
    TouchableOpacity,
    Image,
    ScrollView,
    ActivityIndicator,
    TextInput,
    Modal,
    Alert
} from 'react-native';
import { color } from 'react-native-reanimated';
import { EditP, WitnessP, SearchIcon, Delete } from '../Svg/TimeTokenIcons'



class TransactionsClient extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            busy: true,
            listeClients: [
                { "id": 1, "transaction": "0x45458a1sb445e44d5158", "from": "319562879563275127841", "to": "319562879563275127841", "date": "02/05/2022" },
                { "id": 2, "transaction": "0x0547a1sb444e44d56467", "from": "319562879563275127841", "to": "319562879563275127841", "date": "02/05/2022" },
                { "id": 3, "transaction": "0x2568a1sb444e44d56460", "from": "319562879563275127841", "to": "319562879563275127841", "date": "02/05/2022" },
                { "id": 4, "transaction": "0xef48a1sb444e44d5646f", "from": "319562879563275127841", "to": "319562879563275127841", "date": "02/05/2022" },
                { "id": 5, "transaction": "0x08dea1sb444e44d56462", "from": "319562879563275127841", "to": "319562879563275127841", "date": "02/05/2022" },
                { "id": 6, "transaction": "0xef45a1sb444e44d56466", "from": "319562879563275127841", "to": "319562879563275127841", "date": "02/05/2022" },
                { "id": 7, "transaction": "0xdf158a1sb444e44d56469", "from": "319562879563275127841", "to": "319562879563275127841", "date": "02/05/2022" },
                { "id": 8, "transaction": "0xz58f8a1sb444e44d5641", "from": "319562879563275127841", "to": "319562879563275127841", "date": "02/05/2022" },
                { "id": 9, "transaction": "0xfe588a1sb444e44d5640", "from": "319562879563275127841", "to": "319562879563275127841", "date": "02/05/2022" },
                { "id": 10, "transaction": "0xde258a1sb444e44d5643", "from": "319562879563275127841", "to": "319562879563275127841", "date": "02/05/2022" },
            ],
            helpVisiblle: false,
            modalVisible: false,

        };
    }

    componentDidMount() {

    }


    rendergetListClient() {
        if (this.state.listeClients.length == 0) {
            return (
                <View style={{ flexDirection: "row", height: "100%", width: "100%" }}>
                    <ActivityIndicator size="large" color="green" />
                    <Text>Chargement...</Text>
                </View>
            )
        }
        else {
            return (
                this.state.listeClients.map((element, index) => {
                    return (

                        <ScrollView key={index} showsVerticalScrollIndicator={false}>
                            <View style={{
                                width: "100%", marginTop: '0%', marginLeft: "0%",
                                alignItems: "center", height: "100%"
                            }}>
                                <View style={styles.item}>
                                    <View style={{
                                        flexDirection: "row", alignItems: "center",
                                        justifyContent: "space-between"
                                    }}>
                                        <Image
                                            style={{ marginLeft: "0%", width: 50, height: 45 }}
                                            source={require('../Svg/bPro.png')} >
                                        </Image>

                                        <Text key={index} style={{
                                            color: "#27277A", fontWeight: "bold",
                                            fontSize: 12, textAlign: "center", marginLeft: "5%"
                                        }}>{element.transaction}</Text>
                                    </View>
                                    <TouchableOpacity style={{ alignItems: "center" }}
                                        onPress={() => this.setModalVisible(true)}
                                    >

                                        <WitnessP></WitnessP>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </ScrollView>


                    )
                })
            )
        }

    }
    Modal() {
        const { modalVisible } = this.state;
        return (

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Details Transactions</Text>
                            <Text style={styles.text}>Transaction Num: <Text style={styles.text}>
                                0x45458a1sb444e44d5646</Text></Text>

                            <Text style={styles.text}>From: <Text style={styles.text}>
                                319562879563275127841</Text></Text>



                            <Text style={styles.text}>To: <Text style={styles.text}>
                                789562879563287512498</Text></Text>


                            <Text style={styles.text}>Date: <Text style={styles.text}>
                                01/02/2021</Text></Text>

                            <TouchableOpacity
                                style={styles.buttonOK}
                                onPress={() => { this._ModelDis() }}
                            >
                                <Text style={styles.textStyle}>OK</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </Modal>
            </View>


        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: "5%" }}>


                        <TouchableOpacity style={{ marginLeft: "3%" }}
                            onPress={() => this.props.navigation.navigate('HomeClient')}>
                            <Image
                                style={{
                                    marginTop: '6%', marginRight: "0%",
                                    width: 60, height: 60
                                }}
                                source={require('../Svg/bAcc.png')} >
                            </Image>
                        </TouchableOpacity>


                        <Text style={{
                            color: "#27277A", fontWeight: "bold",
                            fontSize: 24, textAlign: "center", marginLeft: "5%"
                        }}>Liste des Transactions</Text>

                    </View>

                </View>

                <View style={styles.body}>
                    <ScrollView style={{}}>
                        <View style={styles.inputStyle}>
                            <View style={{ marginTop: "0%" }}>
                                <SearchIcon></SearchIcon>
                            </View>

                            <TextInput
                                placeholder='Rechercher'
                                autoCapitalize='none'
                            // onChangeText={(search) => this.value(search)}
                            ></TextInput>


                        </View>
                        <View style={{ width: "100%", height: "100%", marginTop: "5%" }}>
                            <ScrollView>
                                {this.rendergetListClient()}
                            </ScrollView>
                        </View>

                        {this.Modal()}
                    </ScrollView>
                </View>


            </View>
        );
    }

    _ModelDis() {
        const { modalVisible } = this.state;
        this.setModalVisible(!modalVisible)
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
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
        height: "5%",
        marginLeft: "5%",
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
    centeredView: {
        //flex: 1,
        //justifyContent: "center",
        //alignItems: "center",

        marginTop: "60%"
    },
    modalView: {
        margin: 20,
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 20,
        padding: 35,
        //alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#27277A",
        borderRadius: 15,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "#27277A",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: '#27277A',
        fontSize: 20,
    },
    buttonOK: {
        //backgroundColor: "#3D4A55",
        marginTop: "10%",
        height: "20%",
        borderColor: '#27277A',
        borderWidth: 1,
        //width: "100%",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        marginTop: "5%",
        color: '#27277A',
        fontSize: 14,
    }
});

export default TransactionsClient;


/* Modal() {
    const { modalVisible } = this.state;
    return (
        this.state.listeClients.map((element, index) => {
            return (
                <View key={index} style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View key={index} style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Details Transactions</Text>
                                <Text style={styles.text}>Transaction Num: <Text style={styles.text}>
                                    {element.transaction} </Text></Text>

                                <Text style={styles.text}>From: <Text style={styles.text}>
                                    {element.from}</Text></Text>
                                <Text style={styles.text}>To: <Text style={styles.text}>
                                    {element.to}</Text></Text>


                                <Text style={styles.text}>Date: <Text style={styles.text}>
                                    {element.date}</Text></Text>

                                <TouchableOpacity
                                    style={styles.buttonOK}
                                    onPress={() => { this._ModelDis() }}
                                >
                                    <Text style={styles.textStyle}>OK</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </Modal>
                </View>
            );
        }
        )
    )
} */