import {ADD_ITEM, DELETE_ITEM, SELECT_ITEM, DESELECT_ITEM} from './actionTypes';

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
