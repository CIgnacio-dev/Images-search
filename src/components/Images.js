import React from 'react';

const Img=(props)=>{
    const {largeImageURL, previewURL, tags} = props.images;
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top"/>
                <a href={largeImageURL} target="_blank" className="btn btn-info">Ver A Tamaño Completo</a>
            </div>
        </div>
    )

}

export default Img