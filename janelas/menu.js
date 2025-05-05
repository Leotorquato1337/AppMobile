import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import MenuModal from './menuModal';

export default function MenuScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { userEmail } = route.params || {}; // Pega o email vindo da rota

  const [showMenu, setShowMenu] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      <View style={styles.contentWrapper}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://system.soprojetos.com.br/data/79/content/sobrado-perfeito-projeto-de-casa.jpg',
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Serviços</Text>
            <Text style={styles.cardDescription}>Serviços Realizados</Text>
            <TouchableOpacity
              style={styles.cardButton}
              onPress={() => navigation.navigate('cadServico', { email: userEmail })}>
              <Text style={styles.cardButtonText}>Visualizar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://www.hubspot.com/hubfs/sucesso-do-cliente.jpeg',
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Clientes</Text>
            <Text style={styles.cardDescription}>Relatos e Depoimentos</Text>
            <TouchableOpacity
              style={styles.cardButton}
              onPress={() => navigation.navigate('clientes', { email: userEmail })}>
              <Text style={styles.cardButtonText}>Visualizar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://dominesuaobra.com.br/wp-content/uploads/2023/03/Como-contratar-o-pedreiro-certo-e-a-equipe-de-obra-ideal-1.jpg',
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Profissionais</Text>
            <Text style={styles.cardDescription}>Profissionais Qualificados</Text>
            <TouchableOpacity
              style={styles.cardButton}
              onPress={() => navigation.navigate('profissionais', { email: userEmail })}>
              <Text style={styles.cardButtonText}>Visualizar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => setShowMenu(true)}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/menu--v1.png' }}
            style={styles.footerButton}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('suporte', { email: userEmail })}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/78/78925.png' }}
            style={styles.footerButton}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('meuPerfil', { email: userEmail })}>
          <Image
            source={{ uri: 'https://wallpapers.com/images/hd/user-profile-placeholder-icon-1val0kp6a7ji4vsi.png' }}
            style={styles.footerButton}
          />
        </TouchableOpacity>
      </View>

      {/* Menu Modal */}
      <MenuModal
        visible={showMenu}
        onClose={() => setShowMenu(false)}
        email={userEmail}
        onNavigate={(screen) => {
          setShowMenu(false);
          navigation.navigate(screen, { email: userEmail });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: '#007796',
    paddingVertical: 20,
    alignItems: 'center',
  },
  contentWrapper: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    width: '90%',
    marginVertical: 15,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    padding: 20,
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 10,
  },
  cardButton: {
    backgroundColor: '#007796',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cardButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#007796',
    borderTopWidth: 1,
    borderColor: '#ddd',
    height: 60,
  },
  footerButton: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});
