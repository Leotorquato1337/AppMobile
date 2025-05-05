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
import { MaterialIcons } from '@expo/vector-icons'; // Ícone nativo do Expo

export default function TelaServicos() {
  const navigation = useNavigation();

const servicos = [
  {
    id: 1,
    nome: 'Marcos Oliveira',
    descricao:
      '"Contratei a reforma do banheiro e gostei muito do resultado. Serviço bem feito, dentro do prazo e com ótimo acabamento. Recomendo!"',
    data: '15/02/2025',
    imagem:
      'https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg?semt=ais_hybrid&w=740',
  },
  {
    id: 2,
    nome: 'Juliana Martins',
    descricao:
      '"A pintura da minha casa ficou excelente! Tudo foi feito com organização, sem sujeira e com muito capricho. Super satisfeita!"',
    data: '02/03/2025',
    imagem:
      'https://tudocommoda.com/wp-content/uploads/2022/01/pessoa-interessante.png',
  },
  {
    id: 3,
    nome: 'Rafael Costa',
    descricao:
      '"A instalação do ar-condicionado foi rápida e sem complicações. Profissionais pontuais e cuidadosos. Funcionando perfeitamente!"',
    data: '18/03/2025',
    imagem:
      'https://img.cdndsgni.com/preview/12161345.jpg',
  },
  {
    id: 4,
    nome: 'Bruno Fernandes',
    descricao:
      '"Solicitei uma limpeza de caixa d’água e o serviço foi muito bem executado. Equipe cuidadosa, com equipamentos adequados e tudo limpo no final."',
    data: '22/03/2025',
    imagem:
      'https://imagenes.elpais.com/resizer/v2/6TE7TL7D4YWZFV2TFRSGNGN6JE.jpg?auth=b62b598b1761e3f9c435adf78f2ba071af12fcb790c86d7b78028276d2d2bcfe&width=414',
  },
  {
    id: 5,
    nome: 'Daniela Lopes',
    descricao:
      '"Fiz manutenção elétrica com eles e me surpreendi. Resolveram um problema antigo em poucas horas. Educados, rápidos e confiáveis."',
    data: '27/03/2025',
    imagem:
      'https://i0.wp.com/mariamandarino.com.br/wp-content/uploads/2024/05/4-19.webp?resize=1140%2C641&ssl=1',
  },
  {
    id: 6,
    nome: 'Thiago Mendes',
    descricao:
      '"Contratei para montar móveis no meu apartamento. Tudo foi montado com precisão e ainda deram dicas de posicionamento. Profissionais nota 10!"',
    data: '03/04/2025',
    imagem:
      'https://www.algar.com.br/wp-content/uploads/2019/03/008-praticas-e-tendencias_inovacao_veja-o-que-podemos-aprender-com-empreendedores-norte-americanos-1024x540.png',
  },
  {
    id: 7,
    nome: 'Fernanda Silva',
    descricao:
      '"O serviço de jardinagem foi excelente. Meu quintal parecia abandonado e agora parece novo. Muito profissionais e atenciosos!"',
    data: '08/04/2025',
    imagem:
      'https://dentistaubatuba.com.br/wp-content/uploads/2021/06/o-que-as-pessoas-bonitas-tem-em-comum-2.jpg',
  },
  {
    id: 8,
    nome: 'Carlos Brito',
    descricao:
      '"Pedi a instalação de câmeras de segurança e fiquei impressionado com o cuidado e a paciência dos técnicos. Recomendo totalmente!"',
    data: '12/04/2025',
    imagem:
      'https://st3.depositphotos.com/4233795/31741/i/450/depositphotos_317418898-stock-photo-portrait-of-smiling-handsome-sexy.jpg',
  },
];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} color="#007796" />
      </TouchableOpacity>

      <Text style={styles.title}>Opiniões dos Clientes</Text>

      <ScrollView contentContainerStyle={styles.serviceList}>
        {servicos.map((servico) => (
          <View key={servico.id} style={styles.serviceCard}>
            <Image source={{ uri: servico.imagem }} style={styles.serviceImage} />
            <View style={styles.serviceDetails}>
              <Text style={styles.serviceName}>{servico.nome}</Text>
              <Text style={styles.serviceDescription}>{servico.descricao}</Text>
              <Text style={styles.serviceDate}>{`Data: ${servico.data}`}</Text>
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
    marginLeft: 10,
    marginTop: 30,
  },
});
