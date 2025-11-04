## Como começar

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Regras do Linter

Este projeto utiliza o ESLint para garantir boas práticas de codificação. A seguir estão as regras definidas para o código, com foco em estilo, legibilidade, organização de imports, boas práticas de React e TypeScript, e acessibilidade.

### **Estilo de Código**

- **`semi: ["error", "always"]`**  
  Exige o uso de ponto e vírgula no final de todas as instruções, promovendo um estilo consistente e evitando erros de interpretação.

- **`quotes: ["error", "double"]`**  
  Exige o uso de **aspas duplas** para strings, ajudando a manter a consistência no código.

- **`prefer-arrow-callback: "error"`**  
  Exige o uso de **arrow functions** para callbacks, resultando em um código mais limpo e conciso.

- **`prefer-template: "error"`**  
  Exige o uso de **template literals** (`${}`) para concatenar strings, ao invés de usar o operador `+`.

- **`camelcase: ["error", { properties: "always" }]`**  
  Exige que as variáveis e propriedades sigam a notação **camelCase**.

### **Legibilidade**

- **`max-lines-per-function: ["warn", 150]`**  
  Emite um **aviso** quando uma função ultrapassa 150 linhas, incentivando funções menores e mais fáceis de entender.

- **`complexity: ["warn", 15]`**  
  Emite um **aviso** quando a complexidade de uma função é maior que 15, indicando que a função pode ser muito difícil de manter.

- **`no-console: "warn"`**  
  Emite um **aviso** quando a função `console.log` é utilizada, evitando que logs de desenvolvimento fiquem no código de produção.

- **`no-nested-ternary: "warn"`**  
  Emite um **aviso** quando um operador ternário é aninhado, o que pode reduzir a legibilidade do código.

- **`prefer-const: "warn"`**  
  Emite um **aviso** quando uma variável declarada com `let` não é reatribuída, sugerindo o uso de `const`.

- **`react/display-name: "warn"`**  
  Emite um **aviso** quando componentes React não possuem um nome de exibição, o que facilita a depuração.

### **Importação e Organização**

- **`import/order: ["warn", { groups: [...] }]`**  
  Emite um **aviso** quando as importações não são organizadas de forma padrão, dividindo-as em grupos: `builtin`, `external`, `internal`, e `[parent, sibling, index]`.

- **`unused-imports/no-unused-imports: "error"`**  
  Marca como **erro** o uso de importações não utilizadas, incentivando a limpeza do código.

- **`unused-imports/no-unused-vars: ["warn", { vars: "all", varsIgnorePattern: "^_", argsIgnorePattern: "^_" }]`**  
  Emite um **aviso** sobre variáveis não utilizadas, exceto aquelas iniciadas com `_`, que são comumente usadas como placeholders.

### **React e Hooks**

- **`react-hooks/rules-of-hooks: "error"`**  
  Garante que os hooks do React sejam usados corretamente, em conformidade com as regras estabelecidas.

- **`react-hooks/exhaustive-deps: "warn"`**  
  Emite um **aviso** quando as dependências de hooks não estão completas ou incorretas, prevenindo comportamentos inesperados.

- **`react/jsx-uses-react: "off"`**  
  Desabilita a exigência do `React` no escopo ao usar JSX, pois o Next.js gerencia isso automaticamente.

- **`react/react-in-jsx-scope: "off"`**  
  Desabilita a exigência de ter `React` no escopo, já que no Next.js isso não é necessário.

- **`react/prop-types: "off"`**  
  Desabilita a verificação de `prop-types`, uma vez que o TypeScript já realiza a validação de tipos.

### **TypeScript**

- **`@typescript-eslint/explicit-function-return-type: "warn"`**  
  Emite um **aviso** quando funções não possuem tipo de retorno explícito, incentivando a clareza no código.

- **`@typescript-eslint/no-unused-vars: ["warn", { argsIgnorePattern: "^_" }]`**  
  Emite um **aviso** para variáveis não utilizadas, exceto aquelas que começam com `_`, geralmente usadas como placeholders.

### **Acessibilidade**

- **`jsx-a11y/click-events-have-key-events: "warn"`**  
  Emite um **aviso** quando eventos de clique (`onClick`) não têm um evento de teclado correspondente (como `onKeyDown` ou `onKeyUp`), tornando a interface acessível a usuários de teclado.

- **`jsx-a11y/no-static-element-interactions: "warn"`**  
  Emite um **aviso** quando elementos estáticos (`div`, `span`) possuem eventos interativos (como `onClick`), mas não têm semântica ou suporte de acessibilidade.

- **`jsx-a11y/aria-role: "warn"`**  
  Emite um **aviso** quando elementos interativos não possuem um papel ARIA apropriado, essencial para melhorar a acessibilidade.

- **`jsx-a11y/no-autofocus: "warn"`**  
  Emite um **aviso** quando o atributo `autofocus` é utilizado, já que pode interferir na experiência de usuários com deficiência.

---

Essas regras ajudam a manter o código **limpo**, **legível**, **acessível** e **organizado**, seguindo as melhores práticas ao trabalhar com **React** e **TypeScript**.

## **Prisma ORM**

Esta aplicação utiliza o Prisma ORM para gerenciar e acessar o banco de dados.

- **`DATABASE_URL="file:./dev.db"`**
  É um banco de dados sqllite

### Prisma Studio

Para visualizar e editar os dados através de uma interface gráfica, execute:

**Passo 1:** Vá até o diretório do backend:

```bash
cd Varos/src/backend
```

**Passo 2:** Execute o comando:

```bash
npx prisma studio
```

💡 O Prisma Studio abrirá automaticamente em:  
🔗 [http://localhost:5555](http://localhost:5555)

---
