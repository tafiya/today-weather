import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze:  {
        iconName: "weather-hail",
        gradient: ["#4da0b0","#d39d38"],
        title: "can't see anything :(",
        subtitle: ""
    },
    Thunderstorm: {
        iconName: "",
        gradient: []
    },
        Drizzle: {
            iconName:"",
            gradient:[]
        },
        Rain: {
            iconName:"",
            gradient:[]
        },
        Snow: {
            iconName:"",
            gradient:[]
        },
        Atmosphere: {
            iconName:"",
            gradient:[]
        },
        Clear: {
            iconName:"",
            gradient:[]
        },
        Clouds: {
            iconName:"",
            gradient:[]
        },
        Fog: {
            iconName:"",
            gradient:[]
        }    };

export default function Weather({ temp, condition }){
    return (
    
        <LinearGradient
          colors={[weatherOptions["Haze"].gradient]}
          style={styles.container}>
              <StatusBar barStyle="light-content" />
        <View style={styles.halfcontainer}>
            <MaterialCommunityIcons 
            size={95} 
            name={weatherOptions["Haze"].iconName || "weather-sunset"} 
            color="white">
            </MaterialCommunityIcons>
            <Text style={styles.temp}>{temp}º</Text>
            </View>    
            <View style={{...styles.halfcontainer, ...styles.textContainer}} >
                
                <Text style={styles.title}>{weatherOptions[condition].title} </Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
                
            </LinearGradient> 
            
        
    )};

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Fog",
        "Haze"
    ]).isRequired
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp:{
        fontSize: 36,
        color:"white"
    },
    halfcontainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title:{
        color:"white",
        fontSize: 44,
        fontWeight: "200",
        marginBottom: 15
    },
    subtitle:{
        color:"white",
        fontWeight:"600",
        fontSize: 25
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems : "flex-start"
    }
})