/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import MainNavigation from './src/components/Navigation/MainNavigation';
import {connect} from 'react-redux';
import {
  addItem,
  deleteItem,
  selectItem,
  deselectItem,
} from './store/actions/index';
// import {Button} from 'react-native-elements';

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

  componentDidMount() {
    this.props.onAddItem('hungry-mungry');
  }

  componentDidUpdate() {
    console.log(this.props.items);
  }

  render() {
    return (
      <SafeAreaView>
        <Text>HERE {this.props.name}</Text>
        <MainNavigation />
      </SafeAreaView>
    );
    // return <MainNavigation />;
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.items,
    selectedItem: state.items.selectedItem,
    name: state.items.test,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: name => dispatch(addItem(name)),
    onDeleteItem: () => dispatch(deleteItem()),
    onSelectItem: key => dispatch(selectItem(key)),
    onDeselectItem: () => dispatch(deselectItem),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
