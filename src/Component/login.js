//import liraries
import React, { Component } from 'react';
import {Text, View, Button, Alert, Image, TextInput, TouchableOpacity} from 'react-native';

import styles from '../style/style';
import ImageBackground from "react-native-web/dist/exports/ImageBackground";

// create a component
class login extends Component {
  
  state = {
    nome: ''
  }

  render(){
  return (
    <View style={styles.container}>

      <ImageBackground source={require('../1936916.jpg')} style = { { width : '100%' , height : '100%' , flex: '100%', alignItems: 'center',justifyContent: 'center', resizeMode: 'cover'} }>
          <ImageBackground source={require('../brazao.jpg')} style={styles.image}>

            <Image source={require('../pngegg.png')} style={styles.image} />
          </ImageBackground>
          <TextInput
              style={styles.input}
              onChangeText = {text => this.state.nome = text}
              placeholder="Informe seu Nickname"
          />

          <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              secureTextEntry={true}
          />

          <TouchableOpacity
              style={styles.button} onPress={() => {this.props.navigation.navigate('home',{'nome' : this.state.nome}) }}>
                <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity
               style={styles.buttoncad} onPress={() => {this.props.navigation.navigate('cadastramento') }}>
                <Text style={styles.buttoncadText}>Cadastrar</Text>
          </TouchableOpacity>
      </ImageBackground>
    </View>
  );
  };
}
export default login;

