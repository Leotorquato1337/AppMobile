import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import conexaotabelas from '../factory/firebase';

const competencias = [
  { id: 1, nome: 'Reforma de Banheiro' },
  { id: 2, nome: 'Pintura de Casa' },
  { id: 3, nome: 'Instalação de Ar Condicionado' },
  { id: 4, nome: 'Manutenção de Jardim' },
  { id: 5, nome: 'Paisagismo' },
  { id: 6, nome: 'Instalação de Irrigação' },
  { id: 7, nome: 'Reforma Hidráulica' },
  { id: 8, nome: 'Reparo de Fiação Elétrica' },
  { id: 9, nome: 'Instalação de Iluminação' },
  { id: 10, nome: 'Eletricista Residencial' },
  { id: 11, nome: 'Troca de Lâmpadas e Reatores' },
  { id: 12, nome: 'Instalação de Cerca Elétrica' },
  { id: 13, nome: 'Limpeza de Calhas' },
  { id: 14, nome: 'Instalação de Luz Solar' },
  { id: 15, nome: 'Reparos de Telhado' },
  { id: 16, nome: 'Montagem de Móveis' },
];

function CadastroCliente() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [detalhes, setDetalhes] = useState('');
  const [telefone, setTelefone] = useState('');
  const [competenciasSelecionadas, setCompetenciasSelecionadas] = useState([]);
  const navigation = useNavigation();

  const handleCompetenciaChange = (competencia) => {
    setCompetenciasSelecionadas((prev) =>
      prev.includes(competencia)
        ? prev.filter((item) => item !== competencia)
        : [...prev, competencia]
    );
  };

  function inserirCliente() {
    if (!nome || !email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    conexaotabelas.collection('cadFuncionario').add({
      nome,
      email,
      senha,
      competencias: competenciasSelecionadas,
      detalhes,
      telefone,
    })
    .then(() => {
      setNome('');
      setEmail('');
      setSenha('');
      setDetalhes('');
      setTelefone('');
      setCompetenciasSelecionadas([]);
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso');
      navigation.goBack();
    })
    .catch((error) => {
      Alert.alert('Erro', 'Erro ao cadastrar: ' + error.message);
    });
  }

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Botão de Voltar no topo */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Faça parte do nosso time:</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="gray"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="gray"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="gray"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Telefone"
          placeholderTextColor="gray"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Selecione suas Competências</Text>
        <View style={styles.checkboxContainer}>
          {competencias.map((item) => (
            <View key={item.id} style={styles.checkboxItem}>
              <CheckBox
                checked={competenciasSelecionadas.includes(item.nome)}
                onPress={() => handleCompetenciaChange(item.nome)}
                containerStyle={{ padding: 0, margin: 0 }}
              />
              <Text style={styles.checkboxLabel}>{item.nome}</Text>
            </View>
          ))}
        </View>

        <TextInput
          style={[styles.input, { height: 60 }]}
          placeholder="Detalhes sobre o serviço"
          placeholderTextColor="gray"
          value={detalhes}
          onChangeText={setDetalhes}
          multiline
        />
      </ScrollView>

      {/* Botões fixos no rodapé */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={inserirCliente}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    marginTop: 60,
    marginLeft: 20,
  },
  backButtonText: {
    fontSize: 18,
    color: '#007796',
  },
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    maxWidth: 400,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
    alignSelf: 'flex-start',
  },
  checkboxContainer: {
    width: '100%',
    maxWidth: 400,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: 10,
  },
  footer: {
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007796',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CadastroCliente;
