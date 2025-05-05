import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  View,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { auth } from '../factory/firebase';
import conexaotabelas from '../factory/firebase';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function CadastroCliente() {
  const [email, pegaEmail] = useState('');
  const [senha, pegaSenha] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function Cadastraremail() {
    if (!isChecked) {
      alert('Você precisa aceitar os Termos de Uso e Política de Privacidade');
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, senha)
      .then(() => {
        alert('Cadastrado com sucesso');
        pegaEmail('');
        pegaSenha('');
        navigation.goBack();
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          alert('Email já existe');
        } else if (error.code === 'auth/invalid-email') {
          alert('Email inválido');
        } else {
          alert(error.message);
        }
      });

    conexaotabelas.collection('cadCliente').add({
      nome: nome,
      telefone: telefone,
      email: email,
      cpf: cpf,
    });
    setNome('');
    setTelefone('');
    pegaEmail('');
    setCpf('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardView}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#007796" />
        </TouchableOpacity>

        <View style={styles.form}>
          <Text style={styles.header}>Cadastro de Cliente</Text>

          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Nome"
            placeholderTextColor="#333"
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={pegaEmail}
            placeholder="Digite o E-mail"
            placeholderTextColor="#333"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            value={telefone}
            onChangeText={setTelefone}
            placeholder="Telefone"
            placeholderTextColor="#333"
          />
          <TextInput
            style={styles.input}
            value={cpf}
            onChangeText={setCpf}
            placeholder="CPF"
            placeholderTextColor="#333"
            keyboardType="numeric"
            maxLength={14}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              value={senha}
              onChangeText={pegaSenha}
              placeholder="Senha"
              placeholderTextColor="#333"
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              style={styles.eyeIcon}>
              <MaterialIcons
                name={isPasswordVisible ? 'visibility-off' : 'visibility'}
                size={24}
                color="#007796"
              />
            </TouchableOpacity>
            <Text style={styles.passwordPolicy}>
              🔒 Senha com no mínimo 6 caracteres, incluindo letra maiúscula, minúscula, número e símbolo.
            </Text>
          </View>
          <Text style={styles.passwordPolicy}>
            Nunca compartilhe sua senha com ninguém. Proteja sua conta.
          </Text>

          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              onPress={() => setIsChecked(!isChecked)}
              style={styles.checkbox}>
              <View
                style={[
                  styles.checkboxBox,
                  isChecked && styles.checkboxChecked,
                ]}
              />
            </TouchableOpacity>
            <Text style={styles.checkboxText}>
              Eu aceito os Termos de Uso e Política de Privacidade
            </Text>
          </View>

          <ScrollView style={styles.termsContainer}>
            <Text style={styles.termsText}>
              <Text style={styles.boldText}>
                Termos de Uso e Política de Privacidade{'\n'}
              </Text>
              A LGPD foi criada para proteger a privacidade dos dados pessoais.
              Ao utilizar este serviço, você concorda com os seguintes termos:
            </Text>
            <Text style={styles.termsText}>
              <Text style={styles.boldText}>1. Coleta de Dados:</Text> Coletamos
              nome, e-mail e dados relevantes para o cadastro.
            </Text>
            <Text style={styles.termsText}>
              <Text style={styles.boldText}>2. Uso dos Dados:</Text> Usados
              apenas para prestação de serviços.
            </Text>
            <Text style={styles.termsText}>
              <Text style={styles.boldText}>3. Consentimento:</Text> Você
              autoriza o uso dos dados conforme descrito.
            </Text>
            <Text style={styles.termsText}>
              <Text style={styles.boldText}>4. Proteção:</Text> Seus dados são
              protegidos contra uso indevido.
            </Text>
            <Text style={styles.termsText}>
              <Text style={styles.boldText}>5. Direitos:</Text> Você pode
              solicitar alteração, exclusão ou acesso aos seus dados.
            </Text>
            <Text style={styles.termsText}>
              <Text style={styles.boldText}>6. Compartilhamento:</Text> Apenas
              com parceiros autorizados, conforme a lei.
            </Text>
            <Text style={styles.termsText}>
              <Text style={styles.boldText}>7. Atualizações:</Text> Podemos
              alterar os termos e avisaremos.
            </Text>

            <Text style={styles.title}>
              📌 Termo de Consentimento – LGPD (Português)
            </Text>
            <Text style={styles.text}>
              A Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018),
              conhecida como LGPD, é uma legislação brasileira que regula as
              atividades de tratamento de dados pessoais, com o objetivo de
              proteger os direitos fundamentais de liberdade, privacidade e o
              livre desenvolvimento da personalidade da pessoa natural.
              {'\n\n'}
              Ao utilizar este aplicativo, você está ciente e concorda com o
              fornecimento e tratamento dos seguintes dados pessoais:
              {'\n'}- Nome completo
              {'\n'}- Endereço de e-mail
              {'\n'}- Número de telefone
              {'\n'}- Endereço físico (quando necessário)
              {'\n'}- Imagens (fotos de obras/serviços)
              {'\n'}- Histórico de pedidos e serviços
              {'\n\n'}
              Seus dados serão usados para: criação da conta, comunicação com
              prestadores, agendamento de serviços, envio de notificações,
              melhoria do app e obrigações legais.
              {'\n\n'}
              Seus dados são armazenados com segurança e não são compartilhados
              sem sua permissão, exceto por obrigação legal.
              {'\n\n'}
              Ao continuar usando o app, você aceita os termos e autoriza o uso
              dos seus dados conforme descrito.
            </Text>

            <Text style={styles.separator}>──────────────────────────────</Text>

            <Text style={styles.title}>📌 Consent Term – LGPD (English)</Text>
            <Text style={styles.text}>
              The General Data Protection Law (Law No. 13.709/2018), known as
              LGPD, is a Brazilian law that regulates the processing of personal
              data, protecting rights such as freedom, privacy, and personal
              development.
              {'\n\n'}
              By using this app, you agree to the collection and use of the
              following personal data:
              {'\n'}- Full name
              {'\n'}- Email address
              {'\n'}- Phone number
              {'\n'}- Physical address (when needed)
              {'\n'}- Images (e.g. service photos)
              {'\n'}- Service/order history
              {'\n\n'}
              Your data is used for: account creation, service provider
              communication, booking, notifications, app improvement, and legal
              compliance.
              {'\n\n'}
              Your data is securely stored and not shared without your
              permission, except as required by law.
              {'\n\n'}
              By continuing to use the app, you agree to these terms and
              authorize the use of your data accordingly.
            </Text>

            <Text style={styles.separator}>──────────────────────────────</Text>

            <Text style={styles.title}>
              📌 Término de Consentimiento – LGPD (Español)
            </Text>
            <Text style={styles.text}>
              La Ley General de Protección de Datos Personales (Ley N.º
              13.709/2018), conocida como LGPD, es una ley brasileña que regula
              el tratamiento de datos personales, con el objetivo de proteger la
              libertad, privacidad y el desarrollo personal.
              {'\n\n'}
              Al usar esta aplicación, usted acepta la recopilación y el uso de
              los siguientes datos personales:
              {'\n'}- Nombre completo
              {'\n'}- Correo electrónico
              {'\n'}- Número de teléfono
              {'\n'}- Dirección física (si es necesario)
              {'\n'}- Imágenes (fotos de servicios/obras)
              {'\n'}- Historial de pedidos y servicios
              {'\n\n'}
              Los datos se utilizan para: creación de cuenta, comunicación con
              prestadores, programación de servicios, notificaciones, mejoras y
              obligaciones legales.
              {'\n\n'}
              Sus datos están seguros y no se comparten sin su permiso, salvo
              por obligación legal.
              {'\n\n'}
              Al continuar usando la app, usted acepta estos términos y autoriza
              el uso de sus datos según lo descrito.
            </Text>

            <Text style={styles.separator}>──────────────────────────────</Text>
            <Text style={styles.footer}>Última atualização: Abril de 2025</Text>
          </ScrollView>

          <Button
            title="Cadastrar"
            onPress={Cadastraremail}
            disabled={!isChecked} 
            color="#007796"
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  passwordPolicy: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 10,
    marginTop: -8,
  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '40%',
    transform: [{ translateY: -12 }],
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    padding: 10,
    zIndex: 1,
    marginTop: 10,
  },
  form: {
    flex: 1,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  termsText: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxBox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#007796',
    borderRadius: 4,
  },
  checkboxChecked: {
    backgroundColor: '#007796',
  },
  checkboxText: {
    fontSize: 14,
    color: '#333',
    flexShrink: 1,
  },
  termsContainer: {
    maxHeight: 300,
    paddingHorizontal: 5,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 6,
  },
});
