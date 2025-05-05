import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';
import conexaotabelas from '../factory/firebase'; // mesma instância usada no cadastro
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; // Importando o MaterialIcons
export default function ConfiguracoesNotificacaoScreen() {
  const route = useRoute();
  const emailUsuario = route.params?.email; // pegando o e-mail passado via navegação

  const [notificacoesAtivas, setNotificacoesAtivas] = useState(true);
  const [somNotificacao, setSomNotificacao] = useState(true);
  const [tipoNotificacao, setTipoNotificacao] = useState('email');
  const navigation = useNavigation();
  const toggleNotificacoes = () => {
    setNotificacoesAtivas((prevState) => !prevState);
  };

  const toggleSomNotificacao = () => {
    setSomNotificacao((prevState) => !prevState);
  };

  const CadastrarNotificacao = () => {
    if (!emailUsuario) {
      Alert.alert('Erro', 'E-mail do usuário não encontrado.');
      return;
    }

    const dadosNotificacao = {
      notificacoesAtivas: notificacoesAtivas,
      somNotificacao: somNotificacao,
      tipoNotificacao: tipoNotificacao,
    };

    // Busca o documento do cliente pelo e-mail e atualiza os dados
    conexaotabelas
      .collection('cadCliente')
      .where('email', '==', emailUsuario)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const docRef = querySnapshot.docs[0].ref;

          docRef
            .update(dadosNotificacao)
            .then(() => {
              Alert.alert('Sucesso', 'Configurações salvas com sucesso!');
            })
            .catch((error) => {
              Alert.alert('Erro', 'Erro ao atualizar: ' + error.message);
            });
        } else {
          Alert.alert('Erro', 'Usuário não encontrado no banco de dados.');
        }
      })
      .catch((error) => {
        Alert.alert('Erro', 'Erro ao buscar usuário: ' + error.message);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} color="#007796" />
      </TouchableOpacity>
      <Text style={styles.header}>Configurações de Notificação</Text>

      <View style={styles.option}>
        <Text style={styles.optionText}>Notificações</Text>
        <Switch value={notificacoesAtivas} onValueChange={toggleNotificacoes} />
      </View>

      <View style={styles.option}>
        <Text style={styles.optionText}>Som das Notificações</Text>
        <Switch value={somNotificacao} onValueChange={toggleSomNotificacao} />
      </View>

      <View style={styles.pickerContainer}>
        <Text style={styles.optionText}>Tipo de Notificação</Text>
        <Picker
          selectedValue={tipoNotificacao}
          style={styles.picker}
          onValueChange={(itemValue) => setTipoNotificacao(itemValue)}>
          <Picker.Item label="E-mail" value="email" />
          <Picker.Item label="SMS" value="sms" />
          <Picker.Item label="WhatsApp" value="whatsapp" />
          <Picker.Item label="Apenas pelo App" value="app" />
        </Picker>
      </View>

      <TouchableOpacity
        style={styles.saveButton}
        onPress={CadastrarNotificacao}>
        <Text style={styles.saveButtonText}>Salvar Configurações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#333',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
  pickerContainer: {
    marginBottom: 30,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  saveButton: {
    backgroundColor: '#007796',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
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
