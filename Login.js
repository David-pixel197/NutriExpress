import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Login({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigation.navigate('Prefer');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/LogoNutriExpress.png')}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.section_1}>
        <Text style={styles.label}>LOGIN</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu login..."
          placeholderTextColor="#ccc"
          value={firstName}
          onChangeText={setFirstName}
        />

        <Text style={styles.label}>SENHA</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputSenha}
            placeholder="Digite sua senha..."
            placeholderTextColor="#ccc"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? 'eye' : 'eye-off'}
              size={22}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.esqueciSenha}>Esqueci minha senha</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#2DBE60' }]}
            onPress={handleLogin}>
            <Text style={styles.buttonText}>Logar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.noAcount} statusBarTranslucent={true}>
        <Text style={styles.cadastrar}>
          Não tem uma conta?
          <Text style={styles.underCad}> Cadastre aqui</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001B3D', // fundo sólido (azul escuro baseado na marca)
    alignItems: 'center',
    paddingTop: 130,
  },
  section_1: {
    width: '100%',
    paddingRight: 15,
    paddingLeft: 15,
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: 'white',
    marginBottom: 20,
    borderRadius: 5,
  },
  inputWrapper: {
    position: 'relative',
    justifyContent: 'center',
    width: '100%',
  },
  inputSenha: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: 'white',
    marginBottom: 20,
    borderRadius: 5,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 9,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  esqueciSenha: {
    color: 'rgba(255, 255, 255, 0.7)',
    paddingBottom: 10,
    textDecorationLine: 'underline',
    paddingRight: '55%',
    cursor: 'pointer',
  },
  noAcount: {
    width: '100%',
    backgroundColor: '#11447D',
    padding: 18,
    textAlign: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  cadastrar: {
    color: 'white',
    paddingBottom: 10,
  },
  underCad: {
    textDecorationLine: 'underline',
    color: '#2DBE60',
    cursor: 'pointer',
    paddingLeft: 3,
    left: 5,
  },
});
