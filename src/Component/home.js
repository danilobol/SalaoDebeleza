//import liraries
import React, { Component } from 'react';
import {Text, View, Button, Alert, Image, TextInput, TouchableOpacity} from 'react-native';

import styles from '../style/style';
import ImageBackground from "react-native-web/dist/exports/ImageBackground";

// create a component
class home extends Component {
  render(){

    const {navigation} = this.props;

    const nameUser = navigation.getParam('nome');

    const avisoConfirmacao = navigation.getParam('confirmacao');

    return (
      <View style={styles.containerLogado}>

      <ImageBackground source={require('../background.png')} style = { { width : '100%' , height : '100%' , flex: '100%', alignItems: 'center',justifyContent: 'center', resizeMode: 'cover'} }>


        <Text style={styles.textNomeHome}>{avisoConfirmacao}</Text>
          <ImageBackground source={require('../perfil (1).png')} style={{}}>

              <Image source={require('../perfil.png')} style={styles.imagePerfil} />
          </ImageBackground>
          <Text style={styles.textGeral}>Olá</Text>

          <Text style={styles.textNomeHome}>{nameUser}</Text>

          <Text style={styles.textGeral}>Bem Vindo a Huthentic!</Text>
        <Text style={styles.textGeral}>Conheça e agende nossos serviços:</Text>


        <TouchableOpacity
               style={styles.buttonDuvida} onPress={() => {this.props.navigation.navigate('service') }}>
                <Text style={styles.buttonTextDuvida}>Serviços</Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={styles.buttonSair} onPress={() => {this.props.navigation.navigate('login') }}>
              <Text style={styles.buttonTextSair}>Sair</Text>
          </TouchableOpacity>
      </ImageBackground>
      </View>
    );
  }
}

//make this component available to the app
export default home;


