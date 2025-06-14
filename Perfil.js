import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import MenuBottom from './components/MenuBottom';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';


export default function Perfil() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('./assets/avatar.png')}
            style={styles.avatar}
          />
          <Text style={styles.name}>Nome e Sobrenome</Text>
          <Text style={styles.email}>email@exemplo.com</Text>
        </View>
        <View style={styles.optionsContainer}>
          <Option label="Configuração da Conta" iconName="settings" />
          <Option label="Meus Endereços" iconName="map-pin" />
          <Option label="Outras Configurações" iconName="sliders" />
          <Option label="Calendários de Pedidos" iconName="calendar" />
          <Option label="Informações de Pagamento" iconName="credit-card" />
          <Option label="Informações legais" iconName="file-text"/>
          <Option label="Sair" iconName="log-out" func={() => navigation.navigate('Login')} />
        </View>
      </ScrollView>
      <MenuBottom action='perfil' />
    </SafeAreaView>
  );
}

const Option = ({ label, iconName, func }) => (
  <TouchableOpacity onPress={func} style={styles.option}>
    <Icon name={iconName} size={20} color="#333" style={styles.optionIcon} />
    <Text style={styles.optionText}>{label}</Text>
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 15,
  },
  email: {
    fontSize: 16,
    color: '#bbb',
    marginTop: 5,
  },
  optionsContainer: {
    width: '90%',
  },
  option: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    color: '#001B3D',
    fontWeight: '600',
    marginLeft: 10,
  },
});
