import React from 'react';
import { StyleSheet, View,TouchableOpacity,Image} from 'react-native';
import TogggleP from '../Svg/TogggleP';

class DemandeCarnetCheque extends React.Component {

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
                        onPress={() => {this.props.navigation.navigate('HomeAdmin')}}>
                        <Image
                            style={{
                                marginTop: '6%', marginRight: "0%",
                                width: 60, height: 60
                            }}
                            source={require('../Svg/b.png')} >
                        </Image>
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
        flex: 1,
    }
});

export default DemandeCarnetCheque;


