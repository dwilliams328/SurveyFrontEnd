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
      <SafeAreaView style={styles.page}>

        <View style = {styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            All Survey
          </Text>
        </View>

        <ScrollView style ={styles.bodyScroll}>
        <Text style= {styles.highlight}>body content</Text>
        <Text style= {styles.highlight}>body content</Text>
        <Text style= {styles.highlight}>body content</Text>
        <Text style= {styles.highlight}>body content</Text>
        <Text style= {styles.highlight}>body content</Text>
        <Text style= {styles.highlight}>body content</Text>
        <Text style= {styles.highlight}>body content</Text>
        <Text style= {styles.highlight}>body content</Text>
        <Text style= {styles.highlight}>body content</Text>
        <Text style= {styles.highlight}>body content</Text>
        <Text style= {styles.highlight}>body content</Text>
        <Text style= {styles.highlight}>body content</Text>

        </ScrollView>
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
  bodyContent:{
    flex:10,
    backgroundColor: Colors.white,
    
  },
  bodyScroll:{
    flex:1,
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
  highlight: {
    fontWeight: '700',
    fontSize: 40,
  },
});

export default App;
