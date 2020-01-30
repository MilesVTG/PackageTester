import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/mainStyles';
import {useSelector, useDispatch} from 'react-redux';

const MainScreen = props => {
  const userName = useSelector(state => state.items.test);
  return (
    <View style={styles.screen}>
      <Text>The Main Screen {userName}</Text>
    </View>
  );
};

export default MainScreen;
