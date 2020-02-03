import {
  ADD_ITEM,
  DELETE_ITEM,
  SELECT_ITEM,
  DESELECT_ITEM,
  CHANGE_NAME,
  TOGGLE_LOGIN,
} from './actionTypes';

import AsyncStorage from '@react-native-community/async-storage';

export const addItem = itemName => {
  return {
    type: ADD_ITEM,
    itemName: itemName,
  };
};

export const deleteItem = () => {
  return {
    type: DELETE_ITEM,
  };
};

export const selectItem = key => {
  return {
    type: SELECT_ITEM,
    itemKey: key,
  };
};

export const deselectItem = () => {
  return {
    type: DESELECT_ITEM,
  };
};

export const changeName = name => {
  return async dispatch => {
    storeLocalStorageData('test', name);
    const storageName = await getLocalStorageData('test');
    console.log(storageName);

    const sideEffect = fetch('https://the-one-api.herokuapp.com/v1/book', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then(resp => resp.json())
      .then(data => data);

    const sideData = await sideEffect;
    console.log(sideData.docs[0].name);

    await dispatch({
      type: CHANGE_NAME,
      test: name,
    });
  };
};

export const toggleLogin = () => {
  return {
    type: TOGGLE_LOGIN,
  };
};

// To read local stored data
export const getLocalStorageData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
    return false;
    // error reading value
  }
};

// To save data in local storage
export const storeLocalStorageData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};
