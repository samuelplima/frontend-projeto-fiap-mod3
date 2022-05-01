import React from 'react'

import { withRouter } from 'react-router-dom'
import Card from '../components/card'
import FormGroup from '../components/form-group'

import UsuarioService from '../app/service/usuarioService'
import { mensagemSucesso, mensagemErro, mensagemErroCpf } from '../components/toastr'

class CadastroUsuario extends React.Component{
    state = {
        nome : '',
        email: '',
        cpf: '', 
        telefone: '',
        senha: '',
        senhaRepeticao : ''
    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    cadastrar = () => {
        const {nome, email, cpf, telefone, senha, senhaRepeticao } = this.state        
        const usuario = {nome,  email, cpf, telefone, senha, senhaRepeticao }

        try {
            this.service.validar(usuario);
        } catch(erro) {
            const msgs = erro.mensagens;
            msgs.forEach(msg => mensagemErro(msg));
            return false;
        }

        this.service.salvar(usuario)
        .then(response => {
            mensagemSucesso('Usuário cadastrado com sucesso! Faça o login para acessar o sistema.')
            this.props.history.push('/login')
        }).catch(errorcpf => {
            mensagemErroCpf(errorcpf.response.data)
        })
    }

    cancelar = () => {
        this.props.history.push('/login')
    }

    render(){
        return (
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="bs-docs-section">
                        <Card title="Cadastro de Usuário">
                            <div className="bs-component">
                                <FormGroup label="Nome: *" htmlFor="inputNome">
                                    <input type="text"
                                           id="inputNome"
                                           className="form-control"
                                           name="nome"
                                           onChange={e => this.setState({nome: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Email: *" htmlFor="inputEmail">
                                    <input type="email"
                                           id="inputEmail"
                                           className="form-control"
                                           name="email"
                                           onChange={e => this.setState({email: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="CPF: *(Por favor digite utlilizando a máscara)" htmlFor="inputCpf">
                                    <input type="text"
                                           id="inputCpf"
                                           className="form-control"
                                           name="cpf"
                                           maxLength="14"
                                           onChange={e => this.setState({cpf: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Telefone: *" htmlFor="inputTelefone">
                                    <input type="phone"
                                           id="inputTelefone"
                                           className="form-control"
                                           name="telefone"
                                           maxLength="11"
                                           onChange={e => this.setState({telefone: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Senha: *" htmlFor="inputSenha">
                                    <input type="password"
                                           id="inputSenha"
                                           className="form-control"
                                           name="senha"
                                           onChange={e => this.setState({senha: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                                    <input type="password"
                                           id="inputRepitaSenha"
                                           className="form-control"
                                           name="senha"
                                           onChange={e => this.setState({senhaRepeticao: e.target.value})} />
                                </FormGroup>
                                <div className="btn-content">
                                    <button onClick={this.cadastrar} type="button" className="btn btn-bgcolor-primary">
                                        <i className="pi pi-save"></i> Salvar
                                    </button>
                                    <button onClick={this.cancelar} type="button" className="btn btn-bgcolor-secondary">
                                        <i className="pi pi-times"></i> Cancelar
                                    </button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CadastroUsuario)