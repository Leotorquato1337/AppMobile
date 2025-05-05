import React, { useState, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import conexaotabelas from '../factory/firebase';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MenuModal({ visible, onClose, email, onNavigate }) {
  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      if (!email) {
        setLoading(false);
        return;
      }

      try {
        const snapshot = await conexaotabelas
          .collection('cadCliente')
          .where('email', '==', email)
          .get();

        if (!snapshot.empty) {
          snapshot.forEach((doc) => {
            const userDoc = doc.data();
            setImageUri(userDoc.imageUri || null);
          });
        }
      } catch (error) {
        console.error('Erro ao buscar imagem:', error);
      } finally {
        setLoading(false);
      }
    };

    if (visible) {
      fetchImage();
    }
  }, [visible, email]);

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

        Alert.alert('Sucesso', 'Imagem atualizada com sucesso!');
      } catch (error) {
        console.error('Erro ao atualizar imagem:', error);
        Alert.alert('Erro', 'Não foi possível atualizar a imagem.');
      }
    }
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.drawerContainer}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Icon name="close" size={24} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={selecionarImagem}
            style={styles.imageContainer}>
            {loading ? (
              <ActivityIndicator size="large" color="#007796" />
            ) : (
              <Image
                source={{
                  uri:
                    imageUri ||
                    'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
                }}
                style={styles.profileImage}
              />
            )}
          </TouchableOpacity>

          <Text style={styles.username}>{email}</Text>

          <TouchableOpacity onPress={() => onNavigate('meuPerfil', { email })}>
            <Text style={styles.menuItem}>Meu Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onNavigate('cadServico')}>
            <Text style={styles.menuItem}>Serviços</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onNavigate('clientes')}>
            <Text style={styles.menuItem}>Clientes</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onNavigate('profissionais')}>
            <Text style={styles.menuItem}>Profissionais</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onNavigate('configuracoes')}>
            <Text style={styles.menuItem}>Configurações</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onNavigate('suporte')}>
            <Text style={styles.menuItem}>Suporte</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onNavigate('duvidas')}>
            <Text style={styles.menuItem}>Dúvidas Frequentes</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onNavigate('termosHamb')}>
            <Text style={styles.menuItem}>Termos de Uso</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onNavigate('sobre')}>
            <Text style={styles.menuItem}>Sobre</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  drawerContainer: {
    width: '70%',
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  username: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
    color: '#007796',
  },
  menuItem: {
    paddingVertical: 15,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});