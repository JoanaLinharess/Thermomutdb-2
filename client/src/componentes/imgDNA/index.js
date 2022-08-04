import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../config/firebase';

import './imgDNA.css';

function ImgDNA({img,}){

    const[urlImagem, setUrlImagem] = useState();

    useEffect(() => {
        firebase.storage().ref(`imagens/${img}`).getDownloadURL().then(url => setUrlImagem(url));
    }, [urlImagem]);

     return(
        <div className=" col-md-12 col-sm-12 ">
            <img src={urlImagem} className="" alt="Imagem DNA" />
            </div>
    )
}

export default ImgDNA
;