import React from 'react';
import {View,Text,Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (prop) => {
    return(
    
    <View style = {styles.container}>
        <View style = {styles.imageContainer}>
            <Text>Will be Image</Text>

        </View>

        <View style = {styles.contentContainer}>
            <Text style = {styles.title}>Survey Title</Text>

                <Pressable 
                style = {({pressed}) => [
                    {backgroundColor: pressed ? '#00bfff' : '#0000ff',
                    },
                    styles.button,
                ]}
                onPress ={ () => {
                    console.log("button Pressed!!")
                }}>
                    <Text style = {styles.buttonText}> Button</Text>
                </Pressable>

        </View>
    </View>        
        
    );
    
}

export default StyledButton;