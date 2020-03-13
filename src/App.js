import React from 'react'
import './App.css'
import PersonagemComponent from './components/PersonagemComponent'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <PersonagemComponent/>
        </div>
      </div>
    )
  }
}

export default App
