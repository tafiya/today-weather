import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
      },
      Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain."
      },
      Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Raining",
        subtitle: "For more info look outside"
      },
      Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman?"
      },
      Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
      },
      Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Sunny as fuck",
        subtitle: "Go outside!"
      },
      Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "So cloudy"
      },
      Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist!",
        subtitle: "It's like you have no glasses on."
      },
      Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dusty",
        subtitle: "Wear a mask.😷"
      },
      Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outside."
      }
    };

export default function Weather({ temp, condition }){
    return (
        <LinearGradient
          colors={weatherOptions["Haze"].gradient}
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