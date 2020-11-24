import React, { Component } from 'react';
import Buscador from './components/Buscador'
import Resultado from './components/Resultado'

class App extends Component{

  state={
    term: '',
    images: []
  }

  consultarApi = () =>{
    const url= `https://pixabay.com/api/?key=19236705-7019ffa47bf28d7db173a3054&q=${this.state.term}`;
    
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultados => this.setState({images : resultados.hits}))
  }

  datosBusqueda = (term) => {
    this.setState({
      term
    },()=>{
      this.consultarApi();
    })
  }

render() {
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Buscador
        datosBusqueda={this.datosBusqueda}/>
        <Resultado
        images={this.state.images}/>
      </div>
    </div>
  );
}
}

export default App;
