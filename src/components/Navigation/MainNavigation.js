import React from 'react';
import {Text} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MainScreen from '../../screens/MainScreen';
import ItemsScreen from '../../screens/ItemsScreen';
import ItemScreen from '../../screens/ItemScreen';
import AccountScreen from '../../screens/AccountScreen';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const defaultStackNavOptions = navData => {
  return {
    headerTitleStyle: {
      fontSize: 16,
      letterSpacing: 1.3,
    },
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: Colors.primaryRed,
    headerRight: () => (
      //   <Text>X</Text>
      <Icon
        name="anchor"
        style={{color: Colors.primaryBlue, fontSize: 23, paddingRight: 15}}
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    ),
  };
};

const MainStack = createStackNavigator(
  {
    Home: {screen: MainScreen},
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

const ItemStack = createStackNavigator(
  {
    Items: ItemsScreen,
    Item: ItemScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

const AccountStack = createStackNavigator(
  {
    Account: AccountScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

AccountStack.navigationOptions = {
  headerTitle: 'Your Account',
};

const MainNavigator = createDrawerNavigator(
  {
    Home: MainStack,
    Items: {
      screen: ItemStack,
      navigationOptions: {
        drawerLabel: 'My Items',
      },
    },
    MyAccount: {
      screen: AccountStack,
      navigationOptions: {
        drawerLabel: 'Account',
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontSize: 15,
      },
    },
  },
);

export default createAppContainer(MainNavigator);
