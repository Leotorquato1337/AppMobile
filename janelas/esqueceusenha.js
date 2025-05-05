import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../factory/firebase'; // usa o auth que você exportou

export default function EsqueciMinhaSenha() {
  const [email, setEmail] = React.useState('');
  const navigation = useNavigation();

  function handleResetPassword() {
    if (!email) {
      Alert.alert('Erro', 'Por favor, insira seu e-mail.');
      return;
    }

    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert(
          'Sucesso',
          'Instruções para redefinição de senha foram enviadas para seu e-mail.'
        );
        navigation.goBack();
      })
      .catch((error) => {
        console.log('Erro ao tentar redefinir a senha:', error); // Adicionando log para debugar o erro
        if (error.code === 'auth/user-not-found') {
          Alert.alert('Erro', 'Nenhum usuário encontrado com esse e-mail.');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Erro', 'E-mail inválido.');
        } else {
          Alert.alert('Erro', 'Ocorreu um erro. Tente novamente.');
        }
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>

      <View style={styles.form}>
        <Text style={styles.header}>Esqueci Minha Senha</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="gray"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Enviar E-mail de Redefinição</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 0,
    paddingHorizontal: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: '#007796',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    marginTop: 50,
    padding: 30,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007796',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
