import React, { useState, useEffect } from "react";
import './home-fire.css';

import firebase from '../../config/firebase';

import Navbar from "../../componentes/navbar";

import ImgInicial from "../../componentes/imgInicial";

import ImgDNA from "../../componentes/imgDNA";




function HomeFire(){
    const[inicio,setInicio]=useState([]);

	const[DNA,setDNA]=useState([]);

	let imgDNA=[];

	useEffect(() =>{
        firebase.firestore().collection('DNA').get().then(async (resultado)=> {
            await resultado.docs.forEach(doc => {
                imgDNA.push({
                    id:doc.id,
                    ...doc.data()
                })

            })

            setDNA(imgDNA);
        })

    });
    return (
        <>
        <Navbar/> 
		<div className="imagemdna-container" id="imgini">
			
        {inicio.map(item => <ImgInicial img={item.foto} alr="logo" />)}

        </div>
		<section className="sec about" id="about">
				<div className="container content">
					<div className="imagemdna-container">
					
       				 {DNA.map(item => <ImgDNA img={item.foto} alr="firula" />)}
       				 
					</div>
					<div className="row mxw justify-content-center">
						<h3>SOBRE O PROJETO</h3>
						<p className="text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum.
						</p>
						<a href="https://www.linkedin.com/"><button type="button" className="btn btn-dark">
							LinkedIn
						</button></a>
					</div>
				</div>
			</section>


                

                
                <section className="sec" id="team">
				<div className="container content">
					<div className="row mxw justify-content-center">
						<h3>COMO UTILIZAR</h3>
						<p className="text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco.
						</p>
					</div>
				</div>
				</section>

                <section className="sec contact" id="contact">
				<div className="container content">
					<div className="row mxw justify-content-center">
						<h3>Send Us A Message
						<p className="text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</p></h3>
					</div>
					<form action="https://api.staticforms.xyz/submit" method="POST" class="text/plain">
					<input type="hidden" name="accessKey" value="2992ef1c-c661-4366-8ca5-87ccb754df52"/> 
					<input type="hidden" name="redirectTo" value="http://localhost:3000/home"/>
						<div className="form-row nameMessage justify-content-center">
							<div className="form-group col-md-4">
								<input
									name="name"
									type="text"
									className="form-control"
									placeholder="Your Name"
								/>
							</div>
							<div className="form-group col-md-4">
								<input
									name="email"
									type="email"
									className="form-control"
									id="inputEmail4"
									placeholder="Email"
								/>
							</div>
						</div>
						<div className="form-row textMessage justify-content-center">
							<div className="form-group col-md-8">
								<textarea
									name="message"
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									placeholder="Message"
								/>
							</div>
						</div>
						<div className="form-row justify-content-center">
							<button type="submit" className="btn btn-light" value="EnviarS">
								Send
							</button>
						</div>
					</form>
					<div className="row iconFooter justify-content-center">
						<ul>
							<a href="#" className="fab fa-facebook" />
							<a href="#" className="fab fa-instagram" />
							<a href="#" className="fab fa-linkedin" />
						</ul>
					</div>
				</div>
			</section>
        </>

    )
}

export default HomeFire;