//import liraries
import React, { Component } from 'react';
import {Text, View, Button, Alert, Image, TextInput, TouchableOpacity} from 'react-native';

import styles from '../style/style';

const PresentationComponents = (props) =>{
  return(
    <View>

      <Text style={styles.textoPropDia} onPress = {props.updateState} > 
        {props.myState}
      </Text>

    </View>
  )
}


// create a component
class dias extends Component {



  render() {
      const {navigation} = this.props;
      const servico = navigation.getParam('servico');

      return (
      <View style={styles.containerLogado}>

        <Text style={styles.textGeral}>Escolha o dia para </Text>
          <Text style={styles.textGeral}>{servico}</Text>

        <TouchableOpacity
          style={styles.buttonSemana}  onPress={() => {this.props.navigation.navigate('confirmando', {'dia': 'Segunda','servico': navigation.getParam('servico')}) }}>
            <Text style={styles.buttonTextDias}>Segunda</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSemana} onPress={() => {this.props.navigation.navigate('confirmando', {'dia': 'Terça','servico': navigation.getParam('servico')}) }}>
            <Text style={styles.buttonTextDias}>Terça</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSemana} onPress={() => {this.props.navigation.navigate('confirmando', {'dia': 'Quarta','servico': navigation.getParam('servico')}) }}>
            <Text style={styles.buttonTextDias}>Quarta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSemana} onPress={() => {this.props.navigation.navigate('confirmando', {'dia': 'Quinta','servico': navigation.getParam('servico')}) }}>
            <Text style={styles.buttonTextDias}>Quinta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSemana} onPress={() => {this.props.navigation.navigate('confirmando', {'dia': 'Sexta','servico': navigation.getParam('servico')}) }}>
            <Text style={styles.buttonTextDias}>Sexta</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


//make this component available to the app
export default dias;

