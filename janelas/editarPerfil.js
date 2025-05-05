import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { MaterialIcons } from '@expo/vector-icons'; // Para usar o ícone de seta

export default function EditarPerfilScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params;

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senhaAtual, setSenhaAtual] = useState(''); // Novo estado para senha atual
  const [novaSenha, setNovaSenha] = useState(''); // Novo estado para nova senha
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const snapshot = await Firebase.firestore()
          .collection('cadCliente')
          .where('email', '==', email)
          .get();

        if (!snapshot.empty) {
          const userDoc = snapshot.docs[0];
          const userData = userDoc.data();
          setNome(userData.nome);
          setTelefone(userData.telefone);
        } else {
          console.log('Nenhum usuário encontrado');
        }
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [email]);

  const atualizarPerfil = async () => {
    // Verifica se todos os campos estão preenchidos
    if (
      !nome ||
      !telefone ||
      (senhaAtual && !novaSenha) ||
      (novaSenha && !senhaAtual)
    ) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      setLoading(true);

      const userRef = Firebase.firestore().collection('cadCliente');
      const snapshot = await userRef.where('email', '==', email).get();

      if (!snapshot.empty) {
        const userDoc = snapshot.docs[0];
        await userDoc.ref.update({
          nome: nome,
          telefone: telefone,
        });
      }

      // Se o usuário fornecer senha, deve verificar a senha atual e depois atualizar a senha
      if (senhaAtual.trim() !== '' && novaSenha.trim() !== '') {
        const user = Firebase.auth().currentUser;
        const credential = Firebase.auth.EmailAuthProvider.credential(
          user.email,
          senhaAtual
        );

        // Reautenticar o usuário
        await user.reauthenticateWithCredential(credential);

        // Atualizar a senha
        await user.updatePassword(novaSenha);

        // Alerta de sucesso na troca de senha
        Alert.alert('Sucesso', 'Senha alterada com sucesso!');
      }

      // Alerta de sucesso no update de dados
      Alert.alert('Sucesso', 'Dados alterados com sucesso');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);

      // Se a senha atual estiver errada
      if (error.code === 'auth/wrong-password') {
        Alert.alert('Erro', 'Senha incorreta');
      }

      // Caso precise de reautenticação
      else if (error.code === 'auth/requires-recent-login') {
        Alert.alert(
          'Reautenticação necessária',
          'Por motivos de segurança, faça login novamente antes de alterar sua senha.'
        );
      } else {
        Alert.alert('Erro', 'Não foi possível atualizar seu perfil.');
      }
    } finally {
      setLoading(false);
    }
  };



  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007796" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} color="#007796" />
      </TouchableOpacity>

      <Text style={styles.header}>Editar Perfil</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
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
        style={styles.input}
        placeholder="Senha atual"
        value={senhaAtual}
        onChangeText={setSenhaAtual}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Nova senha"
        value={novaSenha}
        onChangeText={setNovaSenha}
        secureTextEntry
      />
      <Text style={styles.passwordPolicy}>
        🔒 Senha com no mínimo 6 caracteres, incluindo letra maiúscula,
        minúscula, número e símbolo.
      </Text>

      <Text style={styles.passwordPolicy}>
      ⚠️Nunca compartilhe sua senha com ninguém. Proteja sua conta.
      </Text>
      <TouchableOpacity style={styles.button} onPress={atualizarPerfil}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      {/* Botão de excluir conta */}
      <TouchableOpacity
        style={[styles.button, styles.deleteButton]}
        onPress={() => navigation.navigate('confirmarExclusao')}>
        <Text style={styles.buttonText}>Excluir Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007796',
    borderRadius: 6,
    textAlign: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
    justifyContent: 'center',
  },
  deleteButton: {
    backgroundColor: '#d9534f', // Cor vermelha para destaque
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  passwordPolicy: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 10,
    marginTop: -8,
  },
});
