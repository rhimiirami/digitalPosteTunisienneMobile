import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, TextInput ,Text} from 'react-native';

class TransfertArgent extends React.Component {

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
                        onPress={() => { this.props.navigation.navigate('HomeClient') }}>
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
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menu} >
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
                        placeholder='De'
                        autoCapitalize='none'
                        placeholderTextColor="#FAF5F0"
                        secureTextEntry
                        onChangeText={(text) => this.setState({ password: text })}
                    ></TextInput>
                     <TextInput style={styles.inputStyle}
                        placeholder='A'
                        autoCapitalize='none'
                        placeholderTextColor="#FAF5F0"
                        secureTextEntry
                        onChangeText={(text) => this.setState({ password: text })}
                    ></TextInput>
                     <TextInput style={styles.inputStyle}
                        placeholder='carte bancaire'
                        autoCapitalize='none'
                        placeholderTextColor="#FAF5F0"
                        secureTextEntry
                        onChangeText={(text) => this.setState({ password: text })}
                    ></TextInput>
                    <TextInput style={styles.inputStyle}
                        placeholder='CVC'
                        autoCapitalize='none'
                        placeholderTextColor="#FAF5F0"
                        secureTextEntry
                        onChangeText={(text) => this.setState({ password: text })}
                    ></TextInput>
                    <TextInput style={styles.inputStyle}
                        placeholder='Montant'
                        autoCapitalize='none'
                        placeholderTextColor="#FAF5F0"
                        secureTextEntry
                        onChangeText={(text) => this.setState({ password: text })}
                    ></TextInput>
                    

                    </View>
              
                   <View style={styles.footer}>
                   <TouchableOpacity style={styles.buttonSign}
                        onPress={() => {
                            this.props.navigation.navigate('TransactionsClient')
                        }}
                    >
                        <Text style={{
                            marginTop: '0%', fontSize: 18,
                            color: '#FAF5F0', textAlign: 'center'
                        }}>{this.state.busyClick ? "S'il vous plaît, attendez ..." : "Transferer"}</Text>
                    </TouchableOpacity>
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
        color: '#FAF5F0',
        borderColor: '#FAF5F0',
    },
    buttonSign: {
        backgroundColor: "#1066FF",
        marginTop: "3%",
        height: "30%",
        width: "80%",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default TransfertArgent;


