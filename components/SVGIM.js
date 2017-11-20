'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
import SvgUri from 'react-native-svg-uri';



class SVGIM extends Component {
    render() {
        return (
          <SvgUri width="40" height="40" source={require('../image/weather_icons/weather_icons/SVG/sw-01.svg')} />
        );
    }
}

module.exports = SVGIM;
