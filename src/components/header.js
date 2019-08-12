import React, {Component } from 'react'
import { Image, View } from 'react-native';

class Header extends Component{

    render(){
      return (
        <View>
            <Image source={require('../../imgs/jokenpo.png')} />
        </View>
      );
    }
}

export default Header