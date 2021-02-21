import React from 'react';
import {View,Text,Pressable, SafeAreaView} from 'react-native';
import styles from './styles';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Home = ({navigation}) => {
    return(
    <SafeAreaView style = {styles.page}>
        <View style = {styles.container}>
            <Text> Greetings! :) </Text>

            <Pressable onPress={() => navigation.navigate('AllSurvey')}
                style={{ backgroundColor: 'plum', padding: 10, marginBottom: 10, marginTop: 10 }}>
                <Text>All Survey</Text>
            </Pressable>
        </View>

    </SafeAreaView>
        
    );
    
}

export default Home;