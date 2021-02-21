import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from 'react-native';

import 'react-native-gesture-handler';
import SurveyItem from '../SurveyItem';
import styles from './styles';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AllSurvey = () => {
    return(
    <SafeAreaView style={styles.page}>
        <View style = {styles.scrollContainer}>
            <ScrollView style = {styles.scrollViewContainer}>
                <View style = {styles.scrollView}>
                    <SurveyItem />
                    <SurveyItem />
                    <SurveyItem />
                    <SurveyItem />
                    <SurveyItem />
                    <SurveyItem />
                    <SurveyItem />
                    <SurveyItem />
                    <SurveyItem />
                    <SurveyItem />
                    <SurveyItem />
                    <SurveyItem />
                    <SurveyItem />
                </View>
            </ScrollView>
        </View>
  </SafeAreaView>);
    
}

export default AllSurvey;

