import React from 'react';

const WhatsAppButton = ({ produto, tecnica, dimensoes }) => {
  const handleClick = () => {
    // Lógica para enviar mensagem via WhatsApp
    const mensagem = `Olá! Gostaria de fazer um pedido da arte ${produto}, ${tecnica}, ${dimensoes}.`;
    const numeroWhatsApp = '+5547999131349'; // Substitua pelo seu número

    // Formato da URL para enviar mensagem via WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

    // Abrir a URL em uma nova janela/tab
    window.open(url, '_blank');
  };

  return (
    <button onClick={handleClick}>Fazer Pedido via WhatsApp</button>
  );
}

export default WhatsAppButton;
