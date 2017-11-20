'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import Timeline from 'react-native-timeline-listview';
const styles = require('../../styles.js');

const { Text, View } = ReactNative;

const weatherIcons = ["",
"ios-sunny-outline",
"ios-partly-sunny-outline",
"ios-cloudy-outline",
"ios-cloudy-outline",
"ios-rainy-outline",
"ios-rainy-outline",
"ios-thunderstorm-outline",
"ios-snow-outline",
"ios-alert-outline",
];

class pagerFuture extends Component {



  constructor(props){
    console.log('pagerFuture is created');
    super(props);
  }

  renderDetail(rowData, sectionID, rowID) {
    let title = <Text style={[styles.welcome]}>{rowData.title}</Text>
    let detail = <Text style={[styles.welcome]}>{rowData.description}</Text>
    var desc = null
    if(rowData.description)
      desc = (
        <View style={styles.icon}>
          <Icon name={weatherIcons[rowData.icon]} size={40} color="#FFFFFF"/>
        </View>
      )
    return (
      <View style={{flex:1, flexDirection:'row' }}>
        {desc}
        {title}
        {detail}
      </View>
  )}

  render() {
    console.log(' Future Pager Render is called');
    console.log(this.props.data);
    var data = this.props.data;
    return(
        <View style={styles.slide2}>
        <Timeline
        circleSize={15}
        circleColor='#696969'
        lineColor='#696969'
        timeContainerStyle={{minWidth:52, marginTop: 0}}
        timeStyle={{textAlign: 'left', backgroundColor:'#000000', color:'white', padding:3, borderRadius:5}}
        descriptionStyle={{color:'gray'}}
        options={{
          style:{paddingTop:5}
        }}
        data={data}
        renderDetail={this.renderDetail}
        />
        </View>
    );
  }
}

module.exports = pagerFuture;
