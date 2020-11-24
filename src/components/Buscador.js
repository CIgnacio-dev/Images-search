import React, { Component } from 'react';

class Buscador extends Component {

    busquedaRef = React.createRef();

    obtenerDatos= (e) => {
        e.preventDefault();

        const term= this.busquedaRef.current.value;

        this.props.datosBusqueda(term);
    }

    render(){
        return (
        <form onSubmit={this.obtenerDatos}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Escribe lo que quieres buscar"></input>
                </div>
                <div className="form-group col-md-4">
                    <input type="submit" className="btn btn-lg btn-primary" value="Buscar..."></input>
                </div>
            </div>
        </form>
        )    
    }

}

export default Buscador;