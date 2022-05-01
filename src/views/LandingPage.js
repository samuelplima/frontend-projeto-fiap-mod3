import React from 'react'
import { withRouter } from 'react-router-dom'

class LandingPage extends React.Component {

    goToHomePage = () => {
        this.props.history.push("/home")
    }

    render(){
        return (
            <div class="landing-page text-center">
                <div class="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h1 class="style-title style-title-h1">Olá! Seja Bem Vindo ao Meu Vivo</h1>
                            <p class="style-text-default">Aqui você pode cadastrar dependentes, solicitar boleto e muito mais.</p>

                            <div className="offset-md-4 col-md-4">
                                <button style={{ width: '100%' }}
                                        onClick={this.goToHomePage}
                                        className="btn btn-bgcolor-primary">
                                    <i className="pi pi-sign-in"></i>
                                    Acessar
                                </button>
                            </div>
                        </div>
                    </  div>
                </div>
            </div>
        )
    }

}

export default withRouter(LandingPage)