import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SurveyItem from './components/SurveyItem';

const App: () => React$Node = () => {
  return (
      <SafeAreaView style={styles.page}>

        <View style = {styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            All Survey
          </Text>
        </View>

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

      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#191970',
  },
  scrollContainer: {
    flex:8,
    backgroundColor:'#ffffff',
    borderWidth:4,
    borderColor: '#191970',
    
  },
  scrollViewContainer:{
    flex:1,
  
    // borderTopLeftRadius:20,
    // borderTopLeftRadius:20,

     backgroundColor:'#191970',
  },
  scrollView:{
    flex:1,
    flexDirection: 'column',
    borderWidth:4,
    borderColor:'#fff',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor:'#f5f5f5',


  },
  sectionHeader: {
    flex:1,
    marginTop: 30,
    paddingHorizontal: 14,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.white,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});

export default App;
