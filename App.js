import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Text, View, Button, Alert, Image, TextInput, TouchableOpacity} from 'react-native';


import login from './src/Component/login';
import home from './src/Component/home';
import cadastramento from './src/Component/cadastramento';
import dias from './src/Component/dias';
import confirmando from './src/Component/confirmando';
import service from './src/Component/service';

//

const MainDrawer = createDrawerNavigator(
  {
    home: home,
    serviço: service,

  },
  {
    contentOptions: {

      activeTintColor:'#aa05f1',

      labelStyle:{
        fontSize: 25
      }

    }
  }
)


const MainNavigation = createStackNavigator({
  login: {
    screen: login,
    navigationOptions:{
      headerTitle: 'Login'
      //header: null
    }
  },
  home:{
    screen: home,
    navigationOptions:{
      headerTitle: 'Home'
    }
  },
  cadastramento:{
    screen: cadastramento,
    navigationOptions:{
      headerTitle: 'Cadastramento'
    }
  },
  dias:{
    screen: dias,
    navigationOptions:{
      headerTitle: 'Dias'
    }
  },
  confirmando:{
    screen: confirmando,
    navigationOptions:{
      headerTitle: 'Confirmando'
    }
  },
  service:{
    screen: service,
    navigationOptions:{
      headerTitle: 'Serviços'
    }
  }


})

export default createAppContainer(MainNavigation, MainDrawer);

