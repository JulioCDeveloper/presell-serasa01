# Pré-Sella - Setup Guide

## Descrição

Projeto de pré-venda baseado na tela inicial do projeto emprestimo. Exibe uma mensagem simples informando que existem valores disponíveis para consulta.

## Estrutura

```
pre-sella/
├── src/
│   ├── assets/
│   │   └── logo_serasa.png
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos
│   ├── index.css        # Estilos globais
│   └── main.jsx         # Entry point
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Características

- Tela única com logo Serasa
- Mensagem: "Existem valores disponíveis a serem consultados. Clique no botão abaixo para consultar agora."
- Botão "Verificar Valores"
- Contador de pessoas online (estático por enquanto)
- Design responsivo
- Cor primária: Pink (#ec4899)

## Como usar

1. Instalar dependências:
```bash
cd pre-sella
npm install
```

2. Rodar em desenvolvimento:
```bash
npm run dev
```

3. Build para produção:
```bash
npm run build
```

## Próximos passos

- Configurar redirecionamento do botão "Verificar Valores"
- Adicionar animação ao contador de pessoas online
- Integrar com backend se necessário
