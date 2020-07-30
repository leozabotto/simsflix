import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Catagoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch >
      <Route exact path="/" component={Home} />
      <Route exact path="/cadastro/video" component={CadastroVideo} />
      <Route exact path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

