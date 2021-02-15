/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={styles.page}>
        <View style = {styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            All Survey
          </Text>

        </View>

        <View style={styles.bodyContent}>
        <Text>body content</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    flex:1
  },
  scrollView: {
    backgroundColor: Colors.white
  },
  page: {
    flex: 1,
    backgroundColor: '#191970'
  },
  body:{
    flex:1,
    backgroundColor:Colors.white
  },
  bodyContent:{
    flex:1,
    backgroundColor: Colors.white
  },
  sectionHeader: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.white
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
