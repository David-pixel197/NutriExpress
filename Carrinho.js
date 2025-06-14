import {
  View,
  StyleSheet,
  Text,
  Image,
    TouchableOpacity,
  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Carrinho(){
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{marginHorizontal: 20, backgroundColor: '#fff', padding: 10, width: 50, borderRadius: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => {navigation.navigate('Home');}}>
              <Image source={require('./assets/icon_left.png')} style={{width: 30, height: 30}} />
            </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', backgroundColor: '#fff', width:'70%', marginRight: 20, padding: 10, borderRadius: 10}}>
            <Text style={{fontSize: 20, fontWeight: 400}}>Rua, 100 Campo Limpo ▼</Text>
        </View>
      </View>
      <View style={styles.section_1}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Carrinho</Text>
        <View style={styles.Itens}>
            <View style={{ flexDirection: 'row'}}>
                <Image
                    source={require('./assets/Feijoada.jpeg')}
                    style={{ width: 140, height: 100, borderRadius: 10 }}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Feijoada Fit</Text>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#368212' }}>R$ 20,00</Text>
                </View>
                    <Text style={{ fontSize: 12, color: '#555', marginTop: 5 }}>Preparada com cortes magros, feijão preto rico em fibras, temperos naturais e zero excessos</Text>
                </View>
            </View>
        </View>
        <View style={styles.Itens}>
            <View style={{ flexDirection: 'row'}}>
                <Image
                    source={require('./assets/Prato_2.jpeg')}
                    style={{ width: 140, height: 100, borderRadius: 10 }}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Salada Comp.</Text>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#368212' }}>R$ 25,00</Text>
                </View>
                    <Text style={{ fontSize: 12, color: '#555', marginTop: 5 }}>Igual a salada simples, mas essa é completa.</Text>
                </View>
            </View>
        </View>
        <View style={{alignItems: 'right', width: '80%'}}>
            <Text style={{ fontSize: 18, fontWeight: 350, marginTop: 20 }}>Total do Pedido: R$ 45,00</Text>
            <Text style={{ fontSize: 18, fontWeight: 350, marginTop: 10 }}>Taxa de Entrega: R$ 5,53</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Total a Pagar: R$ 50,53</Text>
        </View>
        <View style={{alignItems: 'center', width: '80%'}}>
            <Text style={{ fontSize: 14, fontWeight: 300, marginTop: 30 }}>⏱ Previsão de 35 min</Text>
        </View>
    </View>
    <View style={styles.footer}>
        <TouchableOpacity style={styles.botoes} onPress={() => {navigation.navigate('Pedidos');}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Pedir Agora</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botoes} onPress={() => {navigation.navigate('Pedidos');}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Agendar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#001B3D',
    height: '100%',
  },
  header: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  section_1: {
    backgroundColor: '#fff',
    height: 500,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  botoes:{
    backgroundColor: '#fff',
    width: '90%',
    paddingVertical: 15,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  Itens:{
    width: '90%', 
    marginTop: 20,
    borderColor: '#000', 
    borderWidth: 0.2, 
    padding: 10, 
    borderRadius: 10, 
    boxShadow: '0 5px 5px rgba(0, 0, 0, 0.2)',
  },
});