// Assuntos da página. Usado pelo React (texto dos botões) e pelo Node (mensagem do WhatsApp).
// Para criar um novo botão, adicione um item aqui e um ícone em src/App.jsx.

export const MAIN_MESSAGE = 'Olá! Vim pelo Instagram e gostaria de falar com a loja.';

export const topics = [
  {
    id: 'pecas',
    icon: 'gear',
    title: 'Peças para a minha moto',
    subtitle: 'Diga o modelo e o ano e a gente confere',
    message: 'Olá! Vim pelo Instagram e preciso de uma peça para a minha moto.',
  },
  {
    id: 'servico',
    icon: 'wrench',
    title: 'Agendar um serviço',
    subtitle: 'Revisão e manutenção da sua moto',
    message: 'Olá! Vim pelo Instagram e quero agendar um serviço para a minha moto.',
  },
  {
    id: 'orcamento',
    icon: 'doc',
    title: 'Pedir orçamento',
    subtitle: 'Descreva o problema ou mande a foto da peça',
    message: 'Olá! Vim pelo Instagram e gostaria de pedir um orçamento.',
  },
  {
    id: 'acessorios',
    icon: 'moto',
    title: 'Acessórios',
    subtitle: 'Pergunte pelo item que você procura',
    message: 'Olá! Vim pelo Instagram e quero saber sobre acessórios.',
  },
];
