import React from 'react';
import { FooterBase } from './styles';
import logoFooter from '../../assets/img/logoFooter.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={logoFooter} alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>       
      </p>
      <p>
        Leonardo Zabotto
      </p>
    </FooterBase>
  );
}

export default Footer;
