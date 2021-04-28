import React from 'react';

import { View, Text, Button, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        //flexWrap: 'wrap',
        backgroundColor: "#fff",
        justifyContent: 'flex-start',
        alignItems: 'center' // if you want to fill rows left to right
    },
    item: {
        width: '10%',
        //marginTop: "25%" // is 50% of container width
    }
});
function Home(props) {
    return (
        <View style={styles.container}>

            <View style={{ marginLeft: "0%", marginTop: "10%", flexDirection: 'column' }}>

                <Button style={styles.item} title="OneRun" onPress={() => props.navigation.navigate('OneRun')}></Button>
                <Button style={styles.item} title="HomeAdmin" onPress={() => props.navigation.navigate('HomeAdmin')}></Button>
            </View>




        </View>
    );
}
export default Home;