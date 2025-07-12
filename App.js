import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadCliente from './janelascliente/cadCliente';
import CadServico from './janelascliente/cadServico';
import Menu from './janelascliente/menu';
import Splash from './janelas/splash';
import TelaLogin from './janelas/telaLogin';
import Clientes from './janelascliente/clientes';
import Profissionais from './janelas/profissionais';
import Perfil from './janelascliente/meuPerfil';
import EditarPerfil from './janelascliente/editarPerfil';
import Checkout from './janelascliente/checkout';
import CadFuncionario from './janelascliente/cadFuncionario';
import EsqueciSenha from './janelascliente/esqueceusenha';
import MenuModal from './janelascliente/menuModal';
import Termos from './janelascliente/termos';
import TermosHamb from './janelascliente/termosHamb';
import Configuracoes from './janelas/configuracoes';
import Suporte from './janelascliente/suporte';
import Duvidas from './janelascliente/duvidas';
import Sobre from './janelascliente/sobre';
import ConfirmarExclusao from './janelascliente/confirmarExclusao';
import TermosFunc from './janelascolaborador/termosFunc';
import MenuFunc from './janelascolaborador/menuFunc';
import MenuModalFunc from './janelascolaborador/menuModalFunc';
import ServicosAtuais from './janelascolaborador/servicosAtuais';
import SolicitacaoServico from './janelascolaborador/solicitacaoServico';
import ServicosRealizados from './janelascolaborador/servicosRealizados';
import PerfilFunc from './janelascolaborador/perfilFunc';
import FormasPagamento from './janelascliente/formasPagamento';
import HistoricoServicos from './janelascliente/historicoServicos';
import MeusAgendamentos from './janelascliente/meusAgendamentos';
import PerfilProfissional from './janelas/perfilProfissional';
import ServicosFinalizados from './janelascolaborador/servicosFinalizados';

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
        <Stack.Screen
          name="termosFunc"
          options={{ headerShown: false }}
          component={TermosFunc}
        />
        <Stack.Screen
          name="menuFunc"
          options={{ headerShown: false }}
          component={MenuFunc}
        />
        <Stack.Screen
          name="menuModalFunc"
          options={{ headerShown: false }}
          component={MenuModalFunc}
        />
        <Stack.Screen
          name="servicosAtuais"
          options={{ headerShown: false }}
          component={ServicosAtuais}
        />
        <Stack.Screen
          name="solicitacaoServico"
          options={{ headerShown: false }}
          component={SolicitacaoServico}
        />
        <Stack.Screen
          name="servicosRealizados"
          options={{ headerShown: false }}
          component={ServicosRealizados}
        />
        <Stack.Screen
          name="perfilFunc"
          options={{ headerShown: false }}
          component={PerfilFunc}
        />
        <Stack.Screen
          name="formasPagamento"
          options={{ headerShown: false }}
          component={FormasPagamento}
        />
        <Stack.Screen
          name="historicoServicos"
          options={{ headerShown: false }}
          component={HistoricoServicos}
        />
        <Stack.Screen
          name="meusAgendamentos"
          options={{ headerShown: false }}
          component={MeusAgendamentos}
        />
        <Stack.Screen
          name="perfilProfissional"
          options={{ headerShown: false }}
          component={PerfilProfissional}
        />
        <Stack.Screen
          name="servicosFinalizados"
          options={{ headerShown: false }}
          component={ServicosFinalizados}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
