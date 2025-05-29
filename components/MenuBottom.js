import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MenuBottom ({ action }) {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <View style={styles.menuBottom}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
        <Image source={require('../assets/Inicio.png')} style={{ tintColor: action === 'inicio' ? '#6A99D7' : '#fff' ,
         width: 30, height: 45,}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Pedidos')} >
        <Image source={require('../assets/Pedidos.png')} style={{ tintColor: action === 'pedidos' ? '#6A99D7' : '#fff' ,
         width: 30, height: 45}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} >
        <Image source={require('../assets/Perfil.png')} style={{ tintColor: action === 'perfil' ? '#6A99D7' : '#fff' ,
         width: 30, height: 45}} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 15,
  },  
  menuBottom: {
    width: '100%',
    height: 60,
    backgroundColor: '#001B3D',
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingTop: 10,
  },
});