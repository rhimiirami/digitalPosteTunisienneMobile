import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, TextInput,Text, Picker} from 'react-native';

class DemandeCarteCredit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reason: "",
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
                   
                <Text style={{marginTop: '-10%',fontSize: 20, width: "70%",
                color: '#FAF5F0', textAlign: "center", fontWeight: 'bold'}}>
                Demander une carte de crédit
                    
                    </Text>

                    

             <View style={styles.inputStyle}>
             <Picker 
                                    selectedValue={this.state.reason}
                                    style={{ width: "80%", color: "#fff", marginLeft: "0%" }}
                                    //style={styles.inputStyle}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ reason: itemValue })}>
                        
                                    <Picker.Item style={{color:"red"}} label="choisir votre demande" value="" />
                                    <Picker.Item label="Carte de crédit" value="Carte de crédit" />
                                    <Picker.Item label="Carnet de chèque" value="Carnet de chèque" />
                                </Picker>
             </View>
                    

                   
                    <TextInput style={styles.inputStyle}
                        placeholder='Nom'
                        autoCapitalize='none'
                        placeholderTextColor="#FAF5F0"
                        
                        onChangeText={(text) => this.setState({ password: text })}
                    ></TextInput>
                     <TextInput style={styles.inputStyle}
                        placeholder='Prénom'
                        autoCapitalize='none'
                        placeholderTextColor="#FAF5F0"
                       
                        onChangeText={(text) => this.setState({ password: text })}
                    ></TextInput>
                     <TextInput style={styles.inputStyle}
                        placeholder='Num CIN/Passeport'
                        autoCapitalize='none'
                        placeholderTextColor="#FAF5F0"
                        
                        onChangeText={(text) => this.setState({ password: text })}
                    ></TextInput>
                    

                    </View>
              
                   <View style={styles.footer}>
                   <TouchableOpacity style={styles.buttonSign}
                        onPress={() => {
                            this.props.navigation.navigate('HomeClient')
                        }}
                    >
                        <Text style={{
                            marginTop: '0%', fontSize: 18,
                            color: '#FAF5F0', textAlign: 'center'
                        }}>{this.state.busyClick ? "S'il vous plaît, attendez ..." : "Envoyer"}</Text>
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
        justifyContent:"center"
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

export default DemandeCarteCredit;


