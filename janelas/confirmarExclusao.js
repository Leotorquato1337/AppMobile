import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

export default function ConfirmarExclusaoScreen() {
  const navigation = useNavigation();
  const email = Firebase.auth().currentUser.email; // Pega o e-mail do usuário autenticado

  const excluirConta = async () => {
    Alert.alert(
      'Excluir Conta',
      'Tem certeza que deseja excluir sua conta? Essa ação não pode ser desfeita.',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            try {
              const user = Firebase.auth().currentUser;

              // Exclui os dados do usuário da coleção 'cadCliente'
              const snapshot = await Firebase.firestore()
                .collection('cadCliente')
                .where('email', '==', email)
                .get();

              if (!snapshot.empty) {
                const userDoc = snapshot.docs[0];
                await userDoc.ref.delete(); // Exclui os dados do Firestore
              }

              // Exclui a conta de autenticação
              await user.delete(); // Exclui a conta do Firebase Authentication

              Alert.alert(
                'Conta excluída',
                'Sua conta foi excluída com sucesso.'
              );
              navigation.navigate('splash'); // Redireciona o usuário para a tela anterior
            } catch (error) {
              console.error('Erro ao excluir conta:', error);
              Alert.alert('Erro', 'Não foi possível excluir sua conta.');
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Excluir Conta</Text>
      <Text style={styles.text}>
        Tem certeza de que deseja excluir sua conta? Esta ação não pode ser desfeita, e você perderá todos os dados associados à sua conta.
      </Text>
      <Text style={styles.text}>
        Se você não está mais satisfeito com o aplicativo ou se deseja fazer uma pausa, considere outras opções, como desativar as notificações ou atualizar seu perfil.
      </Text>
      <Text style={styles.text}>
        Se ainda assim quiser excluir sua conta, basta clicar no botão abaixo.
      </Text>

      <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={excluirConta}>
        <Text style={styles.buttonText}>Excluir Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.cancelText}>Cancelar</Text>
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
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: 'gray',
  },
  button: {
    backgroundColor: '#d9534f', // Cor vermelha para destaque
    borderRadius: 6,
    textAlign: 'center',
    alignItems: 'center',
    width: 200,
    height: 45,
    justifyContent: 'center',
    marginTop: 20,
  },
  deleteButton: {
    backgroundColor: '#d9534f',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    marginTop: 20,
  },
  cancelText: {
    fontSize: 16,
    color: '#007796',
  },
});
