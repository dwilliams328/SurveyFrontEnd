import React from 'react'
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: '#191970',
    },
    scrollContainer: {
      flex:1,
      backgroundColor:'#ffffff',
      borderWidth:4,
      borderColor: '#191970',
    },
    scrollViewContainer:{
      flex:1,
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
      color: '#ffffff',
    },
  });

  export default styles;