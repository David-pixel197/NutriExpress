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
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center',
          paddingHorizontal: 40, marginBottom: 20}}>
            <Image source={require('./assets/salada.png')} style={{width: 150, height: 90, borderRadius: 10}} />
            <View style={{ marginLeft: 20}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Salada Simples</Text>
              <Text style={{fontSize: 15, fontWeight: 200, marginLeft: 10}}>10-20 min.</Text>
              <Text style={{fontSize: 15, fontWeight: 400, color: '#368212', marginLeft: 10}}>R$ 20,00 + Frete</Text>
            </View>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center',
          paddingHorizontal: 40, marginBottom: 20}}>
            <Image source={require('./assets/Prato_2.jpeg')} style={{width: 150, height: 90, borderRadius: 10}} />
            <View style={{ marginLeft: 20}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Salada Completa</Text>
              <Text style={{fontSize: 15, fontWeight: 200, marginLeft: 10}}>15-20 min.</Text>
              <Text style={{fontSize: 15, fontWeight: 400, color: '#368212', marginLeft: 10}}>R$ 25,00 + Frete</Text>
            </View>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center',
          paddingHorizontal: 40, marginBottom: 20}}>
            <Image source={require('./assets/Prato_1.jpeg')} style={{width: 150, height: 90, borderRadius: 10}} />
            <View style={{ marginLeft: 20}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Salada Premium</Text>
              <Text style={{fontSize: 15, fontWeight: 200, marginLeft: 10}}>10-30 min.</Text>
              <Text style={{fontSize: 15, fontWeight: 400, color: '#368212', marginLeft: 10}}>R$ 30,00 + Frete</Text>
            </View>
          </View>
          </ScrollView>

          <Text style={{fontSize:20, marginTop: 10, marginBottom: 5, marginLeft: 20, fontWeight: 'bold'}}>Mais Rápidos ⏳</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center',
          paddingHorizontal: 40, marginBottom: 20}}>
            <Image source={require('./assets/Acai.jpeg')} style={{width: 150, height: 90, borderRadius: 10}} />
            <View style={{ marginLeft: 20}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Açai Tradicional</Text>
              <Text style={{fontSize: 15, fontWeight: 200, marginLeft: 10}}>10-15 min.</Text>
              <Text style={{fontSize: 15, fontWeight: 400, color: '#368212', marginLeft: 10}}>R$ 15,00 + Frete</Text>
            </View>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center',
          paddingHorizontal: 40, marginBottom: 20}}>
            <Image source={require('./assets/Feijoada.jpeg')} style={{width: 150, height: 90, borderRadius: 10}} />
            <View style={{ marginLeft: 20}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Feijoada Fit</Text>
              <Text style={{fontSize: 15, fontWeight: 200, marginLeft: 10}}>15-20 min.</Text>
              <Text style={{fontSize: 15, fontWeight: 400, color: '#368212', marginLeft: 10}}>R$ 25,00 + Frete</Text>
            </View>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center',
          paddingHorizontal: 40, marginBottom: 20}}>
            <Image source={require('./assets/PF.jpeg')} style={{width: 150, height: 90, borderRadius: 10}} />
            <View style={{ marginLeft: 20}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>PF Proteico</Text>
              <Text style={{fontSize: 15, fontWeight: 200, marginLeft: 10}}>10-30 min.</Text>
              <Text style={{fontSize: 15, fontWeight: 400, color: '#368212', marginLeft: 10}}>R$ 30,00 + Frete</Text>
            </View>
          </View>
          </ScrollView>

          <Text style={{fontSize:20, marginTop: 10, marginBottom: 5, marginLeft: 20, fontWeight: 'bold'}}>Promoções 🤑</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center',
          paddingHorizontal: 40, marginBottom: 20}}>
            <Image source={require('./assets/Lasanha.jpeg')} style={{width: 150, height: 90, borderRadius: 10}} />
            <View style={{ marginLeft: 20}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Lasanha</Text>
              <Text style={{fontSize: 15, fontWeight: 200, marginLeft: 10}}>5-15 min.</Text>
              <Text style={{fontSize: 15, fontWeight: 400, color: '#368212', marginLeft: 10}}>R$ 15,00 + Frete</Text>
            </View>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center',
          paddingHorizontal: 40, marginBottom: 20}}>
            <Image source={require('./assets/Hamburger.jpeg')} style={{width: 150, height: 90, borderRadius: 10}} />
            <View style={{ marginLeft: 20}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Hambúrguer</Text>
              <Text style={{fontSize: 15, fontWeight: 200, marginLeft: 10}}>15-20 min.</Text>
              <Text style={{fontSize: 15, fontWeight: 400, color: '#368212', marginLeft: 10}}>R$ 25,00 + Frete</Text>
            </View>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center',
          paddingHorizontal: 40, marginBottom: 20}}>
            <Image source={require('./assets/Sorvete.jpeg')} style={{width: 150, height: 90, borderRadius: 10}} />
            <View style={{ marginLeft: 20}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sorvete</Text>
              <Text style={{fontSize: 15, fontWeight: 200, marginLeft: 10}}>10-30 min.</Text>
              <Text style={{fontSize: 15, fontWeight: 400, color: '#368212', marginLeft: 10}}>R$ 30,00 + Frete</Text>
            </View>
          </View>
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