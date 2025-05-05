
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
import { MaterialIcons } from '@expo/vector-icons';

export default function TelaServicos() {
  const navigation = useNavigation();

  const servicos = [
    {
      id: 1,
      nome: 'Reforma de Banheiro',
      descricao: 'Troca de azulejos, reparo em encanamento e pintura.',
      data: '15/02/2025',
      preco: 4200.0,
      imagem:
        'https://arquitetodebolso.com.br/wp-content/uploads/2024/04/quanto-custa-reformar-um-banheiro.jpeg',
    },
    {
      id: 2,
      nome: 'Pintura de Casa',
      descricao: 'Pintura interna e externa da casa.',
      data: '02/03/2025',
      preco: 2500.0,
      imagem:
        'https://www.itvurbanismo.com.br/wp-content/uploads/2021/08/foto-1024x512.jpg',
    },
    {
      id: 3,
      nome: 'Instalação de Ar Condicionado',
      descricao: 'Instalação de ar condicionado no quarto principal.',
      data: '18/03/2025',
      preco: 350.0,
      imagem:
        'https://static.webarcondicionado.com.br/blog/uploads/2019/11/post-cuidados-com-o-ar-no-quarto-600X300.png',
    },
    {
      id: 4,
      nome: 'Manutenção de Jardim',
      descricao:
        'Cuidados com o jardim, incluindo poda, adubação e controle de pragas.',
      data: '05/05/2025',
      preco: 300.0,
      imagem:
        'https://toyama.com.br/wp-content/uploads/2023/09/Profissao-Jardineiro-A-qualidade-Toyama-para-o-cuidado-com-o-jardim-1.jpg',
    },
    {
      id: 5,
      nome: "Limpeza de Caixa d'Água",
      descricao:
        "Higienização completa da caixa d'água para garantir a qualidade da água.",
      data: '12/05/2025',
      preco: 180.0,
      imagem:
        'https://www.eccocleandedetizacao.com.br/imagens-midia/informacoes/limpeza-caixa-dagua-sp-02.jpg',
    },
    {
      id: 6,
      nome: 'Dedetização',
      descricao: 'Eliminação de pragas urbanas como baratas, formigas e ratos.',
      data: '20/05/2025',
      preco: 250.0,
      imagem:
        'https://kiper.com.br/wp-content/uploads/lei-de-dedetizacao-em-condominio.jpg',
    },
    {
      id: 7,
      nome: 'Instalação Elétrica',
      descricao: 'Instalação de tomadas, interruptores e revisão elétrica.',
      data: '25/05/2025',
      preco: 450.0,
      imagem:
        'https://inpolpolimeros.com.br/wp-content/uploads/2021/01/instalacao-eletrica-segura-1080x675.jpg',
    },
    {
      id: 8,
      nome: 'Montagem de Móveis',
      descricao: 'Montagem de guarda-roupas, camas, racks e outros móveis.',
      data: '30/05/2025',
      preco: 200.0,
      imagem:
        'https://conteudo.solutudo.com.br/wp-content/uploads/2022/11/Montagem-de-Moveis.png',
    },
    {
      id: 9,
      nome: 'Instalação de Ventilador de Teto',
      descricao: 'Instalação segura e eficiente de ventiladores de teto.',
      data: '03/06/2025',
      preco: 150.0,
      imagem:
        'https://blog.chatuba.com.br/wp-content/uploads/2022/12/instalar-ventilador-de-teto-1200x675.jpg',
    },
    {
      id: 10,
      nome: 'Limpeza Pós-Obra',
      descricao: 'Limpeza detalhada após reformas ou construções.',
      data: '10/06/2025',
      preco: 700.0,
      imagem:
        'https://empresasdeterceirizacao.com.br/wp-content/uploads/2024/06/limpeza-pos-obra-1.jpg',
    },
    {
      id: 11,
      nome: 'Troca de Piso',
      descricao:
        'Remoção e instalação de pisos cerâmicos, vinílicos ou laminados.',
      data: '18/06/2025',
      preco: 3500.0,
      imagem:
        'https://www.showdetelhas.com.br/adm/upload/show-de-telhas-167760694763fe402350d1d.jpg',
    },
    {
      id: 12,
      nome: 'Impermeabilização de Telhado',
      descricao: 'Aplicação de produtos para evitar infiltrações e vazamentos.',
      data: '25/06/2025',
      preco: 2800.0,
      imagem:
        'https://api.aecweb.com.br/tematico/img_figuras/impermeabilizacao-de-telhado-060323._Olho%24%240.webp',
    },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} color="#007796" />
      </TouchableOpacity>

      <Text style={styles.title}>Serviços Disponíveis</Text>

      <ScrollView contentContainerStyle={styles.serviceList}>
        {servicos.map((servico) => (
          <TouchableOpacity
            key={servico.id}
            style={styles.serviceCard}
            onPress={() => navigation.navigate('checkout', { servico })}>
            <Image
              source={{ uri: servico.imagem }}
              style={styles.serviceImage}
            />
            <View style={styles.serviceDetails}>
              <Text style={styles.serviceName}>{servico.nome}</Text>
              <Text style={styles.serviceDescription}>{servico.descricao}</Text>
              <Text style={styles.serviceDate}>
                {`Data: ${servico.data}  |  Preço: R$ ${servico.preco.toFixed(
                  2
                )}`}
              </Text>
            </View>
          </TouchableOpacity>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  serviceList: {
    paddingBottom: 20,
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    elevation: 5,
    marginBottom: 20,
    overflow: 'hidden',
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
    marginTop: 30,
  },
});
