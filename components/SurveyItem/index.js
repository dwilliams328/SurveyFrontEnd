import React from 'react';
import {Text, View } from 'react-native';

import styles from './styles';

const SurveyItem = (props) => {
    return (
      <View>
        <Text style= {styles.highlight}>body content</Text>
      </View>
    );
};

export default SurveyItem;