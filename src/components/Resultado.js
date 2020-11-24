import React, { Component } from 'react';
import Img from './Images'

class Resultado extends Component {
    showImg=() =>{
        const images= this.props.images;

        if (images.length ===0) return null;
        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {images.map(images =>(
                        <Img
                        key={images.id}
                        images={images}
                        />
                    ))}
                </div>
            </React.Fragment>
        )
    }
    render(){
        return(
            <React.Fragment>
            { this.showImg() }
            </React.Fragment>
        )
    }
}

export default Resultado;