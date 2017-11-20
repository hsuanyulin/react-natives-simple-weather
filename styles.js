'use strict'
import {Dimensions} from 'react-native';

const React = require('react-native')
const {StyleSheet} = React
const constants = {
  actionColor: '#24CE84'
};

var {
  width: width,
  height: height
} = Dimensions.get('window');

const styles = StyleSheet.create({
  motherView: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {width: width-120, height: 50, justifyContent: 'center'},
  welcome: {
    textAlign: 'center',
    fontSize: 15,
    margin: 10,
    color: '#FFFFFF',
  },
  instructions: {
    fontSize: 12,
    color: '#333333',
    marginBottom: 0,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#000000',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 10,
  },
  list: {
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  itemDark: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 15,
  },
  itemLight: {
    backgroundColor: '#000000',
    flexWrap: 'wrap',
    marginRight: width*0.02,
    fontSize: 20,
    color: '#FFFFFF',
  },
  wrapper: {
    backgroundColor: '#000000',
  },
  slide1: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#000000',
  },
  swiperDot: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7
  },
  swiperDotActive: {
    backgroundColor: '#A9A9A9',
    width: 15,
    height: 13,
    borderRadius: 3,
    marginLeft: 7,
    marginRight: 7
  },
  icon: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide2: {
    flex: 1,
    margin: 15,
    backgroundColor: '#000000',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  temp: {
    marginTop: 30,
    color: '#fff',
    fontSize: 50,
  },
  date: {
    textAlign: 'center',
    marginTop: 20,
    color: '#fff',
    fontSize: 30,
  },
  text: {
    marginTop: 50,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
})


module.exports = styles;
