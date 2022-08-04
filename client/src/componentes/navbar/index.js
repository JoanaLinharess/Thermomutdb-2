import React from "react";
import _ from "lodash";
import './navbar.css';
import { Link } from "react-router-dom";
import { useSelector , useDispatch} from 'react-redux';

function Navbar(){
  const dispatch = useDispatch();
    return(
        <nav className="navbar navbar-expand-lg ">
  
    <span className="navbar-brand text-white font-weight-bold" href="#">Thermomutdb2</span>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars text-white"></i>
                </button>
         <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item"><Link className="nav-link ml-2" to="/home">Home</Link></li> 

                    {           
                        useSelector(state => state.usuarioLogado) > 0 ?                  
                    <>                        

                        <li className="nav-item"><Link className="nav-link" onClick={() => dispatch({type: 'LOG_OUT'})   }>Sair</Link></li> 
                    </>
                    :
                    <>
                    <li className="nav-item"><Link className="nav-link" to="/publicationManagement">Publication Management</Link></li>
                     <li className="nav-item"><Link className="nav-link" to="/usersManagement">Users Management</Link></li> 
                     <li className="nav-item"><Link className="nav-link" to="/errorsReport">Errors Report</Link></li>
                     
                     <li className="nav-item"><Link className="nav-link" to="/databaseManagement">Database Management</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/login">ÁREA RESTRITA</Link></li> 
                    </>
                    }
                    
                </ul>
            </div>
</nav>
    )
}

export default Navbar;