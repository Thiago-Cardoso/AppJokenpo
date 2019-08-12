import React, {Component } from 'react'
import { Image, Text, View } from 'react-native';

class Icon extends Component{
    render(){

        if(this.props.choice == 'stone'){
          
          return (
            <View style={styles.icon} >
                <Text style={styles.txtPlayer}>{this.props.player}</Text>
                <Image source={require('../../imgs/pedra.png')} />
            </View>

          );

        }else if(this.props.choice == 'paper'){

          return (
            <View style={styles.icon}>
                <Text style={styles.txtPlayer}>{this.props.player}</Text>
                <Image source={require('../../imgs/papel.png')} />
            </View>
          );

        }else if (this.props.choice == 'scissors'){

          return (
            <View style={styles.icon}>
              <Text style={styles.txtPlayer}>{this.props.player}</Text>
              <Image source={require('../../imgs/tesoura.png')} />
            </View>
          );

        }else{
          return false;
        }
    }
}

const styles = {
    icon: {
      alignItems: 'center',
      marginBottom: 20
    },
    txtPlayer: {
      fontSize: 18
    }
  }

export default Icon