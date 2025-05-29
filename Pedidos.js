import { 
  View,
  StyleSheet,
  Text,
} from 'react-native';
import MenuBottom from './components/MenuBottom';

export default function Pedidos({ action }) {
  return(
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 40, marginBottom: 20}}>Meus Pedidos</Text>
      <View style={{ backgroundColor: '#11A2E0', width: '90%', alignItems: 'center', paddingVertical: 5, borderRadius: 5}}>
        <Text style={{color: '#084A79'}}>Ver meus cupons</Text>
      </View>
      <MenuBottom action='pedidos' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
})