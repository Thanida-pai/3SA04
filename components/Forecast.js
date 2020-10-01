import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View style = {styles.tap} >
            <Text style={styles.big}>{props.main}</Text>
            <Text style={styles.small}>{props.description}</Text>
            <View>
                <Text style={styles.big}>{props.temp}<Text style={styles.small}>°C</Text></Text>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    tap:{
        backgroundColor: 'black',
        width: '100%',
        opacity: 0.5,
        alignItems: 'center',
    },
    small: {
         color: 'white',
         fontSize: 20,
         marginBottom: 30,
     },
    big: {
        color: 'white',
        fontSize: 35,
        padding: 15
    },
});