import React from 'react';
import './App.css';
import styled from 'styled-components'

import ArtigosNaTela from './components/ArtigosNaTela.js'

import cabecalho from './imagens/cabecalho.png'
import rodape from './imagens/rodape.png'

const SiteInteiro = styled.div`
  display: flex;
  flex-direction: column ;
`
const Header = styled.header`
  width: 100vw;
  height: 15vw;
`
const ImagemPontas = styled.img`
  width:100%;
  
`
const ConteudoPrincipal = styled.div`
  background-color: #dfd0db;
  display: flex;
  flex-wrap: nowrap;
  min-height: 80vh;
`
const Footer = styled.div`
  width: 100vw;
  height: 20vh;
`
const Navegador = styled.nav`
  background-color: #23001e;
    width: 10vw;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: space-around;
    color: #dfd0db;
    padding: 1vw;
`
const ListaArtigos = styled.section`
  padding:2vw;
  color: #23001e;
  display: flex;
  flex-direction: column-reverse;
`
class App extends React.Component {
  render(){
    return(
      <SiteInteiro>
        <Header>
          <ImagemPontas src={cabecalho} alt="cabecalho"/>
        </Header>

        <ConteudoPrincipal>
          <Navegador>
          </Navegador>

          <ListaArtigos>
            {ArtigosNaTela}
          </ListaArtigos>
        </ConteudoPrincipal>

        <Footer>
          <ImagemPontas src={rodape} alt="rodapé" />
        </Footer>

      </SiteInteiro>
    );
  }         
}


export default App;