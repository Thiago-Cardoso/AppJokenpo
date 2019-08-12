import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

class MyComponent extends Component{

    render(){
      return (
        <View>
          <Text>{this.props.test}</Text>
        </View>
      );
    }
}

class jokenpo extends Component{

  constructor(props){
    super(props);

    this.state = {text : 'Text test 2'};
  }

  updateText(){
    this.setState( {text : 'other'} );
  }

  render(){
    return (
      <View>
        <MyComponent test={this.state.text}></MyComponent>
        <Button 
          title='Button'
          onPress={() => {this.updateText()}}
        />  
      </View>
    );
  }

}

AppRegistry.registerComponent('jokenpo', () => jokenpo);
