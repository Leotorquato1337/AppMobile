import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  View,
  Image,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import conexaotabelas from '../factory/firebase';

export default function Checkout() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [detalhes, setDetalhes] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { servico } = route.params;

  function inserirCliente() {
    conexaotabelas.collection('pedido').add({
      nome,
      telefone,
      detalhes,
      servico: servico.nome,
      data: servico.data,
    });
    setNome('');
    setTelefone('');
    setDetalhes('');
    Alert.alert('Sucesso', 'Pedido realizado com sucesso!');
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} color="#007796" />
      </TouchableOpacity>

      <Text style={styles.title}>Finalize o seu pedido</Text>

      {/* Card do Serviço Selecionado */}
      <View style={styles.card}>
        <Image source={{ uri: servico.imagem }} style={styles.image} />
        <Text style={styles.serviceName}>{servico.nome}</Text>
        <Text style={styles.serviceDescription}>{servico.descricao}</Text>
        <Text style={styles.serviceDate}>
          {`Data: ${servico.data}  |  Preço: R$ ${servico.preco.toFixed(2)}`}
        </Text>
      </View>

      {/* Campos de entrada */}
      <TextInput
        style={styles.input}
        placeholder="Seu Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Detalhes adicionais"
        value={detalhes}
        onChangeText={setDetalhes}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={inserirCliente}>
        <Text style={styles.buttonText}>Confirmar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  backButton: {
    marginBottom: 10,
    marginTop: 30,
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 10,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
    textAlign: 'center',
  },
  serviceDate: {
    fontSize: 12,
    color: '#888',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    padding: 10,
  },
  button: {
    backgroundColor: '#007796',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
