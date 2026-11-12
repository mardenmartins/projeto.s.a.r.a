# S.A.R.A. — Sistema Automático de Reconhecimento de Autenticidade

<p align="center">
  <strong>Uma identidade digital para cada produto.</strong><br/>
  Rastreabilidade, transparência e verificação de autenticidade.
</p>

<p align="center">
  <img alt="Status" src="https://img.shields.io/badge/status-MVP-2563eb?style=for-the-badge"/>
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES6+-f7df1e?style=for-the-badge&logo=javascript&logoColor=111111"/>
  <img alt="Supabase" src="https://img.shields.io/badge/Supabase-PostgreSQL-3fcf8e?style=for-the-badge&logo=supabase&logoColor=111111"/>
  <img alt="GitHub Pages" src="https://img.shields.io/badge/Deploy-GitHub%20Pages-181717?style=for-the-badge&logo=github"/>
</p>

**[🇧🇷 Português](#-português) · [🇺🇸 English](#-english)**

---

## 🇧🇷 Português

### Visão geral

O **S.A.R.A.** é um projeto acadêmico que propõe uma solução digital para apoiar a identificação de possíveis falsificações e ampliar a rastreabilidade de produtos. Cada unidade recebe um identificador associado a um QR Code, permitindo consultar informações e registros relacionados ao produto.

O projeto foi desenvolvido como um MVP para demonstrar o fluxo de cadastro, identificação, registro de venda e consulta pública.

### Problema

Produtos falsificados podem gerar prejuízos financeiros, danos à reputação das marcas e riscos aos consumidores. Em muitos cenários, é difícil verificar a procedência de um item apenas pela embalagem ou por códigos convencionais.

### Solução proposta

O S.A.R.A. associa um identificador individual a cada produto. A consulta do QR Code permite recuperar os dados disponíveis e verificar o histórico registrado pelo sistema. O cruzamento dessas informações pode apontar inconsistências que merecem análise.

### Fluxo de funcionamento

1. **Cadastro:** a empresa registra o produto e suas informações.
2. **Identificação:** o sistema associa um código individual e um QR Code.
3. **Comercialização:** a operação de venda é registrada no sistema.
4. **Verificação:** o consumidor consulta o QR Code e visualiza as informações disponíveis.
5. **Análise de inconsistências:** divergências no histórico podem gerar alertas para investigação.

> **Nota:** o QR Code, isoladamente, não prova autenticidade. A proposta depende da integridade dos registros, dos controles de acesso e da validação dos eventos registrados.

### Funcionalidades contempladas no MVP

- Autenticação e acesso de usuários;
- Cadastro e gerenciamento de produtos;
- Identificação de produtos por QR Code;
- Consulta pública de informações do produto;
- Registro de vendas e consultas;
- Estrutura de perfis e permissões;
- Persistência de dados em banco PostgreSQL gerenciado pelo Supabase.

### Tecnologias

| Tecnologia | Aplicação |
|---|---|
| HTML5 | Estrutura das páginas |
| CSS3 | Estilização e interface |
| JavaScript | Regras e interações no cliente |
| Supabase Auth | Autenticação |
| PostgreSQL / Supabase | Persistência dos dados |
| Git e GitHub | Versionamento e colaboração |
| GitHub Pages | Publicação da interface |

### Estrutura principal

```text
projeto.s.a.r.a/
├── index.html              # Página inicial
├── login.html              # Acesso ao sistema
├── cadastro.html           # Cadastro
├── cliente.html            # Área do cliente
├── sistema.html            # Painel administrativo
├── pdv.html                # Fluxo de ponto de venda
├── vendas.html             # Registros de vendas
├── verificar.html          # Consulta pública por QR Code
├── como-funciona.html      # Apresentação da solução
├── aviso-privacidade.html  # Aviso de privacidade
├── db.js                   # Integração com Supabase
├── style.css               # Estilos
└── README.md               # Documentação
```

### Executar localmente

**Pré-requisitos:** Git, navegador atualizado e editor de código.

```bash
git clone https://github.com/mardenmartins/projeto.s.a.r.a.git
cd projeto.s.a.r.a
```

Abra o arquivo `index.html` no navegador ou utilize a extensão Live Server no Visual Studio Code.

### Banco de dados e configuração

O projeto utiliza Supabase para autenticação e persistência. Para executar uma instância própria:

1. Crie um projeto no Supabase.
2. Configure as tabelas, políticas de segurança (RLS) e funções necessárias.
3. Configure no código do cliente apenas a chave pública apropriada (publishable/anon).
4. Crie os usuários e atribua perfis conforme as regras de acesso do projeto.

**Segurança:** nunca inclua `service_role`, secret keys, senhas ou credenciais privadas no repositório ou no código executado no navegador. Revise as políticas RLS antes de disponibilizar dados reais.

### Demonstração

- **Aplicação:** https://mardenmartins.github.io/projeto.s.a.r.a/
- **Repositório:** https://github.com/mardenmartins/projeto.s.a.r.a

### Contexto acadêmico

Projeto desenvolvido no contexto do **5º SENAC INNOVADAY**, na Faculdade de Tecnologia e Inovação Senac-DF, em Brasília, 2026.

### Equipe

- Marden Martins
- Raiane Reis
- Lucas Cavalcante
- Henrique Paixão
- Walisson Araújo

---

## 🇺🇸 English

### Overview

**S.A.R.A.** is an academic MVP exploring a digital approach to product identification and traceability. Each product unit is associated with a unique identifier and a QR Code, enabling users to access available product information and recorded events.

### The challenge

Counterfeit goods can cause financial losses, damage brand reputation and expose consumers to risks. Verifying a product's origin using packaging or conventional codes alone can be difficult.

### Proposed solution

S.A.R.A. links each product unit to a digital record. By scanning its QR Code, users can access available information and review recorded events. Comparing these records may reveal inconsistencies that require further investigation.

### Main workflow

1. **Registration:** a company registers product information.
2. **Identification:** the system associates an individual identifier and QR Code.
3. **Sale:** the transaction is recorded.
4. **Verification:** consumers scan the QR Code to access available information.
5. **Inconsistency review:** conflicting records may trigger alerts for further investigation.

> **Important:** a QR Code alone does not prove authenticity. The approach relies on reliable records, access controls and proper event validation.

### Main capabilities

- User authentication;
- Product registration and management;
- QR Code-based product identification;
- Public product lookup;
- Sales and verification records;
- User roles and permissions;
- PostgreSQL persistence through Supabase.

### Technology stack

HTML5 · CSS3 · JavaScript · Supabase Auth · PostgreSQL · Git · GitHub · GitHub Pages.

### Run locally

```bash
git clone https://github.com/mardenmartins/projeto.s.a.r.a.git
cd projeto.s.a.r.a
```

Open `index.html` in a browser or use Visual Studio Code with Live Server. Configure your own Supabase project and security policies before using the application with real data.

### Links

- **Live application:** https://mardenmartins.github.io/projeto.s.a.r.a/
- **Source code:** https://github.com/mardenmartins/projeto.s.a.r.a

### Academic project

Developed for **5th SENAC INNOVADAY**, Faculdade de Tecnologia e Inovação Senac-DF, Brasília, Brazil, 2026.

### Team

Marden Martins · Raiane Reis · Lucas Cavalcante · Henrique Paixão · Walisson Araújo

---

<p align="center">
  <sub>Projeto acadêmico em evolução · Academic project in progress</sub>
</p>
