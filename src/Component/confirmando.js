//import liraries
import React, { Component } from 'react';
import {Text, View, Button, Alert, Image, TextInput, TouchableOpacity} from 'react-native';

import styles from '../style/style';


// create a component
class confirmando extends Component {

  state = {
    confirmacao: 'Você tem !'
  }

  render() {
      const {navigation} = this.props;
      const servico = navigation.getParam('servico');
      const dia = navigation.getParam('dia');
    return (
      <View style={styles.containerLogado}>


        <Image source={require('../ok.png')} style={styles.imagemOk} />

        <Text style={styles.textGeral}>Seu agendamento para {servico} na {dia} está confirmado</Text>
        <Text style={styles.textGeral}>Lembrando que é por ordem de chegada</Text>
        <Text style={styles.textGeral}>Atendemos das 08:00 até as 21:00 horas.</Text>

        <TouchableOpacity
          style={styles.buttonFinalizar} onPress={() => {this.props.navigation.navigate('home',{'confirmacao' : "Você tem um agendamento de " + navigation.getParam('servico') + " para " + navigation.getParam('dia')+"."}) }}>
            <Text style={styles.buttonFinalizarText}>Finalizar</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

//make this component available to the app
export default confirmando;

