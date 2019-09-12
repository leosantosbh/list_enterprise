import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import SignIn from './pages/SignIn';

import ListaEmpresas from './pages/ListaEmpresas';
import VerEmpresa from './pages/VerEmpresa';
import FiltroEmpresa from './pages/FiltroEmpresa';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({ SignIn }),
        App: createBottomTabNavigator(
          {
            Lista: {
              screen: createSwitchNavigator({ ListaEmpresas, VerEmpresa }),
              navigationOptions: {
                tabBarVisible: true,
                tabBarLabel: 'Lista Empresas',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="home" size={20} color={tintColor} />
                ),
              },
            },
            FiltroEmpresa,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: '#295e80',
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
