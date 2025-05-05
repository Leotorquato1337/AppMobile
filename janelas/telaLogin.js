import { Linking } from 'react-native';
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  StyleSheet,
} from 'react-native';
import { auth } from '../factory/firebase'; // Certifique-se de que o firebase está sendo importado corretamente
import { MaterialIcons } from '@expo/vector-icons';
export default function LoginScreen({ navigation }) {
  const [email, pegaEmail] = useState('');
  const [senha, pegaSenha] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  // Função de login
  function Logar() {
    auth
      .signInWithEmailAndPassword(email, senha)
      .then(() => {
        navigation.navigate('termos', { userEmail: email });
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          alert('Usuário não encontrado');
        } else if (error.code === 'auth/wrong-password') {
          alert('Senha incorreta. Verifique sua senha e tente novamente.');
        } else if (error.code === 'auth/invalid-email') {
          alert('Email inválido');
        } else {
          alert('E-mail ou senha inválidos. Verifique suas credenciais e tente novamente.');
        }
      });
  }

  // Interface do Login
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo(a) ao Caça Obra</Text>

      {/* Campo de Email */}
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={pegaEmail}
        placeholder="Digite o E-mail"
        placeholderTextColor="#333"
        autoCapitalize="none"
      />

      {/* Campo de Senha */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={pegaSenha}
          placeholder="Senha"
          placeholderTextColor="#333"
          secureTextEntry={!isPasswordVisible} // Exibe ou oculta a senha
        />
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={styles.eyeIcon}>
          <MaterialIcons
            name={isPasswordVisible ? 'visibility-off' : 'visibility'}
            size={24}
            color="#007796"
          />
        </TouchableOpacity>
      </View>

      {/* Botão de Login */}
      <TouchableOpacity style={styles.loginButton} onPress={Logar}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Link para cadastro de novo usuário */}
      <TouchableOpacity
        style={styles.registerLink}
        onPress={() => navigation.navigate('cadCliente')}>
        <Text style={styles.registerText}>Cadastre-se</Text>
      </TouchableOpacity>

      {/* Link para cadastro de funcionário */}
      <TouchableOpacity
        style={styles.registerLink}
        onPress={() => navigation.navigate('cadFuncionario')}>
        <Text style={styles.registerText}>Trabalhe conosco</Text>
      </TouchableOpacity>

      {/* Link para a recuperação de senha */}
      <TouchableOpacity
        style={styles.registerLink}
        onPress={() => navigation.navigate('esqueceusenha')}>
        <Text style={styles.registerText}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  registerLink: {
    alignItems: 'center',
    marginVertical: 5,
  },
  registerText: {
    color: '#007796',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#007796',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
    passwordContainer: {
    position: 'relative',
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '40%',
    transform: [{ translateY: -12 }], 
  },
});
