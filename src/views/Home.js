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
            <div className="jumbotron">
                <h1 className="style-title style-title-h1">Olá!</h1>
                <h2 className="lead">Parabéns você está logado</h2>
                <hr className="my-4" />
                <p className="style-text-default">Deseja cadastrar dependentes?</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="/cadastro-usuarios" role="button">
                        <i className="pi pi-users"></i>
                        Cadastrar Dependentes
                    </a>
                </p>
            </div>
        )
    }
}

Home.contextType = AuthContext;

export default Home