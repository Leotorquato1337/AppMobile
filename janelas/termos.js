import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function TermosDeUso() {
  const [aceitou, setAceitou] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();


  const { userEmail } = route.params || {};


  const handleAceitar = () => {
    setAceitou(true);
    navigation.navigate('menu', { userEmail }); 
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Termo de Consentimento – LGPD</Text>

        <Text style={styles.termos}>
          A Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018),
          conhecida como LGPD, é uma legislação brasileira que regula as
          atividades de tratamento de dados pessoais, com o objetivo de proteger
          os direitos fundamentais de liberdade, privacidade e o livre
          desenvolvimento da personalidade da pessoa natural.
          {'\n\n'}
          Ao utilizar este aplicativo, você está ciente e concorda com o
          fornecimento e tratamento dos seguintes dados pessoais:
          {'\n'}- Nome completo
          {'\n'}- Endereço de e-mail
          {'\n'}- Número de telefone
          {'\n'}- Endereço físico (quando necessário para finalização de
          serviços)
          {'\n'}- Imagens (caso envie fotos para descrição dos serviços ou
          avaliação das obras)
          {'\n'}- Informações sobre pedidos realizados e fechamentos de serviços
          {'\n\n'}
          Esses dados são utilizados exclusivamente para:
          {'\n'}- Criação e gestão da sua conta
          {'\n'}- Comunicação entre usuários e prestadores de serviço
          {'\n'}- Agendamento e execução de serviços
          {'\n'}- Envio de notificações e atualizações sobre pedidos
          {'\n'}- Melhoria da experiência do usuário
          {'\n'}- Cumprimento de obrigações legais e regulatórias
          {'\n\n'}
          Garantimos que seus dados serão tratados com confidencialidade,
          armazenados em ambiente seguro e utilizados apenas para os fins
          mencionados. Não compartilhamos suas informações com terceiros sem o
          seu consentimento, salvo por obrigação legal ou judicial.
          {'\n\n'}
          Ao continuar utilizando o aplicativo, você declara estar ciente e de
          acordo com os termos acima, autorizando o tratamento dos seus dados
          pessoais conforme descrito neste documento.
        </Text>

        <Text style={styles.separator}>──────────────────────────────</Text>

        <Text style={styles.title}>Consent Term – LGPD</Text>

        <Text style={styles.termos}>
          The General Data Protection Law (Law No. 13.709/2018), known as LGPD,
          is a Brazilian legislation that regulates the processing of personal
          data, aiming to protect fundamental rights of freedom, privacy, and
          the free development of individuals.
          {'\n\n'}
          By using this app, you acknowledge and agree to the collection and
          processing of the following personal data:
          {'\n'}- Full name
          {'\n'}- Email address
          {'\n'}- Phone number
          {'\n'}- Physical address (when required to finalize service orders)
          {'\n'}- Images (if sent for service description or evaluation)
          {'\n'}- Information about completed service requests
          {'\n\n'}
          These data are used exclusively for:
          {'\n'}- Creating and managing your account
          {'\n'}- Communication between users and service providers
          {'\n'}- Scheduling and performing services
          {'\n'}- Sending notifications and order updates
          {'\n'}- Improving user experience
          {'\n'}- Meeting legal and regulatory obligations
          {'\n\n'}
          Your data will be treated with confidentiality and stored securely. We
          do not share your information with third parties without your consent,
          except when required by law.
          {'\n\n'}
          By continuing to use the app, you confirm your awareness and agreement
          with the above terms and authorize the processing of your personal
          data as described.
        </Text>

        <Text style={styles.separator}>──────────────────────────────</Text>

        <Text style={styles.title}>Término de Consentimiento – LGPD</Text>

        <Text style={styles.termos}>
          La Ley General de Protección de Datos Personales (Ley Nº 13.709/2018),
          conocida como LGPD, es una legislación brasileña que regula el
          tratamiento de datos personales, con el objetivo de proteger los
          derechos fundamentales de libertad, privacidad y el desarrollo libre
          de la personalidad.
          {'\n\n'}
          Al utilizar esta aplicación, usted reconoce y acepta el suministro y
          tratamiento de los siguientes datos personales:
          {'\n'}- Nombre completo
          {'\n'}- Dirección de correo electrónico
          {'\n'}- Número de teléfono
          {'\n'}- Dirección física (cuando sea necesario para finalizar
          servicios)
          {'\n'}- Imágenes (en caso de enviarlas para describir o evaluar
          servicios)
          {'\n'}- Información sobre solicitudes y servicios realizados
          {'\n\n'}
          Estos datos se utilizan exclusivamente para:
          {'\n'}- Crear y gestionar su cuenta
          {'\n'}- Comunicación entre usuarios y prestadores de servicios
          {'\n'}- Programar y ejecutar servicios
          {'\n'}- Enviar notificaciones y actualizaciones sobre pedidos
          {'\n'}- Mejorar la experiencia del usuario
          {'\n'}- Cumplir con obligaciones legales y reglamentarias
          {'\n\n'}
          Sus datos serán tratados con confidencialidad y almacenados de forma
          segura. No compartimos su información con terceros sin su
          consentimiento, salvo cuando lo exija la ley.
          {'\n\n'}
          Al continuar utilizando la aplicación, usted declara estar consciente
          y de acuerdo con los términos anteriores, y autoriza el tratamiento de
          sus datos personales según lo descrito.
        </Text>
      </ScrollView>


      <View style={styles.buttonContainer}>
        <Button
          title={aceitou ? 'Termos Aceitos' : 'Aceitar Termos'}
          onPress={handleAceitar}
          disabled={aceitou} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 50,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  termos: {
    fontSize: 16,
    lineHeight: 22,
    color: '#007796',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
