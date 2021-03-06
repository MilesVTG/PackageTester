import {
  ADD_ITEM,
  DELETE_ITEM,
  SELECT_ITEM,
  DESELECT_ITEM,
  CHANGE_NAME,
  TOGGLE_LOGIN,
} from '../actions/actionTypes';

const initialState = {
  items: [],
  selectedItem: null,
  test: 'GGG',
  loggedIn: false,
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: state.items.concat({
          key: Math.random(),
          name: action.itemName,
          image: {
            uri: 'https://picsum.photos/400/300',
          },
        }),
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => {
          return item.key !== state.selectedItem.key;
        }),
        selectedItem: null,
      };
    case SELECT_ITEM:
      return {
        ...state,
        selectedItem: state.items.find(item => {
          return item.key === action.key;
        }),
      };
    case DESELECT_ITEM:
      return {
        ...state,
        selectedItem: null,
      };
    case CHANGE_NAME:
      return {
        ...state,
        test: action.test,
      };
    case TOGGLE_LOGIN:
      return {...state, loggedIn: !state.loggedIn};
    default:
      return state;
  }
};

export default itemsReducer;
