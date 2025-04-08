# 🚀 Formulário de Inscrição Digital - Desafio 3 Trilhas INOVA

👨‍💻 **Autores:** Railton Rosa de Carvalho e Vinícius Lira Caldas.

---

## 🎯 Objetivo e Contexto

O formulário de inscrição foi desenvolvido para simplificar e padronizar processos de inscrição e seleção no programa Trilhas Inova Maranhão. As soluções implementadas via plataforma WEB têm como objetivo:

- ✅ Reduzir erros comuns em processos manuais.
- 📈 Facilitar validação eficiente das informações.
- 🔄 Proporcionar uma gestão intuitiva e escalável dos processos seletivos.

---

## 🛠️ Funcionalidades Principais

### 📋 Campos Essenciais
- Dados pessoais (nome, data de nascimento, CPF, e-mail, telefone).
- Informações de endereço (CEP, rua, número, cidade, estado).

### 🎓 Seleção de Trilhas
- Interface amigável com feedback visual claro.

### 🔐 **Funcionalidade de Login**
- O sistema inclui uma página de **login** que valida o **CPF** e **senha** do usuário.
- Se o usuário não existir, será solicitado que ele se cadastre no sistema.
- O login é validado contra dados armazenados no **localStorage**, o que permite um fluxo simples sem a necessidade de back-end.

---

## 💻 Tecnologias Utilizadas

- **HTML**: Estruturação do conteúdo e formatação da página.
- **CSS**: Estilização e layout responsivo.
- **JavaScript**: Validações de formulário, login e interatividade, Armazenamento temporário de dados no navegador.
- **SVG**: Ícones vetoriais utilizados para ilustrar as trilhas de aprendizagem e botões.

---

## 📱 Responsividade

O design foi desenvolvido com **responsividade básica**, utilizando **media queries** para garantir que o formulário se adapte a diferentes tamanhos de tela, como:

- **Desktop**: Layout amplo com múltiplas colunas.
- **Tablets**: Ajustes de layout para visualização otimizada em telas médias.
- **Smartphones**: Ajustes para exibição simplificada e fácil preenchimento de formulários.

---

##  Como Rodar Localmente

### **Usando Live Server no VS Code**

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/Railton-Carvalho/Desafio-2-trilhas.git
    ```

2. **Acesse a pasta do projeto**:
    ```bash
    cd formulario-inscricao
    ```

3. **Abra o VS Code**:
    - Execute o comando:
    ```bash
    code .
    ```
    - Ou, se você já estiver no diretório do projeto, basta abrir o VS Code manualmente.

4. **Instale a extensão Live Server**:
    - No VS Code, vá até a aba de **Extensões** (ícone de quadrado no menu lateral esquerdo).
    - Procure por **Live Server** e instale a extensão desenvolvida por **Ritwick Dey**.

5. **Rodando o servidor localmente**:
    - Após a instalação, clique com o botão direito sobre o arquivo `index.html` e selecione a opção **"Open with Live Server"**.
    - O navegador será aberto automaticamente, exibindo o formulário de inscrição em tempo real.

---

## 📚 Aprendizados e Desafios

### Aprendizados
- Implementação de técnicas básicas de responsividade em dispositivos.
- Implementação de técnicas de validação na entrada de dados.
- Desenvolvimento de interfaces com responsividade básica.
- Organizar a estrutura de pastas e arquivos de código fonte.

### Desafios
- **Responsividade**: Garantir que o layout funcione adequadamente em diversos dispositivos (desktop, tablet e celular).
  - Ajustes nas margens e nos campos de formulário para otimização em telas menores.
  - Adaptar a navegação e os botões para uma boa experiência de usuário em dispositivos móveis.
- Organização intuitiva do layout para melhorar a experiência do usuário.
- Estruturação do código visando futuras integrações e escalabilidade.
- Seguir o layout e estilização do design do Figma.

---

## Próximos Passos ou Evoluções
- 📧 Implementação de autenticação e verificação de usuários por e-mail.
- 📊 Desenvolvimento de dashboards para monitoramento em tempo real.
- 🌐 Suporte para múltiplos processos seletivos simultâneos e escalabilidade para maior volume de usuários.

---

## Contato e Links

🔗 **Repositórios GitHub:**  
- Railton Rosa: [GitHub](https://github.com/Railton-Carvalho)  
  📧 railtonrcarvalho@gmail.com  

- Vinícius Lira: [GitHub](https://github.com/Vininy)  
  📧 viniciuslira2010@hotmail.com
