import React from 'react';
import {View,Text,Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (prop) => {
    return(
        <View style = {styles.container}>
            <Pressable 
            style={styles.button}
            onPress ={ () => {
                console.log("button Pressed!!")
            }}>
                <Text style = {styles.highlight}> This is a button</Text>
            </Pressable>
        </View>
            
        
    );
    
}

export default StyledButton;