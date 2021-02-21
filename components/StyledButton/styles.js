import React from 'react'
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#7fff00',
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 30,
        marginLeft:30,
        marginRight:30,
        borderRadius:10,
    },
    imageContainer: {
        flex:1,
        backgroundColor: '#fff',
        borderWidth:1,
        borderRadius:10,
    },
    contentContainer: {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'#fff',
    },
    title: {
        marginLeft: '5%',
        fontWeight: '200',
        fontSize: 20,

    },
    button:{
        borderWidth: 2,
        width:'90%',
        margin:8,
        borderRadius:10,
        alignSelf:'flex-start',
        // backgroundColor:'#ffff00'
        
    },
    buttonText: {
        fontWeight: '200',
        fontSize: 30,
    },
});

export default styles;