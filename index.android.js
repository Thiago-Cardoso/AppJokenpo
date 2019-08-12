import React, {Component } from 'react'
import { Text, AppRegistry,  Button,  View } from 'react-native';

import Header from './src/components/header'

import Icon from './src/components/icon'

class jokenpo extends Component{

  constructor(props){
    super(props);

    this.state = { choiceUser : '', 
                   choiceComputer : '',
                    result : '' 
                 }
  }

  jokenpo(choiceUser){

    //generate randon number
    var numRandon = Math.floor(Math.random() * 3);


    var choiceComputer = '';

    switch(numRandon)
    {
      case 0: choiceComputer = 'stone';
        break;
      case 1: choiceComputer = 'paper';
        break;
      case 2: choiceComputer = 'scissors';
        break;
    }

        var result = '';

        if(choiceComputer == 'stone'){
            if(choiceUser == 'stone'){
                result = 'draw';
            }

            if(choiceUser == 'paper'){
              result = 'You Won';
           }

           if(choiceUser == 'scissors'){
            result = 'You Lost';
          } 
        }

          if(choiceComputer == 'paper'){
            if(choiceUser == 'paper'){
                result = 'draw';
            }

            if(choiceUser == 'scissors'){
              result = 'You Won';
          }

          if(choiceUser == 'stone'){
            result = 'You Lost';
          } 
        }

        if(choiceComputer == 'scissors'){
          if(choiceUser == 'scissors'){
              result = 'draw';
          }

          if(choiceUser == 'stone'){
            result = 'You Won';
         }

         if(choiceUser == 'stone'){
          result = 'You Lost';
        } 
       }

    this.setState( { choiceUser : choiceUser,
                     choiceComputer : choiceComputer,
                     result: result
                } );
  }

  render(){
    return (
      <View>
        <Header></Header>
        <View style={styles.panelActions}>
          
          <View style={styles.btnChoice}>
              <Button title="stone" onPress={ () => { this.jokenpo('stone') }} />
          </View>
          <View style={styles.btnChoice}>
             <Button title="paper" onPress={ () => { this.jokenpo('paper') }} />
          </View>
          <View style={styles.btnChoice}>
              <Button title="scissors" onPress={ () => { this.jokenpo('scissors') }} />
          </View>

        </View>

        <View style={styles.stage}>
         <Text style={styles.txtResult}> {this.state.result} </Text>

         <Icon choice={this.state.choiceComputer} player='computer'></Icon>
         <Icon choice={this.state.choiceUser} player='you'></Icon>

        </View>

      </View>
    );
  }
}

const styles = {
    btnChoice: {
      width: 90
    },
    panelActions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10
    },
    stage: {
      alignItems: 'center',
      marginTop: 10
    },
    txtResult: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'red',
      height: 60
    }
  }

AppRegistry.registerComponent('jokenpo', () => jokenpo);
