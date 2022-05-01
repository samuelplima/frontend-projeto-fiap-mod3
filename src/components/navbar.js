import React from 'react'

import NavbarItem from './navbarItem'
import { AuthConsumer } from '../main/provedorAutenticacao'

function Navbar(props){
    return (
        <div className="navbar fixed-top">
            <div className="container">
               /* <button className="navbar-toggler collapsed" type="button"
                        data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-icon"></span>
                </button>
                <div class="support-alignment"></div>*/
                <a href="/home" className="navbar-brand logo"></a>
               /* <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavbarItem render={props.isUsuarioAutenticado} href="/home" label="Home" />
                        <NavbarItem render={props.isUsuarioAutenticado} href="/cadastro-usuarios" label="Usuários" />
                        <NavbarItem render={props.isUsuarioAutenticado} onClick={props.deslogar} href="/login" label="Sair" />
                    </ul>
                </div>*/
            </div>
        </div>
    )
}

export default () => (
  <AuthConsumer>
    {(context) => (
        <Navbar isUsuarioAutenticado={context.isAutenticado} deslogar={context.encerrarSessao} />
    )}
  </AuthConsumer>
)