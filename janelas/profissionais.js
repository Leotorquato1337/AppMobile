import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; // Certifique-se de ter esse pacote instalado

export default function TelaServicos() {
  const navigation = useNavigation();

  const servicos = [
  {
    id: 1,
    nome: 'Carlos Mendes',
    descricao:
      'Pedreiro de Suzano com 12 anos de experiência em alvenaria estrutural e reformas residenciais. Conhecido pela pontualidade e acabamento de qualidade.',
    data: '15/02/2025',
    imagem:
      'https://soscasacuritiba.com.br/wp-content/uploads/2023/11/como-iniciar-na-profissao-de-pedreiro.webp',
  },
  {
    id: 2,
    nome: 'Diego Silva',
    descricao:
      'Profissional de Mogi das Cruzes com 10 anos atuando em acabamento fino e assentamento de pisos. Foco em estética e resistência.',
    data: '02/03/2025',
    imagem: 'https://mapa-da-obra-producao.s3.amazonaws.com/wp-content/uploads/2024/05/Conheca-seis-especializacoes-para-pedreiros.-scaled.jpg',
  },
  {
    id: 3,
    nome: 'Luciana Alves',
    descricao:
      'Pedreira de Poá com 9 anos de experiência em reformas e manutenção predial. Trabalha com atenção aos detalhes e segurança na execução.',
    data: '18/03/2025',
    imagem:
      'https://images.adsttc.com/media/images/653a/7730/f96c/7601/7c71/a01e/newsletter/dominando-a-arte-da-construcao-aprendendo-com-os-pedreiros_3.jpg?1698330424',
  },
  {
    id: 4,
    nome: 'Fernando Rocha',
    descricao:
      'Pedreiro de Itaquaquecetuba com 11 anos em fundações e estruturas. Especialista em obras de grande porte e gerenciamento de equipes.',
    data: '21/03/2025',
    imagem:
      'https://mapa-da-obra-producao.s3.amazonaws.com/wp-content/uploads/2022/01/shutterstock_1980687086-1.png',
  },
  {
    id: 5,
    nome: 'Patrícia Gomes',
    descricao:
      'Pedreira de Ferraz de Vasconcelos com 7 anos de experiência em alvenaria decorativa e reformas criativas. Atenta a tendências e novas técnicas.',
    data: '27/03/2025',
    imagem:
      'https://media.istockphoto.com/id/474856978/pt/foto/mulher-pedreiro-com-n%C3%ADvel.jpg?s=612x612&w=0&k=20&c=vePT_RLu56CRT3IHhdlZP2RWKdeBSy7VLiwW-B9FDwQ=',
  },
  {
    id: 6,
    nome: 'Marcos Tavares',
    descricao:
      'Pedreiro de Ribeirão Pires com 13 anos no setor de construção civil. Foco em telhados, estruturas de cobertura e impermeabilização.',
    data: '03/04/2025',
    imagem:
      'https://soscasacuritiba.com.br/wp-content/uploads/2023/11/qual-nome-da-profissao-pedreiro.webp',
  },
  {
    id: 7,
    nome: 'Renata Carvalho',
    descricao:
      'Profissional de Arujá especializada em drywall, pintura e acabamento leve. 6 anos de experiência com clientes residenciais.',
    data: '08/04/2025',
    imagem:
      'https://img.freepik.com/fotos-gratis/mulher-jovem-construtor-em-uniforme-de-construcao-e-capacete-de-seguranca-olhando-o-dedo-apontando-confiante-sobre-parede-branca-isolada_141793-16092.jpg?semt=ais_hybrid&w=740',
  },
  {
    id: 8,
    nome: 'Bruno Ferreira',
    descricao:
      'Pedreiro de São Paulo com 14 anos de atuação em obras verticais e comerciais. Forte em planejamento e execução com qualidade.',
    data: '15/04/2025',
    imagem:
      'https://sika.scene7.com/is/image/sika/br-portokoll-9-ferramentas-essenciais-para-pedreiro:16-9?wid=1920&hei=1080&fit=crop%2C1',
  },
];

  return (
    <View style={styles.container}>
      {/* Botão de Voltar com ícone */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} color="#007796" />
      </TouchableOpacity>

      <Text style={styles.title}>Nossos Profissionais</Text>

      <ScrollView contentContainerStyle={styles.serviceList}>
        {servicos.map((servico) => (
          <View key={servico.id} style={styles.serviceCard}>
            <Image
              source={{ uri: servico.imagem }}
              style={styles.serviceImage}
            />
            <View style={styles.serviceDetails}>
              <Text style={styles.serviceName}>{servico.nome}</Text>
              <Text style={styles.serviceDescription}>{servico.descricao}</Text>
              <Text style={styles.serviceDate}>{`Data: ${servico.data}`}</Text>

              {/* Botão Quero contratar */}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 20,
    paddingHorizontal: 15,
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    marginLeft: 10,
  },
  serviceList: {
    paddingBottom: 20,
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    marginBottom: 20,
    overflow: 'hidden',
    borderColor: '#000',
    borderWidth:1,
  },
  serviceImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  serviceDetails: {
    padding: 15,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  serviceDate: {
    fontSize: 12,
    color: '#999',
  },
  backButton: {
    marginBottom: 10,
    marginLeft: 5,
    marginTop:30,
  },
  hireButton: {
    marginTop: 10,
    backgroundColor: '#007796',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  hireButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
