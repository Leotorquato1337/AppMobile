import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function About() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} color="#007796" />
      </TouchableOpacity>

      <ScrollView style={styles.aboutContainer}>
        <Text style={styles.header}>Sobre o Aplicativo</Text>

        <View style={styles.infoItem}>
          <Text style={styles.label}>Nome do Aplicativo:</Text>
          <Text style={styles.infoText}>Caça Obras</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>Fabricante:</Text>
          <Text style={styles.infoText}>Desk Solutions</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>Versão:</Text>
          <Text style={styles.infoText}>1.3.3.7</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>Distribuição:</Text>
          <Text style={styles.infoText}>
            Google Play Store, Apple App Store
          </Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>Licença:</Text>
          <Text style={styles.infoText}>
            Licença proprietária. Todos os direitos reservados.
          </Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>Data de Lançamento:</Text>
          <Text style={styles.infoText}>Maio de 2025</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>Descrição:</Text>
          <Text style={styles.infoText}>
            O Caça Obras é uma plataforma inovadora desenvolvida para facilitar
            a busca e o acompanhamento de obras e reformas em andamento,
            oferecendo soluções inteligentes tanto para profissionais da área da
            construção quanto para clientes que buscam realizar obras de forma
            organizada e eficiente. Com o Caça Obras, você pode encontrar
            projetos de construção e reformas próximas a você, obter orçamentos
            detalhados e acompanhar o progresso das obras em tempo real.
          </Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>Contato:</Text>
          <Text style={styles.infoText}>leeofernaandes@gmail.com</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>Política de Privacidade:</Text>
          <Text style={styles.infoText}>
            Leia nossa política de privacidade completa em:{' '}
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('termosHamb')}>
              Política de Privacidade
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    padding: 10,
    zIndex: 1,
  },
  aboutContainer: {
    marginTop: 60,
    marginBottom: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  infoItem: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007796',
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  link: {
    color: '#007796',
    textDecorationLine: 'underline',
  },
});
