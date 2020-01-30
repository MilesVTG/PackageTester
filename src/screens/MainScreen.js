import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/mainStyles';
import {useSelector, useDispatch} from 'react-redux';
import {Button} from 'react-native-elements';
import {TOGGLE_LOGIN} from '../../store/actions/actionTypes';
import Icon from 'react-native-vector-icons/FontAwesome';

const MainScreen = props => {
  const userName = useSelector(state => state.items.test);

  const dispatch = useDispatch();
  //   console.log(toggleLogin);
  return (
    <View style={styles.screen}>
      <Text>The Main Screen {userName}</Text>
      <Button
        onPress={() => dispatch({type: TOGGLE_LOGIN})}
        title=" Hello Moe"
        icon={<Icon name="terminal" size={26} color="white" />}
      />
    </View>
  );
};

export default MainScreen;
