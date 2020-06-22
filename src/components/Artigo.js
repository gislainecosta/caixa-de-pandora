import React from 'react'
import styled from 'styled-components'


class Artigo extends React.Component {
  
    render() {
        let iconeCurtida
            if(this.state.curtido) {
                iconeCurtida = iconeCoracaoPreto
            } else {
                iconeCurtida = iconeCoracaoBranco
            }

        let componenteComentario
            if(this.state.comentando) {
                componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
            }

        let iconeSalvar
            if(this.state.salvo) {
                iconeSalvar = iconeSalvarPreto
            } else {
                iconeSalvar = iconeSalvarBranco
            }

        let componenteCompartilhar

        if (this.state.compartilhando) {
          componenteCompartilhar = <SecaoCompartilhar />
        }


        return <PostContainer>
          
        </PostContainer>
    }
}

export default Artigo