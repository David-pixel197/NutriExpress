import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useFonts } from 'expo-font';
import MenuBottom from './components/MenuBottom'

export default function Home (){
  const [fontsLoaded] = useFonts({
    Inter: require('./assets/static/Inter_18pt-Bold.ttf'),
  });
  if (!fontsLoaded) return null;
  

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
      <View style={styles.Header}>
      <Text style={{color: '#fff', position: 'absolute', top: 15, left: -15,}}>Rua, 100 ▼</Text>
          <Image 
        source={require('./assets/bell.png')} 
        style={{ width: 42, height: 45.5, position: 'absolute', top: 0, right: -30, }} 
      />
      </View>
      <Image 
        source={require('./assets/LogoNutriExpress.png')} 
        style={{ width: 200, height: 200, marginTop: 20 }} 
      />
      <TextInput
      style={styles.Pesquisa}
      placeholder="🔎 Pesquisar Comidas"
      placeholderTextColor="#000"
      />
      <View style={styles.Section1}>
        <Text style={{fontSize:20, marginVertical: 10, marginLeft: 20, fontWeight: 'bold'}}>Categorias</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between',      
        gap: 5, marginHorizontal: 40}}>
          <Image 
            source={require('./assets/Card1.png')} 
            style={{ width: 147, height: 87}} 
          />
          <Image 
            source={require('./assets/Card2.png')} 
            style={{ width: 147, height: 87}} 
          />
          <Image 
            source={require('./assets/Card3.png')} 
            style={{ width: 147, height: 87}} 
          />
          <Image 
            source={require('./assets/Card4.png')} 
            style={{ width: 147, height: 87}} 
          />
        </View>
        <Text style={{fontSize:20, marginTop: 10, marginBottom: 5, marginLeft: 20, fontWeight: 'bold'}}>Mais Pedido 🔥</Text>

        <ScrollView horizontal={true}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center',
        paddingHorizontal: 40}}>
          <Image source={require('./assets/salada.png')} style={{width: 170, height: 110, borderRadius: 10}} />
          <View style={{ marginLeft: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Salada Simples</Text>
            <Text style={{fontSize: 15, fontWeight: 200, marginLeft: 10}}>10-20 min.</Text>
            <Text style={{fontSize: 15, fontWeight: 400, color: '#368212', marginLeft: 10}}>R$ 30,00</Text>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center',
        paddingHorizontal: 40}}>
          <Image source={require('./assets/salada.png')} style={{width: 170, height: 110, borderRadius: 10}} />
          <View style={{ marginLeft: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Salada Simples</Text>
            <Text style={{fontSize: 15, fontWeight: 200, marginLeft: 10}}>10-20 min.</Text>
            <Text style={{fontSize: 15, fontWeight: 400, color: '#368212', marginLeft: 10}}>R$ 30,00</Text>
          </View>
        </View>
        </ScrollView>
      <MenuBottom action='inicio' />
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001B3D',
    alignItems: 'center',
  },
  Pesquisa: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 10,
    borderRadius: 5
  },
  Section1: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 500,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 20,
  },
  Header: {
    width: '80%',
    marginTop: 50,
  },
});