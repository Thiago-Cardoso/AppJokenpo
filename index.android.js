import React, {Component } from 'react'
import { Text, AppRegistry, Button,  View } from 'react-native';


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
              result = 'User Won';
           }

           if(choiceUser == 'scissors'){
            result = 'Computer Won';
          } 
        }

          if(choiceComputer == 'paper'){
            if(choiceUser == 'paper'){
                result = 'draw';
            }

            if(choiceUser == 'scissors'){
              result = 'User Won';
          }

          if(choiceUser == 'stone'){
            result = 'Computer Won';
          } 
        }

        if(choiceComputer == 'scissors'){
          if(choiceUser == 'scissors'){
              result = 'draw';
          }

          if(choiceUser == 'stone'){
            result = 'User Won';
         }

         if(choiceUser == 'stone'){
          result = 'Computer Won';
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
         <Text>Choice of Computer: {this.state.choiceComputer}</Text>
         <Text>Choice of User: {this.state.choiceUser}</Text>
         <Text>Result: {this.state.result} </Text>
         <Button title="stone" onPress={ () => { this.jokenpo('stone') }} />
         <Button title="paper" onPress={ () => { this.jokenpo('paper') }} />
         <Button title="scissors" onPress={ () => { this.jokenpo('scissors') }} />
      </View>
    );
  }

}

AppRegistry.registerComponent('jokenpo', () => jokenpo);
