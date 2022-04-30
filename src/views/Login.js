import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import { withRouter } from 'react-router-dom'

import UsuarioService from '../app/service/usuarioService'
import LocalStorageService from '../app/service/localstorageService'
import { mensagemErro } from '../components/toastr'
import { AuthContext  } from '../main/provedorAutenticacao'

class Login extends React.Component{

    state = {
        cpf: '',
        senha: ''
    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    entrar = () => {
        this.service.autenticar({
            cpf: this.state.cpf,
            senha: this.state.senha
        }).then( response => {
            this.context.iniciarSessao(response.data)
            this.props.history.push('/home')
        }).catch( erro => {
           mensagemErro(erro.response.data)
        })
    }

    prepareCadastrar = () => {
        this.props.history.push('/cadastro-usuarios')
    }

    render(){
        return (

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="bs-docs-section">
                        <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="CPF: *" htmlFor="exampleInputCpf1">
                                                <input type="cpf" 
                                                    value={this.state.cpf}
                                                    onChange={e => this.setState({cpf: e.target.value})}
                                                    className="form-control" 
                                                    id="exampleInputCpf1" 
                                                    aria-describedby="cpfHelp" 
                                                    placeholder="Digite o CPF" />
                                            </FormGroup>
                                            <FormGroup label="Senha: *" htmlFor="exampleInputSenha1">
                                                <input type="senha" 
                                                        value={this.state.senha}
                                                        onChange={e => this.setState({senha: e.target.value})}
                                                        className="form-control" 
                                                        id="exampleInputSenha1" 
                                                        placeholder="Senha" />
                                            </FormGroup>
                                            <button onClick={this.entrar} className="btn btn-success">
                                                <i className="pi pi-sign-in"></i>Entrar</button>
                                            <button onClick={this.prepareCadastrar} 
                                                    className="btn btn-danger">
                                                    <i className="pi pi-plus"></i>  Primeiro Acesso?
                                            </button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

        )
    }
}

Login.contextType = AuthContext

export default withRouter( Login )