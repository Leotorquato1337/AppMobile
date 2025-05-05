//resgatar senha
//controle de acesso e conformidade LGPD

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CadCliente from './janelas/cadCliente';
import CadServico from './janelas/cadServico';
import Menu from './janelas/menu';
import Splash from './janelas/splash';
import TelaLogin from './janelas/telaLogin';
import Clientes from './janelas/clientes';
import Profissionais from './janelas/profissionais';
import Perfil from './janelas/meuPerfil';
import EditarPerfil from './janelas/editarPerfil';
import Checkout from './janelas/checkout';
import CadFuncionario from './janelas/cadFuncionario';
import EsqueciSenha from './janelas/esqueceusenha';
import MenuModal from './janelas/menuModal';
import Termos from './janelas/termos';
import TermosHamb from './janelas/termosHamb';
import Configuracoes from './janelas/configuracoes';
import Suporte from './janelas/suporte';
import Duvidas from './janelas/duvidas';
import Sobre from './janelas/sobre';
import ConfirmarExclusao from './janelas/confirmarExclusao';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen
          name="splash"
          options={{ headerShown: false }}
          component={Splash}
        />
        <Stack.Screen
          name="cadCliente"
          options={{ headerShown: false }}
          component={CadCliente}
        />
        <Stack.Screen
          name="cadServico"
          options={{ headerShown: false }}
          component={CadServico}
        />
        <Stack.Screen
          name="telalogin"
          options={{ headerShown: false }}
          component={TelaLogin}
        />
        <Stack.Screen
          name="menu"
          options={{ headerShown: false }}
          component={Menu}
        />
        <Stack.Screen
          name="clientes"
          options={{ headerShown: false }}
          component={Clientes}
        />
        <Stack.Screen
          name="profissionais"
          options={{ headerShown: false }}
          component={Profissionais}
        />
        <Stack.Screen
          name="meuPerfil"
          options={{ headerShown: false }}
          component={Perfil}
        />
        <Stack.Screen
          name="editarPerfil"
          options={{ headerShown: false }}
          component={EditarPerfil}
        />
        <Stack.Screen
          name="checkout"
          options={{ headerShown: false }}
          component={Checkout}
        />
        <Stack.Screen
          name="cadFuncionario"
          options={{ headerShown: false }}
          component={CadFuncionario}
        />
        <Stack.Screen
          name="esqueceusenha"
          options={{ headerShown: false }}
          component={EsqueciSenha}
        />
        <Stack.Screen
          name="menuModal"
          options={{ headerShown: false }}
          component={MenuModal}
        />
        <Stack.Screen
          name="termos"
          options={{ headerShown: false }}
          component={Termos}
        />
        <Stack.Screen
          name="termosHamb"
          options={{ headerShown: false }}
          component={TermosHamb}
        />
        <Stack.Screen
          name="configuracoes"
          options={{ headerShown: false }}
          component={Configuracoes}
        />
        <Stack.Screen
          name="duvidas"
          options={{ headerShown: false }}
          component={Duvidas}
        />
        <Stack.Screen
          name="suporte"
          options={{ headerShown: false }}
          component={Suporte}
        />
        <Stack.Screen
          name="sobre"
          options={{ headerShown: false }}
          component={Sobre}
        />
        <Stack.Screen
          name="confirmarExclusao"
          options={{ headerShown: false }}
          component={ConfirmarExclusao}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
