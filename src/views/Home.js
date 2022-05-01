import React from 'react'

import UsuarioService from '../app/service/usuarioService'
import { AuthContext } from '../main/provedorAutenticacao'

class Home extends React.Component{

    constructor(){
        super()
        this.usuarioService = new UsuarioService();
    }

    render(){
        return (
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="jumbotron">
                        <div className="bs-docs-section">
                            <h1 className="style-title style-title-h1">Olá!</h1>
                            <h2 className="lead">Parabéns você está logado</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Home.contextType = AuthContext;

export default Home