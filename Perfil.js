import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import MenuBottom from './components/MenuBottom';
import { useNavigation } from '@react-navigation/native';

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
          <Option label="Configuração da Conta" />
          <Option label="Meus Endereços" />
          <Option label="Outras Configurações" />
          <Option label="Calendários de Pedidos" />
          <Option label="Informações de Pagamento" />
          <Option label="Sair" func={() => {navigation.navigate('Login');}} />
        </View>
      </ScrollView>
      <MenuBottom action='perfil' />
    </SafeAreaView>
  );
}

const Option = ({ label, func }) => (
  <TouchableOpacity style={styles.option} onPress={func}>
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
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 2,
  },
  optionText: {
    fontSize: 18,
    color: '#001B3D',
    fontWeight: '600',
  },
});
