# NutriExpress 🍎🚀

O **NutriExpress** é uma aplicação móvel desenvolvida com **React Native** e **Expo**, focada no delivery de refeições saudáveis. O projeto oferece uma interface intuitiva para navegação entre categorias de alimentos, visualização de produtos em destaque (mais pedidos, rápidos e promoções) e gestão de pedidos.

## 📱 Funcionalidades

* **Autenticação**: Telas de Login e Cadastro de utilizadores.
* **Home Dinâmica**: Listagem de produtos categorizados por "Mais Pedidos", "Mais Rápidos" e "Promoções".
* **Detalhes do Produto**: Visualização detalhada de informações, preços e tempo de entrega.
* **Gestão de Compras**: Sistema de Carrinho e acompanhamento de Pedidos.
* **Perfil do Utilizador**: Área dedicada para preferências e dados do utilizador.
* **Navegação Fluida**: Utilização do `react-navigation` para transições sem interrupções entre as telas.

## 🛠️ Tecnologias Utilizadas

* **Framework**: [React Native](https://reactnative.dev/) (v0.79.2).
* **Plataforma**: [Expo](https://expo.dev/) (v53.0.9).
* **Navegação**: React Navigation (Native Stack).
* **Estilização**: StyleSheet nativo e [React Native Paper](https://callstack.github.io/react-native-paper/).
* **Tipografia**: Fontes customizadas da família *Inter* via `@expo-google-fonts/inter`.

## 📂 Estrutura de Ficheiros Principal

* `App.js`: Configuração central do Provider de Navegação e definição das rotas principais (Home, Login, Carrinho, etc.).
* `Home.js`: Ecrã principal com lógica de expansão de secções, barra de pesquisa e listas horizontais de produtos.
* `Produtos.js`: Ficheiro de dados contendo os arrays de objetos para os produtos exibidos na Home.
* `Rotas.js`: Configuração alternativa de navegação para fluxos específicos.
* `components/MenuBottom.js`: Componente de navegação inferior reutilizável em várias telas.

## 🚀 Como Executar o Projeto

1.  **Pré-requisitos**: Certifique-se de ter o Node.js e o Expo CLI instalados.
2.  **Instalação**:
    ```bash
    npm install
    ```
3.  **Iniciar**:
    ```bash
    npx expo start
    ```
4.  **Execução**:
    * Pressione `a` para Android.
    * Pressione `i` para iOS.
    * Pressione `w` para Web.
