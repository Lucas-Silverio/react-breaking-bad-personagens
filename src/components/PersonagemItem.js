import React from 'react'
import './PersonagemComponent.css'

class PersonagemItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            personagem : {},
        }
    }

    componentDidMount(){
        this.setState({ personagem : this.props.personagem })
    }

    montarPagina(){
        return (
            <div>
                <img src={this.state.personagem.img} alt=" " />
                <h1>{this.state.personagem.name}</h1>
            </div>
        )
    }

    render(){
        return(
            <div>
                { this.montarPagina() }
            </div>
        )
    }
}

export default PersonagemItem