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
        <View style = {styles.bodyScroll}>
          <ScrollView>
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
          <SurveyItem />
          <SurveyItem />
          <SurveyItem />
          <SurveyItem />          

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
  body:{
    flex:1,
    backgroundColor:Colors.white,
  },
  bodyScroll:{
    flex:8,
    backgroundColor: `#d2691e`,
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
