import React from 'react'
import PageDefault from '../../../components/PageDefault'
import PageDegault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
  return (
    <PageDegault>
      <h1> Cadastro de Vídeo </h1>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDegault>
  );
}

export default CadastroVideo;