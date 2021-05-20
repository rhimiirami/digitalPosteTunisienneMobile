import React from 'react';
import { StyleSheet, View,Text,TouchableOpacity,Image} from 'react-native';

class DetailsTransactions extends React.Component {

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
                    <TouchableOpacity style={{marginTop: '0%', marginLeft: "5%"}}
                        onPress={() => {this.props.navigation.navigate('HomeClient')}}>
                        <Image
                            style={{
                                marginTop: '6%', marginRight: "0%",
                                width: 60, height: 60
                            }}
                            source={require('../Svg/b.png')} >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <View style={styles.viewtext}>
                    <Text style={styles.text}>Transaction Num:</Text>
                    <Text style={styles.text}> 0x45458a1sb444e44d5646</Text>
                    </View>
                    <View style={styles.viewtext}>
                    <Text style={styles.text}>From:</Text>
                    <Text style={styles.text}>319562879563275127841</Text>
                    </View>
                    <View style={styles.viewtext}>
                    <Text style={styles.text}>To:</Text>
                    <Text style={styles.text}>789562879563287512498</Text>
                    </View>
                    <View style={styles.viewtext}>
                    <Text style={styles.text}>Date:</Text>
                    <Text style={styles.text}>01/02/2021</Text>
                    </View>
                    

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
        flex: 1,
    },
    body:{
        flex:4,
       // backgroundColor:"red"
    },
    viewtext:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"center",
        
    },
    text:{
        color:"#FFFFFF"
    }
});

export default DetailsTransactions;


