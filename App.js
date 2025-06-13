import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login';
import Prefer from './Prefer';
import Home from './Home';
import Pedidos from './Pedidos';
import Perfil from './Perfil';
import Carrinho from './Carrinho';
import PaginaPedido from './PaginaPedido';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      >
        <Stack.Screen name="PaginaPedido" component={PaginaPedido} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Pedidos" component={Pedidos} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Prefer" component={Prefer} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
