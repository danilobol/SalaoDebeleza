//import liraries
import React, { Component } from 'react';
import {Text, View, Button, Alert, Image, TextInput, TouchableOpacity} from 'react-native';

import styles from '../style/style';
import ImageBackground from "react-native-web/dist/exports/ImageBackground";

// create a component
class cadastramento extends Component {

  state = {
    nome: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../background.png')} style = { { width : '100%' , height : '100%' , flex: '100%', alignItems: 'center',justifyContent: 'center', resizeMode: 'cover'} }>


        <Text style={styles.buttonTextContato}>Nickname:</Text>
      
      <TextInput
          style={styles.input}
          onChangeText = {text => this.state.nome = text} 
          placeholder="Crie um Nickname"
      />

      <Text style={styles.buttonTextContato}>Senha:</Text>

      <TextInput
          style={styles.input}
          placeholder="Escolha uma senha"
          secureTextEntry={true}
      /> 

      <Text style={styles.buttonTextContato}>Confirmação de senha:</Text>

      <TextInput
          style={styles.input}
          placeholder="Digite a senha novamente"
          secureTextEntry={true}
      /> 

      <TouchableOpacity
          style={styles.button} onPress={() => {this.props.navigation.navigate('home',{'nome' : this.state.nome}) }}>
          <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

//make this component available to the app
export default cadastramento;

