
# **Faturamento Processor**

Um projeto desenvolvido para processar dados de faturamento diário fornecidos em arquivos **JSON** e **XML**. O programa realiza os seguintes cálculos:

- **Menor faturamento diário** (ignorando dias com faturamento `0`).
- **Maior faturamento diário**.
- **Número de dias com faturamento acima da média mensal**.

---

## **📋 Índice**
1. [🎯 Objetivo](#🎯-objetivo)
2. [🛠️ Tecnologias Utilizadas](#🛠️-tecnologias-utilizadas)
3. [🚀 Instalação](#🚀-instalação)
4. [⚙️ Como Usar](#⚙️-como-usar)
5. [📂 Estrutura do Projeto](#📂-estrutura-do-projeto)
6. [📝 Exemplo de Saída](#📝-exemplo-de-saída)
7. [🤝 Contribuições](#🤝-contribuições)
8. [📄 Licença](#📄-licença)

---

## **🎯 Objetivo**

Este projeto foi criado para demonstrar habilidades técnicas em:
- Leitura e processamento de arquivos JSON e XML.
- Implementação de princípios de **Programação Orientada a Objetos (POO)**.
- Aplicação de boas práticas como **SOLID** e **Clean Code**.
- Uso de **TypeScript** e manipulação de arquivos no Node.js.

---

## **🛠️ Tecnologias Utilizadas**

- **Node.js**: Ambiente de execução.
- **TypeScript**: Linguagem para maior segurança e legibilidade.
- **xml2js**: Biblioteca para manipulação de arquivos XML.
- **fs**: Módulo nativo para leitura de arquivos.

---

## **🚀 Instalação**

### **Pré-requisitos**
1. **Node.js** instalado. [Baixe aqui](https://nodejs.org/).
2. Editor de código como **Visual Studio Code** (opcional, mas recomendado).

### **Passos para Instalar**
1. Clone este repositório:
   ```bash
   git clone https://github.com/eduardoolimpiodev/TargetSistemas_teste.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd TargetSistemas_teste
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

---

## **⚙️ Como Usar**

### **Compilar o Projeto**
Compile o código TypeScript para JavaScript:
```bash
npm run build
```

### **Executar o Programa**
Após a compilação, execute o programa:
```bash
npm start
```

---

## **📂 Estrutura do Projeto**

```plaintext
project-root/
├── .gitignore            # Arquivos ignorados pelo Git
├── README.md             # Documentação do projeto
├── package.json          # Configurações do projeto e dependências
├── tsconfig.json         # Configurações do TypeScript
├── dados.json            # Arquivo JSON com dados de faturamento diário
├── dados.xml             # Arquivo XML com dados de faturamento diário
├── src/                  # Código-fonte
│   ├── JsonProcessor.ts  # Classe para processar dados em JSON
│   ├── XmlProcessor.ts   # Classe para processar dados em XML
│   ├── main.ts           # Arquivo principal que conecta tudo
├── dist/                 # Código compilado (JavaScript)
```

---

## **📝 Exemplo de Saída**

Ao executar o programa com os dados fornecidos, o resultado no terminal será semelhante a este:

```plaintext
=== Processando JSON ===
Menor Faturamento (JSON): 373.7838
Maior Faturamento (JSON): 48924.2448
Dias Acima da Média (JSON): 10

=== Processando XML ===
Menor Faturamento (XML): 3071.3283
Maior Faturamento (XML): 48275.2994
Dias Acima da Média (XML): 12
```

---

## **🤝 Contribuições**

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma nova branch:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. Adicione suas alterações e faça commit:
   ```bash
   git commit -m "feat: descrição da nova funcionalidade"
   ```
4. Envie as alterações:
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. Abra um Pull Request.

---

## **📄 Licença**

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Se precisar de algo mais ou ajustes no **README**, é só avisar! 🚀
