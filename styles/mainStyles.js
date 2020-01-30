import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    padding: 10,
    flexDirection: 'column',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
  redBox: {
    flex: 2,
    backgroundColor: 'red',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueBox: {
    flex: 1,
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenBox: {
    flex: 1,
    backgroundColor: 'green',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  test: {
    padding: 5,
    backgroundColor: '#fcfcfc',
    borderColor: '#ededed',
    borderWidth: 1,
  },
  linksModal: {
    padding: 30,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchText: {
    fontSize: 14,
    color: 'white',
    letterSpacing: 1.2,
  },
});

export default styles;
