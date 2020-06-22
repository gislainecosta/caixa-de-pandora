import React from 'react'
import styled from 'styled-components'
import Artigo from './Artigo'


class ArtigosNaTela extends React.Component {
  state = {
      artigos:[
        {
            titulo: '',
            data: '',
            tema: '',
            imagem: '',
            textoPrincipal: '',
            saibaMais: false,
            fonte: '',
        }
      ]
  }

  
    render() {
      
        const listaPosts = this.state.posts.map((noticia) => {
          return(
            <Artigo
                titulo={noticia.titulo}
                data={noticia.data}
                tema={noticia.tema}
                imagem={noticia.imagem}
                textoPrincipal={noticia.textoPrincipal}
                saibaMais={noticia.saibaMais}
                fonte={noticia.fonte}
            />
          );
        });

        return(
            <div>
                {listaPosts}
            </div>
        );
    }
}
export default ArtigosNaTela