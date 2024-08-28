Projeto Banco de Dados Fazenda
Este projeto consiste na criação de um banco de dados para a gestão de uma fazenda de cultivo, com suporte a operações como gerenciamento de lotes, estufas, fornecedores, funcionários, equipamentos, pedidos de insumos, colheitas, vendas, entre outros.

Índice
Introdução
Requisitos
Instalação
Configuração
Uso
Scripts SQL
Criação do Banco de Dados
População do Banco de Dados
Estrutura do Projeto
API e Endpoints
Contribuição
Licença
Introdução
O "Banco de Dados Fazenda" é um sistema projetado para gerenciar diversas operações relacionadas ao cultivo em uma fazenda, como o acompanhamento de plantas, controle de estufas, gerenciamento de funcionários, e processamento de vendas. O sistema é composto por um banco de dados relacional estruturado em MySQL e um frontend básico que pode ser utilizado para visualizar e interagir com os dados.

Requisitos
Node.js e npm: Para o backend (Node.js) e gerenciamento de pacotes.
MySQL: Para o gerenciamento do banco de dados.
Git: Para controle de versão (opcional).
Instalação
1. Clone o repositório
bash
Copiar código
git clone https://github.com/usuario/Banco_De_Dados_Fazenda.git
cd Banco_De_Dados_Fazenda
2. Instale as dependências
bash
Copiar código
npm install
3. Configure o banco de dados
Antes de executar o projeto, certifique-se de que o MySQL está instalado e configurado na sua máquina.

Configuração
Configuração do MySQL
Crie um banco de dados MySQL com o nome fazenda.
Execute os scripts SQL localizados no diretório scriptsSQL para criar e popular as tabelas do banco de dados.
sql
Copiar código
source scriptsSQL/script.sql;
source scriptsSQL/script_para_povoar_bd.sql;
Configuração do Servidor
Certifique-se de configurar as variáveis de ambiente necessárias no arquivo server.js, como as credenciais de acesso ao banco de dados MySQL.

Uso
Executando o Servidor
Após configurar o banco de dados, você pode iniciar o servidor Node.js com o seguinte comando:

bash
Copiar código
node server.js
Isso iniciará o servidor, e o frontend estará disponível para visualização e interação no seu navegador.

Scripts SQL
Criação do Banco de Dados
O script script.sql é responsável por criar todas as tabelas necessárias para o funcionamento do sistema, incluindo:

Tabela Fornecedor
Tabela Estufa
Tabela Lote
Tabela Planta
Tabela Colheita
Tabela Equipamento
Tabela Funcionario
Tabela Pedido_Insumo
Tabela Insumos
Tabela Comprador
Tabela Venda
População do Banco de Dados
O script script_para_povoar_bd.sql insere dados de exemplo nas tabelas criadas para simular um ambiente real de produção. Ele inclui exemplos como:

Várias plantas distribuídas entre lotes e estufas.
Colheitas com diferentes níveis de qualidade.
Funcionários, equipamentos, fornecedores e pedidos de insumos.
Estrutura do Projeto
index.html: Página inicial do frontend.
main.js: Script principal para manipulação no frontend.
server.js: Backend do servidor utilizando Node.js para interação com o banco de dados.
scriptsSQL/: Diretório contendo os scripts SQL para criar e popular o banco de dados.
actions/: Scripts ou fluxos de trabalho automáticos.
API e Endpoints
A API (se aplicável) inclui endpoints para interação com o banco de dados. Alguns exemplos de endpoints incluem:

/api/plantas: Recupera informações sobre plantas.
/api/colheitas: Recupera e adiciona colheitas.
Contribuição
Se você deseja contribuir com o projeto, siga os passos abaixo:

Fork o projeto.
Crie uma branch para a sua feature (git checkout -b feature/nova-feature).
Commit suas mudanças (git commit -m 'Adiciona nova feature').
Push a sua branch (git push origin feature/nova-feature).
Abra um Pull Request.
Licença
Este projeto está licenciado sob os termos da licença MIT.
