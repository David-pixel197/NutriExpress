import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useFonts } from 'expo-font';
import MenuBottom from './components/MenuBottom';
import { useNavigation } from '@react-navigation/native';
import { MaisPedidos, MaisRapidos, Promocoes } from './Produtos';

export default function Home (){
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(false);
  const [fontsLoaded] = useFonts({
    Inter: require('./assets/static/Inter_18pt-Bold.ttf'),
  });
  if (!fontsLoaded) return null;
  const screenHeight = Dimensions.get('window').height

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
      <View style={styles.Header}>
      <Text style={{color: '#fff', position: 'absolute', top: 15, left: -15,}}>Rua, 100 ▼</Text>
      <View style={{backgroundColor: '#fff', height: 45, width: 45, borderRadius: '100%', position: 'absolute', top: 5, right: -20, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => {navigation.navigate('Carrinho');}}>
          <Image 
            source={require('./assets/card.png')} 
            style={{ width: 30, height: 30, tintColor: '#000' }} 
          />
        </TouchableOpacity>
      </View>
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
      <View
          style={[
            styles.Section1,
            expanded && {
              height: screenHeight,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              bottom: 0,
              top: 0,
              position: 'absolute',
              zIndex: 10,
            }
          ]}
        >
        <ScrollView showsVerticalScrollIndicator={false} onScrollBeginDrag={() => setExpanded(true)}>
          {expanded && (
          <Text
            style={{
              textAlign: 'right',
              fontWeight: 'bold',
              fontSize: 16,
              color: '#007AFF',
              marginBottom: 10,
              marginTop: 20,
              marginRight: 20,
            }}
            onPress={() => setExpanded(false)}
          >
            Fechar▼
          </Text>
          )}
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
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {MaisPedidos.map((item) => (
              <TouchableOpacity key={item.id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',
              paddingHorizontal: 40, marginBottom: 20}} onPress={() => {navigation.navigate('InfoProdutos', {produto: {
                  urlProduto: item.id, nomeProduto: item.nome, precoProduto: item.preco
              }});}}>
                <Image source={item.urlImagem} style={{width: 150, height: 90, borderRadius: 10}} />
                <View style={{ marginLeft: 20}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.nome}</Text>
                  <Text style={{fontSize: 15, fontWeight: 200, marginLeft: 10}}>{item.tempo}</Text>
                  <Text style={{fontSize: 15, fontWeight: 400, color: '#368212', marginLeft: 10}}>{item.preco}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={{fontSize:20, marginTop: 10, marginBottom: 5, marginLeft: 20, fontWeight: 'bold'}}>Mais Rápidos ⏳</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {MaisRapidos.map((item) => (
              <TouchableOpacity key={item.id} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center',
              paddingHorizontal: 40, marginBottom: 20}} onPress={() => {navigation.navigate('InfoProdutos', {produto: {
                urlProduto: item.id, nomeProduto: item.nome, precoProduto: item.preco
              }});}}>
                <Image source={item.urlImagem} style={{width: 150, height: 90, borderRadius: 10}} />
                <View style={{ marginLeft: 20}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.nome}</Text>
                  <Text style={{fontSize: 15, fontWeight: 200, marginLeft: 10}}>{item.tempo}</Text>
                  <Text style={{fontSize: 15, fontWeight: 400, color: '#368212', marginLeft: 10}}>{item.preco}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={{fontSize:20, marginTop: 10, marginBottom: 5, marginLeft: 20, fontWeight: 'bold'}}>Promoções 🤑</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {Promocoes.map((item) => (
            <TouchableOpacity key={item.id} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center',
            paddingHorizontal: 40, marginBottom: 20}} onPress={() => {navigation.navigate('InfoProdutos', {produto: {
                urlProduto: item.id, nomeProduto: item.nome, precoProduto: item.preco
            }});}}>
              <Image source={item.urlImagem} style={{width: 150, height: 90, borderRadius: 10}} />
              <View style={{ marginLeft: 20}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.nome}</Text>
                <Text style={{fontSize: 15, fontWeight: 200, marginLeft: 10}}>{item.tempo}</Text>
                <Text style={{fontSize: 15, fontWeight: 400, color: '#368212', marginLeft: 10}}>{item.preco}</Text>
              </View>
            </TouchableOpacity>
          ))}
          </ScrollView>
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