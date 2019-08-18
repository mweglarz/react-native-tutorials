import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, SafeAreaView } from 'react-native'

export default class Welcome extends Component {
    render() {
        return (
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.middleContainer}>
                    <Text style={styles.text}> Welcome </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="GET STARTED"/>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: "space-between",
        backgroundColor: "green",
        flex: 1,
    },
    middleContainer: {
        backgroundColor: "yellow",
        paddingTop: "40%"
    },
    text: {
        textAlign: "center",
        fontSize: 30,
        backgroundColor: "red"
    },
    buttonContainer: {
        height: 100,
        backgroundColor: "orange",
        alignItems: "center",
        paddingTop: 10
    },
})
