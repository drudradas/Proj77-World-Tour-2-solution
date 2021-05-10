import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class WelcomeScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/travel.gif')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Image source={require("../assets/travelicon.jpg")} style={{ width: 150, height: 150 }}></Image>
                        <Text style={styles.titleText}>World Tour</Text>
                        <Text style={styles.titleText}>App</Text>
                    </View>

                  

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("WorldMap")
                    }>
                        <Text style={styles.routeText}>World Map</Text>
                        <Image source={require("../assets/map.png")} style={styles.routeImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("DailySightings")
                    }>
                        <Text style={styles.routeText}>Daily Sightings</Text>
                        <Image source={require("../assets/daily_pictures.png")} style={styles.routeImage}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.12,
        justifyContent: "center",
        alignItems: "center",
     
        margin: 10,
        marginLeft: 60,
        marginRight: 30,
        borderRadius: 100,
        backgroundColor: "black"
    },
    titleBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: ""
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#D11583',
        justifyContent: "center",
        alignItems: "center"
    },
    routeImage: {
        position: "absolute",
        top: -20,
        right: -15,
        height: 60,
        width: 60,
        resizeMode: "contain"
    }
});