import React from 'react'
import './PersonagemComponent.css'
import PersonagemItem from './PersonagemItem'

class PersonagemComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            personagens: [],
            loading : true,
            renderizarCaracter : false,
            personagem : {}
        }

        this.clicar = this.clicar.bind(this)
    }

    componentDidMount(){
        this.callApi().then(item => {
            item.forEach(i =>{
                this.setState({ personagens : [...this.state.personagens, i]})
                this.setState( { loading : false })
            })
        })
    }

    async callApi(){
        const response = await fetch('https://www.breakingbadapi.com/api/characters')
        const body = await response.json()

        if(response.status !== 200){
            return { error : "Status :"+response.status }
        }

        return body
    }

    carregarPersonagens(){
        let personagens = [] 
        this.state.personagens.forEach((item,index) =>{
            personagens.push(<button onClick={() => this.clicar(item)} key={index}>{item.nickname}</button>)
        })
        return (
            <div>
                <div>{ personagens }</div>
            </div>
        )
    }

    clicar(item){
        this.setState({ personagem : {} , renderizarCaracter: false }, () =>{ 
            this.setState({ personagem : item, renderizarCaracter : true})
        })
    }

    carregarPItem(){
        return(
            <PersonagemItem personagem={this.state.personagem}/>
        )
    }

    render(){
        return(
            <div>
                { this.state.loading ? "Carregando" : this.carregarPersonagens() }
                { this.state.renderizarCaracter ? this.carregarPItem() : ""}
            </div>
        )
    }
}

export default PersonagemComponent