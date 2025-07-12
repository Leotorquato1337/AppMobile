# Aplicativo Caça Obras

O Caça Obras é uma plataforma digital desenvolvida com o objetivo de conectar clientes que precisam de serviços residenciais com profissionais autônomos especializados em diversas áreas da construção civil, manutenção e serviços gerais.


Algumas funcionalidades do aplicativo: 

Tela de Login:
 - Ao digitar o e-mail e a senha, há uma condicional identificando se o e-mail é referente a um cliente ou um funcionário, redirecionando para a respectiva tela de menu. 
 - Autenticação segura com Firebase Auth, garantindo proteção dos dados dos usuários.
 - Recuperação de senha via e-mail para facilitar o acesso em caso de perda.
 - Tela de cadastro

O app conta com dois menus principais, definidos de forma condicional com base no tipo de usuário:
 - Menu do Cliente: foco na busca, solicitação de serviços, histórico e suporte.
 - Menu do Profissional: foco em aceitar pedidos, publicar serviços realizados, visualizar desempenho e editar perfil.

Cadastro e Perfil Profissional:
 - Os profissionais podem cadastrar nome, telefone, imagem, descrição e especializações, tudo integrado ao banco de dados Firebase, com atualização em tempo real.
 - Eles também podem editar seus dados e acompanhar as alterações instantaneamente.

Painel de Desempenho para Profissionais:
Os profissionais têm acesso a um gráfico visual com informações sobre:
 - Número de serviços aceitos
 - Serviços concluídos
 - Desempenho ao longo do tempo
Essa funcionalidade facilita o acompanhamento de progresso e produtividade diretamente no aplicativo.

Publicação de Serviços Realizados:
 - Os profissionais podem publicar fotos e descrições de serviços já realizados, categorizando por tipo (ex: pintura, elétrica, jardinagem).
 - As imagens são salvas em formato base64 no banco de dados, permitindo a visualização por clientes como forma de portfólio profissional.

Sistema de Solicitação de Serviços estilo “Uber”:
 - O cliente pode solicitar um serviço personalizado a qualquer momento.
 - Profissionais recebem os pedidos e podem aceitar ou recusar conforme disponibilidade.
 - O app exibe uma tela de serviços ativos e concluídos, tanto para cliente quanto para profissional, facilitando o controle do processo.

Tela de Dúvidas Frequentes:
 - A seção de dúvidas frequentes permite que o usuário consulte respostas rápidas sobre como usar o app, segurança, pagamentos e funcionalidades.

Configurações Pessoais:
O aplicativo conta com uma área de configurações, onde o usuário pode:
 - Gerenciar notificações
 - Editar preferências
 - Ver informações da conta e encerrar sessão com segurança

Tela Meu Perfil:
 - Cada usuário pode visualizar suas informações cadastradas.
 - O profissional pode ver seu histórico de publicações e desempenho.
 - O cliente pode acompanhar os serviços solicitados e status.

Formas de Pagamento:
O app permite múltiplas formas de pagamento integradas que serão enviadas diretamente para o aplicativo e o dinheiro ficará retido na plataforma até a conclusão do serviço:
 - Dinheiro
 - PIX
 - Cartão de crédito (futuramente via gateway)

Suporte Especializado:
 - Canal de suporte via mensagem interna no app.
 - Integração com redirecionamento direto para WhatsApp, garantindo atendimento rápido com o time de suporte.

Caso tenha interesse em testar o aplicativo, acesse: https://snack.expo.dev/@leotorquato1337/appobras?platform=web
