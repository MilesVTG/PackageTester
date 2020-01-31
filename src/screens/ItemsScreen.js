import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/mainStyles';
import {useSelector, useDispatch} from 'react-redux';

const ItemsScreen = props => {
  const userName = useSelector(state => state.items.test);
  return (
    <View style={styles.screen}>
      <Text>The Items Screen {userName}</Text>
    </View>
  );
};

export default ItemsScreen;
