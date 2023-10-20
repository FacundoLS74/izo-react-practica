import React from 'react';
import Body from './Body';
import Page from './Page';
import BlogPost from './BlogPost';

const Main = ({ pageBody, externalLinks }) => {
  return (
    <main>
      <Body pageBody={pageBody} />
      <nav>
        <ul>
          {externalLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      <Page>
        <p>GANÓ NEWELL'S</p>
      </Page>
      <BlogPost
        title="Tigre estaba obligado a ganar para salir de la zona baja, pero cayó 2-0 ante Newell's en Victoria"
        body={
          <div>
            <b>Ingredientes:</b>
            <br /><br /> {/*Lograr espacios*/}
            El Matador aguantaba y se llevaba un punto valioso, pero la Lepra le hizo dos goles a cinco del final y lo dejó cerca de la zona del descenso en la tabla anual.
            
          </div>
        }
      />
    </main>
  );
}

export default Main;
