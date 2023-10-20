import React from 'react';

const Body = ({ body }) => {
  return <div style={{ fontStyle: 'italic', textTransform: 'uppercase', backgroundColor: 'darkred', color:'whitesmoke' }}>{body}</div>; // se transforma una fuente de texto y mayuscula.
};

export default Body;
