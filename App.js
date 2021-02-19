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
            </View>
          </ScrollView>
        </View>

      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex:1,
  },
  page: {
    flex: 1,
    backgroundColor: '#191970',
  },
  scrollContainer: {
    flex:8,
    backgroundColor:'#ffffff',
  },
  scrollViewContainer:{
    flex:1,
    // backgroundColor:'#000000',
  },
  scrollView:{
    flex:1,
    flexDirection: 'column',
    //flexGrow: 4,
    // justifyContent: 'space-evenly',
    backgroundColor:'#0000ff'

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
