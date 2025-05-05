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

export default function FAQ() {
  const navigation = useNavigation();

  const faqData = [
    {
      question: 'Como posso criar uma conta?',
      answer:
        'Para criar uma conta, clique em "Cadastrar", preencha seus dados e aceite os Termos de Uso e Política de Privacidade.',
    },
    {
      question: 'Como posso redefinir minha senha?',
      answer:
        'Se você esqueceu sua senha, altere a senha no seu perfil ou através do botão "Esqueci minha senha" na tela de login',
    },
    {
      question: 'Quais são os métodos de pagamento aceitos?',
      answer:
        'Aceitamos pagamento por cartão de débito, cartão de crédito, PIX ou boleto bancário.',
    },
    {
      question: 'Como posso entrar em contato com o suporte?',
      answer:
        'Você pode entrar em contato com nosso suporte através do e-mail: suporte@cacaobras.com ou pelo telefone: (11) 95649-2837.',
    },
    {
      question: 'Como posso atualizar meus dados cadastrais?',
      answer:
        'Para atualizar seus dados, vá até a seção "Perfil" no menu, clique em "Editar" e altere as informações necessárias.',
    },
    {
      question: 'Como posso atualizar meus dados cadastrais?',
      answer:
        'Para atualizar seus dados, vá até a seção "Perfil" no menu, clique em "Editar" e altere as informações necessárias.',
    },
    {
      question: 'É seguro usar o app?',
      answer:
        'Sim! Nosso aplicativo utiliza criptografia de ponta para garantir a segurança das suas informações pessoais e financeiras. Seus dados estão sempre protegidos.',
    },
    {
      question: 'Como meus dados são protegidos?',
      answer:
        'Utilizamos protocolos de segurança avançados, como criptografia SSL, para garantir que suas informações não sejam acessadas por terceiros não autorizados. Seus dados são armazenados de forma segura em servidores protegidos.',
    },
    {
      question: 'Vocês compartilham minhas informações com terceiros?',
      answer:
        'Não, seus dados são privados e não compartilhamos suas informações pessoais com terceiros, exceto quando exigido por lei ou com seu consentimento expresso.',
    },
    {
      question: 'Como posso excluir minha conta?',
      answer:
        'Se você deseja excluir sua conta, entre em contato com o suporte via e-mail ou pelo telefone. Após a confirmação, seu perfil será removido permanentemente.',
    },
    {
      question: 'O app é compatível com meu dispositivo?',
      answer:
        'Nosso aplicativo é compatível com dispositivos Android e iOS, desde que tenham a versão mais recente do sistema operacional. Verifique na loja de aplicativos para mais detalhes.',
    },
    
  ];

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} color="#007796" />
      </TouchableOpacity>

      <ScrollView style={styles.faqContainer}>
        <Text style={styles.header}>Dúvidas Frequentes</Text>

        {faqData.map((item, index) => (
          <View key={index} style={styles.faqItem}>
            <Text style={styles.question}>{item.question}</Text>
            <Text style={styles.answer}>{item.answer}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
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
  faqContainer: {
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
  faqItem: {
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007796',
  },
  answer: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
  },
});
