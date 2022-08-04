
import React, { useState } from "react";
import './login.css';
import { Link, Redirect} from "react-router-dom";

import firebase from '../../config/firebase';
import 'firebase/auth';

import { useSelector , useDispatch} from 'react-redux';

function Login(){
        const [email,setEmail]=useState();
        const [senha,setSenha]=useState();
        const [msgTipo,setMsgTipo]=useState();

        const dispatch =useDispatch();
        function logar(){
            
             firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
                setMsgTipo('sucesso')
                setTimeout(() => {
                  dispatch({type: 'LOG_IN', usuarioEmail:email})  
                }, 2000);
            }).catch(erro => {
                setMsgTipo ('erro')
            });
        }

    return(
    <div className="login-content d-flex aligm-itens-center">

        {useSelector(state => state.usuarioLogado)>0 ? <Redirect to='/home' /> : null}
        <form className="form-signin mx-auto">
        <div className="text-conter mb-4">
        <h1 className="h3 mb-3 fw-normal text-center text-white font-weight-bold">Login</h1>
        </div>

        
        <input onChange={(e) => setEmail(e.target.value) } type="email" class="form-control my-2" id="inputEmail" placeholder="Email"/>
        <input onChange={(e) => setSenha(e.target.value) }type="password" class="form-control my-2" id="inputPassword" placeholder="Senha"/>
      

        <button onClick={logar} class="btn btn-lg btn-login btn-block" type="button">Logar</button>

        <div className="msg-login text-white text-center my-4">
            {msgTipo ==='sucesso' && <span><strong>Você está conectado!</strong></span>}
            {msgTipo ==='erro' && <span><strong>Algo deu errado!</strong> Verifique se a senha ou usuário estão corretos.</span>}
           
        </div>

        <div className="opcoes-login mt-5 text-center">
            <Link to="/usuariorecuperarsenha" className="mx-2">Recuperar Senha</Link>
            <span className="text-white">&#9679;</span>
        </div>
    </form>
  </div>
    )
}

export default Login;
