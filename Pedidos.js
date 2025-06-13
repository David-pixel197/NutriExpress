import { 
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import MenuBottom from './components/MenuBottom';
import { useNavigation } from '@react-navigation/native';

export default function Pedidos({ action }) {
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 40, marginBottom: 20}}>Meus Pedidos</Text>
      <View style={{ backgroundColor: '#11A2E0', width: '90%', alignItems: 'center', paddingVertical: 5, borderRadius: 5, opacity: 0.37,
        flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, paddingHorizontal: 10
      }}>
        <Text style={{color: '#084A79', marginLeft: '34%'}}>Ver meus cupons</Text>
        <Text style={{color: '#084A79', fontSize: 20}}>▸</Text>
      </View>
      <ScrollView style={{width: '100%', marginLeft: 20}}>
      <TouchableOpacity style={[styles.Item_1, {marginTop: 20}]} onPress={() => {navigation.navigate('PaginaPedido');}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{marginLeft: 10, alignItems: 'center'}}>
            <Text style={{fontSize: 16, marginTop: 10, fontWeight: 'bold'}}>Salada Simples</Text>
            <Image source={require('./assets/salada.png')} style={{width: 122, height: 80, borderRadius: 20}} />
          </View>
          <View>
            <View style={styles.Status}>
              <Text style={{fontSize: 12, marginTop: 10}}>✅ Pedido processado - N° 9999</Text>
              <Text style={{fontSize: 12}}>✅ Em produção...</Text>
              <Text style={{fontSize: 12, opacity: 0}}>✅ Saiu para entrega</Text>
              <Text style={{fontSize: 12, opacity: 0}}>✅ Seu pedido foi entregue. Aproveite</Text>
            </View>
          </View>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '95%', paddingHorizontal: 10}} >
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#11447D', marginLeft: 10, marginTop: 10}}>Ajuda</Text>
          <Text style={{fontSize: 16, color: '#000', marginLeft: 10, marginTop: 10}}>Avaliar</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Item_1} onPress={() => {navigation.navigate('PaginaPedido');}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{marginLeft: 10, alignItems: 'center'}}>
            <Text style={{fontSize: 16, marginTop: 10, fontWeight: 'bold'}}>Feijoada Fit</Text>
            <Image source={require('./assets/Feijoada.jpeg')} style={{width: 122, height: 80, borderRadius: 20}} />
          </View>
          <View>
            <View style={styles.Status}>
              <Text style={{fontSize: 12, marginTop: 10}}>✅ Pedido processado - N° 9999</Text>
              <Text style={{fontSize: 12}}>✅ Em produção...</Text>
              <Text style={{fontSize: 12}}>✅ Saiu para entrega</Text>
              <Text style={{fontSize: 12}}>✅ Seu pedido foi entregue. Aproveite</Text>
            </View>
          </View>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '95%', paddingHorizontal: 10}} >
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#11447D', marginLeft: 10, marginTop: 10}}>Comprar novamente</Text>
          <Text style={{fontSize: 16, color: '#000', marginLeft: 10, marginTop: 10}}>⭐ 4,5</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Item_1} onPress={() => {navigation.navigate('PaginaPedido');}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{marginLeft: 10, alignItems: 'center'}}>
            <Text style={{fontSize: 16, marginTop: 10, fontWeight: 'bold'}}>Salada Completa</Text>
            <Image source={require('./assets/Prato_2.jpeg')} style={{width: 122, height: 80, borderRadius: 20}} />
          </View>
          <View>
            <View style={styles.Status}>
              <Text style={{fontSize: 12, marginTop: 10}}>✅ Pedido processado - N° 9999</Text>
              <Text style={{fontSize: 12}}>✅ Em produção...</Text>
              <Text style={{fontSize: 12}}>✅ Saiu para entrega</Text>
              <Text style={{fontSize: 12}}>✅ Seu pedido foi entregue. Aproveite</Text>
            </View>
          </View>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '95%', paddingHorizontal: 10}} >
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#11447D', marginLeft: 10, marginTop: 10}}>Comprar novamente</Text>
          <Text style={{fontSize: 16, color: '#000', marginLeft: 10, marginTop: 10}}>⭐ 3</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Item_1} onPress={() => {navigation.navigate('PaginaPedido');}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{marginLeft: 10, alignItems: 'center'}}>
            <Text style={{fontSize: 16, marginTop: 10, fontWeight: 'bold'}}>Açai Tradicional</Text>
            <Image source={require('./assets/Acai.jpeg')} style={{width: 122, height: 80, borderRadius: 20}} />
          </View>
          <View>
            <View style={styles.Status}>
              <Text style={{fontSize: 12, marginTop: 10}}>✅ Pedido processado - N° 9999</Text>
              <Text style={{fontSize: 12}}>✅ Em produção...</Text>
              <Text style={{fontSize: 12}}>✅ Saiu para entrega</Text>
              <Text style={{fontSize: 12}}>✅ Seu pedido foi entregue. Aproveite</Text>
            </View>
          </View>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '95%', paddingHorizontal: 10}} >
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#11447D', marginLeft: 10, marginTop: 10}}>Comprar novamente</Text>
          <Text style={{fontSize: 16, color: '#000', marginLeft: 10, marginTop: 10}}>⭐ 5</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Item_1} onPress={() => {navigation.navigate('PaginaPedido');}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{marginLeft: 10, alignItems: 'center'}}>
            <Text style={{fontSize: 16, marginTop: 10, fontWeight: 'bold'}}>Hambúrguer</Text>
            <Image source={require('./assets/Hamburger.jpeg')} style={{width: 122, height: 80, borderRadius: 20}} />
          </View>
          <View>
            <View style={styles.Status}>
              <Text style={{fontSize: 12, marginTop: 10}}>✅ Pedido processado - N° 9999</Text>
              <Text style={{fontSize: 12}}>✅ Em produção...</Text>
              <Text style={{fontSize: 12}}>✅ Saiu para entrega</Text>
              <Text style={{fontSize: 12}}>✅ Seu pedido foi entregue. Aproveite</Text>
            </View>
          </View>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '95%', paddingHorizontal: 10}} >
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#11447D', marginLeft: 10, marginTop: 10}}>Comprar novamente</Text>
          <Text style={{fontSize: 16, color: '#000', marginLeft: 10, marginTop: 10}}>⭐ 4,1</Text>
        </View>
      </TouchableOpacity>
      </ScrollView>
      <MenuBottom action='pedidos' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  Item_1: {
    width: '95%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 5,
    marginBottom: 10,
    paddingBottom: 10,
  },
  Status: {
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(0, 0, 0, 0.2)',
    paddingLeft: 10,
    marginTop: 20,
    paddingBottom: 20,
    marginRight: 20
  }
})