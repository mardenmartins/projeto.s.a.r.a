# S.A.R.A. — Sistema Automático de Reconhecimento de Autenticidade

<p align="center">
  <strong>Uma identidade digital para cada produto.</strong><br>
  Rastreabilidade, transparência e consulta de procedência.
</p>

<p align="center">
  <img alt="Situação: em desenvolvimento" src="https://img.shields.io/badge/situa%C3%A7%C3%A3o-em_desenvolvimento-00a878?style=for-the-badge">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES6%2B-f7df1e?style=for-the-badge&logo=javascript&logoColor=111111">
  <img alt="Banco de dados Supabase" src="https://img.shields.io/badge/banco_de_dados-Supabase-3fcf8e?style=for-the-badge&logo=supabase&logoColor=111111">
  <img alt="Hospedagem GitHub Pages" src="https://img.shields.io/badge/hospedagem-GitHub_Pages-181717?style=for-the-badge&logo=github">
</p>

---

## 1. Sobre o projeto

O **S.A.R.A. (Sistema Automático de Reconhecimento de Autenticidade)** é uma aplicação desenvolvida para apoiar a identificação de produtos, registrar informações de fabricação e comercialização e permitir que consumidores consultem publicamente os dados associados a cada unidade.

Cada unidade física recebe um código identificador exclusivo e um QR Code próprio. Ao escanear o código, o consumidor é direcionado à página pública de verificação, onde pode consultar as informações disponíveis e o resultado da análise realizada pelo sistema.

O projeto está organizado para atender empresas fabricantes, seus colaboradores e consumidores, com níveis distintos de acesso.

## 2. Problema que o projeto busca enfrentar

A circulação de produtos falsificados pode causar prejuízos financeiros, comprometer a reputação das marcas e expor consumidores a riscos. Em diversas situações, a embalagem ou a identificação convencional não oferece meios suficientes para consultar a procedência de um produto.

O S.A.R.A. propõe uma forma de associar cada unidade a um registro digital consultável, reunindo informações do produto e eventos registrados ao longo de seu fluxo.

## 3. Objetivos e solução

A solução permite que uma fábrica cadastre produtos, gere identificadores individuais, registre vendas e acompanhe consultas. O consumidor, por sua vez, não precisa criar uma conta: basta escanear o QR Code presente no produto para acessar a página pública de verificação.

O sistema também mantém registros de consultas e pode sinalizar situações que mereçam investigação, como reutilização ou conflito no histórico de um código.

> **Importante:** o QR Code, isoladamente, não comprova que um produto é original. A análise depende da integridade dos registros, da segurança dos acessos e da validação das informações armazenadas.

## 4. Perfis de acesso

O acesso é organizado por empresa, com separação dos dados de cada fábrica.

| Perfil | Responsabilidades |
|---|---|
| **Administrador geral do S.A.R.A.** | Administra a plataforma e realiza o cadastro e a gestão das fábricas. |
| **Administrador da fábrica** | Gerencia os usuários da própria empresa e acompanha os produtos e registros da fábrica. |
| **Operador da fábrica** | Realiza operações autorizadas, como cadastro de produtos e acompanhamento dos registros. |
| **Consumidor** | Consulta gratuitamente as informações públicas do produto por meio do QR Code, sem precisar criar conta. |

O cadastro de novas fábricas é controlado pelo administrador geral. O administrador de cada fábrica pode convidar colaboradores para atuar como operadores da própria empresa.

## 5. Funcionamento do sistema

1. **Cadastro da fábrica:** o administrador geral registra a empresa na plataforma.
2. **Acesso da equipe:** o administrador da fábrica convida os colaboradores autorizados.
3. **Cadastro do produto:** a equipe informa nome, marca, categoria, origem e lote.
4. **Geração dos identificadores:** o sistema cria um código exclusivo e um QR Code para cada unidade física, inclusive quando o cadastro é feito em lote.
5. **Identificação e distribuição:** os QR Codes podem ser baixados, organizados em arquivo CSV e impressos em etiquetas.
6. **Registro da venda:** a operação comercial é registrada e vinculada ao produto e à fábrica.
7. **Consulta pública:** o consumidor escaneia o QR Code e acessa as informações disponíveis.
8. **Acompanhamento:** a fábrica consulta seus produtos, vendas, verificações e alertas.

## 6. Funcionalidades implementadas

### Gestão de fábricas e usuários
- Estrutura de cadastro de fábricas;
- Perfis de administrador geral, administrador da fábrica e operador;
- Convite de colaboradores por e-mail;
- Associação dos usuários à respectiva fábrica;
- Separação de dados por empresa por meio das regras de acesso ao banco de dados.

### Cadastro e identificação de produtos
- Cadastro de produtos com nome, marca, categoria, origem e lote;
- Geração de identificador e QR Code individual por unidade;
- Cadastro de lotes com várias unidades;
- Exibição dos QR Codes no painel de produtos;
- Download individual dos QR Codes;
- Impressão de etiquetas;
- Exportação da relação de códigos e links em arquivo CSV.

### Vendas e verificação
- Registro e consulta de vendas;
- Consulta pública por código QR;
- Exibição das informações disponíveis do produto;
- Registro de consultas;
- Exibição de resultados de verificação e alertas para análise.

### Interface e acesso
- Página inicial de apresentação;
- Tela de autenticação;
- Painel da fábrica;
- Área de vendas e ponto de venda;
- Página pública de verificação;
- Página explicativa sobre o funcionamento;
- Aviso de privacidade;
- Ícone de identificação do S.A.R.A. nas páginas da aplicação.

## 7. Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| **HTML5** | Estrutura das páginas da aplicação. |
| **CSS3** | Estilos, identidade visual e adaptação a diferentes telas. |
| **JavaScript** | Regras de funcionamento e interações da interface. |
| **Supabase Auth** | Autenticação dos usuários. |
| **PostgreSQL** | Armazenamento dos dados. |
| **Supabase Edge Functions** | Execução de operações de servidor, como convite de colaboradores. |
| **Políticas de segurança por linha (RLS)** | Controle de acesso aos registros conforme o usuário e a fábrica. |
| **Git e GitHub** | Versionamento e colaboração no código. |
| **GitHub Pages** | Publicação das páginas da aplicação. |

## 8. Organização dos arquivos

```text
projeto.s.a.r.a/
├── index.html              # Página inicial
├── login.html              # Autenticação e acesso ao sistema
├── cadastro.html           # Orientações sobre o acesso do consumidor
├── cliente.html            # Área de consulta do consumidor
├── sistema.html            # Painel da fábrica e gestão de produtos
├── pdv.html                # Ponto de venda
├── vendas.html             # Consulta e acompanhamento de vendas
├── verificar.html          # Verificação pública por QR Code
├── como-funciona.html      # Apresentação do funcionamento
├── aviso-privacidade.html  # Aviso de privacidade
├── db.js                   # Integração com o Supabase
├── style.css               # Estilos compartilhados
├── favicon.svg             # Ícone de identificação do S.A.R.A.
└── README.md               # Documentação do projeto
```

Além dos arquivos da interface, o projeto utiliza recursos configurados no Supabase, como tabelas, funções de banco de dados, políticas de acesso e uma função de servidor para convite de colaboradores.

## 9. Banco de dados e segurança

O banco de dados utiliza PostgreSQL por meio do Supabase. Entre as estruturas utilizadas estão:

- **fábricas:** cadastro e situação das empresas;
- **perfis:** identificação dos usuários, seus papéis e vínculo com a fábrica;
- **produtos:** dados dos produtos e seus identificadores;
- **registros de venda:** informações das operações comerciais;
- **registros de verificação:** histórico das consultas realizadas.

As políticas de segurança por linha (RLS) são utilizadas para restringir o acesso aos registros conforme o perfil e a fábrica vinculada ao usuário. A consulta pública de autenticidade é disponibilizada por uma função específica, sem exigir autenticação do consumidor.

A função de servidor responsável pelos convites utiliza credenciais protegidas no ambiente do Supabase. Chaves secretas não devem ser incluídas no código do navegador nem no repositório.

### Configuração de uma instância própria

Para executar uma cópia do projeto com outro banco de dados:

1. Crie um projeto no Supabase.
2. Configure as tabelas, relacionamentos, funções e políticas de segurança necessárias.
3. Configure a URL do projeto e a chave pública de acesso no arquivo de integração, conforme a configuração do Supabase.
4. Configure as variáveis protegidas necessárias à função de convite de colaboradores.
5. Cadastre as fábricas e os usuários com seus respectivos perfis.
6. Revise as políticas de acesso e as configurações de autenticação antes de utilizar dados reais.

**Atenção:** nunca publique chaves secretas, credenciais administrativas, senhas ou chaves de serviço no repositório. A chave pública utilizada no navegador não substitui as políticas de segurança do banco de dados.

## 10. Como executar localmente

### Pré-requisitos
- Git;
- Navegador atualizado;
- Editor de código, como o Visual Studio Code;
- Projeto Supabase configurado.

### Obter o código

```bash
git clone https://github.com/mardenmartins/projeto.s.a.r.a.git
cd projeto.s.a.r.a
```

Abra a pasta no editor de código e execute a página inicial com uma extensão de servidor local, como o Live Server. A aplicação depende da configuração do Supabase para autenticação e acesso aos dados.

## 11. Demonstração e repositório

- **Aplicação publicada:** https://mardenmartins.github.io/projeto.s.a.r.a/
- **Acesso ao sistema:** https://mardenmartins.github.io/projeto.s.a.r.a/login.html
- **Consulta pública:** https://mardenmartins.github.io/projeto.s.a.r.a/verificar.html
- **Código-fonte:** https://github.com/mardenmartins/projeto.s.a.r.a

## 12. Situação atual e próximos aprimoramentos

O projeto possui uma estrutura funcional de interface, autenticação, perfis de acesso, cadastro de produtos, geração de QR Codes, registros de venda e consulta pública. A aplicação continua em desenvolvimento e requer testes operacionais completos antes de ser considerada pronta para uso comercial.

Próximos aprimoramentos recomendados:
- Testes completos de cadastro, convite e acesso dos diferentes perfis;
- Testes de isolamento entre fábricas;
- Validação dos fluxos de venda e consulta em diferentes cenários;
- Revisão das regras de alertas para evitar classificar automaticamente toda consulta repetida como fraude comprovada;
- Aprimoramentos de acessibilidade, desempenho e experiência em dispositivos móveis;
- Revisão periódica das configurações de segurança e privacidade.

## 13. Contexto acadêmico

Projeto desenvolvido no contexto do **5º SENAC INNOVADAY**, da Faculdade de Tecnologia e Inovação Senac-DF, em Brasília, 2026.

## 14. Equipe

- Marden Martins
- Raiane Reis
- Lucas Cavalcante
- Henrique Paixão
- Walisson Araújo

---

<p align="center">
  <strong>S.A.R.A. — Sistema Automático de Reconhecimento de Autenticidade</strong><br>
  <sub>Projeto acadêmico em desenvolvimento.</sub>
</p>
