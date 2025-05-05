import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import conexaotabelas from '../factory/firebase'; // Firestore
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';

export default function MeuPerfilScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [nome, setNome] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [email, setEmail] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageUri, setImageUri] = useState(null);
  const [rating, setRating] = useState(0);
  const emailParam = route?.params?.email;
  const selecionarImagem = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        'Permissão negada',
        'Você precisa permitir o acesso à galeria.'
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const selectedImage = result.assets[0].uri;
      setImageUri(selectedImage);

      // Atualiza o Firestore com a nova URI
      try {
        const snapshot = await conexaotabelas
          .collection('cadCliente')
          .where('email', '==', email)
          .get();

        snapshot.forEach(async (doc) => {
          await conexaotabelas.collection('cadCliente').doc(doc.id).update({
            imageUri: selectedImage,
          });
        });

        Alert.alert('Sucesso', 'Imagem de perfil atualizada!');
      } catch (error) {
        console.error('Erro ao atualizar imagem:', error);
        Alert.alert('Erro', 'Não foi possível atualizar a imagem.');
      }
    }
  };
  useEffect(() => {
    const fetchUserData = async () => {
      if (!emailParam) {
        Alert.alert('Erro', 'Email não fornecido!');
        setLoading(false);
        return;
      }

      try {
        const snapshot = await conexaotabelas
          .collection('cadCliente')
          .where('email', '==', emailParam)
          .get();

        if (!snapshot.empty) {
          snapshot.forEach((doc) => {
            const userDoc = doc.data();
            setNome(userDoc.nome);
            setEmail(userDoc.email);
            setTelefone(userDoc.telefone);
            setCpf(userDoc.cpf);
            setImageUri(userDoc.imageUri || null);
            if (userDoc.avaliacao) setRating(userDoc.avaliacao);
          });
        } else {
          Alert.alert('Erro', 'Usuário não encontrado!');
        }
      } catch (error) {
        console.error('Erro ao carregar os dados do usuário:', error);
        Alert.alert('Erro', 'Não foi possível carregar os dados do usuário');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [emailParam]);

  const enviarAvaliacao = async () => {
    if (!email || rating === 0) {
      Alert.alert('Erro', 'Selecione uma nota para avaliar.');
      return;
    }

    try {
      const snapshot = await conexaotabelas
        .collection('cadCliente')
        .where('email', '==', email)
        .get();

      if (!snapshot.empty) {
        snapshot.forEach(async (doc) => {
          await conexaotabelas.collection('cadCliente').doc(doc.id).update({
            avaliacao: rating,
          });
        });
        Alert.alert('Obrigado!', 'Sua avaliação foi enviada com sucesso.');
      } else {
        Alert.alert('Erro', 'Usuário não encontrado.');
      }
    } catch (error) {
      console.error('Erro ao enviar avaliação:', error);
      Alert.alert('Erro', 'Não foi possível enviar a avaliação.');
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007796" />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      {/* Botão de Voltar */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#007796" />
      </TouchableOpacity>

      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={selecionarImagem}>
          <Image
            source={{
              uri:
                imageUri ||
                'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
            }}
            style={styles.profileImage}
          />
        </TouchableOpacity>

        <Text style={styles.name}>{nome || 'Nome não disponível'}</Text>
        <Text style={styles.info}>E-mail: {email || '---'}</Text>
        <Text style={styles.info}>Telefone: {telefone || '---'}</Text>
        <Text style={styles.info}>Cpf: {cpf || '---'}</Text>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('editarPerfil', { email })}>
          <Icon name="edit" size={24} color="#007796" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Alert.alert('Sair da conta', 'Tem certeza que deseja sair?', [
              { text: 'Cancelar', style: 'cancel' },
              { text: 'Sair', onPress: () => navigation.navigate('splash') },
            ]);
          }}
          style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Sair da conta</Text>
        </TouchableOpacity>

        {/* AVALIAÇÃO */}
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingTitle}>Avalie o aplicativo:</Text>
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => setRating(star)}>
                <Icon
                  name={star <= rating ? 'star' : 'star-border'}
                  size={32}
                  color="#FFD700"
                />
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={enviarAvaliacao}>
            <Text style={styles.submitButtonText}>Enviar Avaliação</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007796',
  },
  info: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  editButton: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#007796',
    width: 120,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#D32F2F',
    paddingVertical: 15,
    borderRadius: 25,
    marginVertical: 20,
    marginHorizontal: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    width: 120,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  ratingContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  ratingTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007796',
    marginBottom: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#007796',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
