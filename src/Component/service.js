//import liraries
import React, { Component } from 'react';
import {Text, View, Button, Alert, Image, TextInput, TouchableOpacity} from 'react-native';

import styles from '../style/style';
import ImageBackground from "react-native-web/dist/exports/ImageBackground";

// create a component
class service extends Component {


  render() {
    return (
      <View style={styles.containerLogado}>
        <ImageBackground source={require('../background.png')} style = { { width : '100%' , height : '100%' , flex: '100%', alignItems: 'center',justifyContent: 'center', resizeMode: 'cover'} }>


        <Text style={styles.textervico1}>Estes são nossos serviços:</Text>
      <Text style={styles.textervico2}>Clque Para Agendar:</Text>


          <TouchableOpacity
            style={styles.buttonContato} onPress={() => {this.props.navigation.navigate('dias',{'servico' : 'Cabeleireiro'}) }}>
            <Text style={styles.buttonTextContato}>Cabeleireiro</Text>
            <Image source={require('../experiencia-no-mercado-.png')} style={styles.imagemIcon} />

          </TouchableOpacity>

        <TouchableOpacity
            style={styles.buttonContato} onPress={() => {this.props.navigation.navigate('dias',{'servico' : 'Lavagem'}) }}>
          <Text style={styles.buttonTextContato}>Lavagem</Text>
          <Image source={require('../tratamentos-completos.png')} style={styles.imagemIcon} />

        </TouchableOpacity>

        <TouchableOpacity
            style={styles.buttonContato} onPress={() => {this.props.navigation.navigate('dias',{'servico' : 'Hidratação'}) }}>
          <Text style={styles.buttonTextContato}>Hidratação</Text>
          <Image source={require('../proficionais-especializados.png')} style={styles.imagemIcon} />

        </TouchableOpacity>


        <TouchableOpacity
            style={styles.buttonContato} onPress={() => {this.props.navigation.navigate('dias',{'servico' : 'Pintar'}) }}>
          <Text style={styles.buttonTextContato}>Pintar</Text>
          <Image source={require('../atendimento-de-qualidade.png')} style={styles.imagemIcon} />

        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}


//make this component available to the app
export default service;

