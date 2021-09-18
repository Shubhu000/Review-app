import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../styles/Global';
const About = () =>{
    return(
        <View style = {GlobalStyles.container}>
            <Text>About Screen</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 24
    },
});

export default About;