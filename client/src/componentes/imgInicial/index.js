import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../config/firebase';

//import './imgInicial.css';

function ImgInicial({img}){

    const[urlImagem, setUrlImagem] = useState();

    useEffect(() => {
        firebase.storage().ref(`imagens/${img}`).getDownloadURL().then(url => setUrlImagem(url));
    }, [urlImagem]);

     return(
           
            <div className=" image-container">
                
                <img src={urlImagem} className="col-md-7 col-sm-12" alt="Imagem Inicial " />
            </div>
            
    )
}

export default ImgInicial;