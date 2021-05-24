import React, { Component } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Indicator extends Component {
    state = { animating: true }

    closeActivityIndicator = () => setTimeout(() => this.setState({
        animating: false
    }), 60000)

    componentDidMount = () => this.closeActivityIndicator()
    render() {
        const animating = this.state.animating
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={animating}
                    color='#FAF5F0'
                    size={100}
                    style={styles.activityIndicator} />
            </View>
        )
    }
}
export default Indicator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
})