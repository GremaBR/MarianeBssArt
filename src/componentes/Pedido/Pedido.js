import React from 'react';

const WhatsAppButton = ({ titulo, tecnica, dimensoes }) => {
  const handleClick = () => {
    const mensagem = 'Olá! Gostaria de fazer um pedido da arte ${ titulo} , ${ tecnica} ,  ${ dimensoes}.';
    const numeroWhatsApp = '+5547988719165'; 

    // Formato da URL para enviar mensagem via WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
  };

  return (
    <button onClick={handleClick} class="button-pedido">Encomendar via WhatsApp</button>
  );
}

export default WhatsAppButton;
