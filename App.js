/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, SafeAreaView, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import MainNavigation from './src/components/Navigation/MainNavigation';
import {connect} from 'react-redux';
import {
  addItem,
  deleteItem,
  selectItem,
  deselectItem,
  changeName,
  toggleLogin,
} from './store/actions/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles/mainStyles';

class App extends Component {
  itemAddedHandler = itemName => {
    this.props.onAddItem(itemName);
  };

  itemDeleteHandler = () => {
    this.props.onDeleteItem();
  };

  itemDeselectHandler = () => {
    this.props.onDeselectItem();
  };

  itemSelectHandler = key => {
    this.props.onSelectItem(key);
  };

  nameChangeHandler = name => {
    this.props.onNameChange(name);
  };

  componentDidMount() {
    this.props.onAddItem('hungry-mungry');
  }

  componentDidUpdate() {
    // console.log(this.props.items);
  }

  render() {
    return this.props.loggedIn ? (
      <MainNavigation />
    ) : (
      <SafeAreaView>
        <Text>HERE {this.props.name}</Text>
        <TextInput
          style={styles.test}
          onChangeText={text => {
            this.nameChangeHandler(text);
          }}
        />
        <Button
          buttonStyle="solid"
          icon={<Icon name="rocket" size={150} color="#00aaff" />}
          onPress={() => this.props.changeLogin()}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.items,
    selectedItem: state.items.selectedItem,
    name: state.items.test,
    loggedIn: state.items.loggedIn,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: name => dispatch(addItem(name)),
    onDeleteItem: () => dispatch(deleteItem()),
    onSelectItem: key => dispatch(selectItem(key)),
    onDeselectItem: () => dispatch(deselectItem()),
    onNameChange: name => dispatch(changeName(name)),
    changeLogin: () => dispatch(toggleLogin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
