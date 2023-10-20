import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

function Practica2() {
  const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.',
  };

  const externalLinks = [
    { text: 'Página 1', url: 'https://www.tiobe.com/tiobe-index/' },
    { text: 'Página 2', url: 'https://www.ole.com.ar/futbol-primera/tigre-newells-zona-baja-descenso_0_VNpATYw9eD.html' },
  ];

  return (
    <div>
      <Header pageTitle={site.pageTitle} />
      <Main pageBody={site.pageBody} externalLinks={externalLinks} />
    </div>
  );
}

export default Practica2;
