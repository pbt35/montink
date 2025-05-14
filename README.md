# 🛍️ Mini E-commerce React

Este é um projeto de front-end para um mini e-commerce desenvolvido com **React**, com funcionalidades de:

- 🛒 Adição de produtos ao carrinho (com persistência por 15 minutos)
- ❤️ Favoritar produtos (com persistência por 15 minutos)
- ❓ Enviar perguntas ao vendedor (com persistência por 15 minutos)
- 🔁 Manutenção de dados entre recarregamentos de página, com expiração automática via `localStorage`

---

## 🚀 Funcionalidades

### 🛒 Carrinho
- Adicione produtos ao carrinho.
- Os itens permanecem salvos mesmo após recarregar a página (expiram em 15 minutos).

### ❤️ Favoritos
- Marque/desmarque produtos como favoritos.
- Persistência no `localStorage` por 15 minutos.

### ❓ Pergunte ao Vendedor
- Usuário pode enviar perguntas simuladas.
- As perguntas são salvas localmente e exibidas na interface.
- As mensagens expiram automaticamente após 15 minutos.

---
## 🧠 Tecnologias Utilizadas

- React
- Context API
- LocalStorage
- JavaScript (ES6+)
- Tailwind CSS (ou classes utilitárias)

---

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/pbt35/montink.git

cd montink

Instale as dependências:

npm install
Rode o projeto localmente:

npm run dev
```

### LICENÇA

Este projeto está licenciado sob a licença MIT. Sinta-se livre para utilizar e modificar conforme necessário.
