import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import conexaotabelas from '../factory/firebase'; // Certifique-se de importar corretamente
import { MaterialIcons } from '@expo/vector-icons'; // Importando o MaterialIcons



export default function SuporteScreen() {
  const navigation = useNavigation();
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarMensagem = () => {
    if (!assunto || !mensagem) {
      Alert.alert('Erro', 'Preencha todos os campos antes de enviar.');
      return;
    }

    conexaotabelas
      .collection('suporte')
      .add({
        assunto: assunto,
        mensagem: mensagem,
        data: new Date().toISOString(),
      })
      .then(() => {
        Alert.alert('Sucesso', 'Sua mensagem foi enviada com sucesso!');
        setAssunto('');
        setMensagem('');
        navigation.goBack();
      })
      .catch((error) => {
        Alert.alert('Erro', 'Não foi possível enviar sua mensagem.');
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#007796" />
        </TouchableOpacity>
        <Text style={styles.title}>Fale com o Suporte</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o seu nome: "
          value={assunto}
          onChangeText={setAssunto}
        />

        <TextInput
          style={styles.input}
          placeholder="Assunto: "
          value={assunto}
          onChangeText={setAssunto}
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Escreva sua mensagem..."
          value={mensagem}
          onChangeText={setMensagem}
          multiline
          numberOfLines={6}
        />

        <TouchableOpacity style={styles.button} onPress={enviarMensagem}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#007796',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#007796',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
   backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    padding: 10,
    zIndex: 1,
    marginTop: 10,
  },
});
