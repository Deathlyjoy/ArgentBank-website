//---------- IMPORT ----------
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

//---------- COMPONENTS ----------
//import Account from '../../components/Account/Account'

//---------- CSS ----------
import './header.scss'

//---------- ASSETS ----------
import Logo from '../../assets/img/argentBankLogo.png'


function Header() {
   const dispatch = useDispatch();
   const token = useSelector((state) => state.auth.token);
   const firstname = useSelector((state) => state.name.firstname); 

   const handleLogout = () => {
      dispatch({ // Enregistrement du token dans le store
         type: 'LOGOUT',
      });
   };

   useEffect(() => {
      if (token) {
         const fetchData = async () => {
            try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`,
               },
            });
   
            if (response.ok) {
               const data = await response.json();
               console.log(data);

               dispatch({ // Enregistrement des données dans le store
                  type: 'SET_USER',
                  payload: {
                     username: data.body.userName,
                     firstname: data.body.firstName,
                     lastname: data.body.lastName,
                  },
               });
               
            } else {
               console.log("Erreur lors de la récupération du profil de l'utilisateur");
            }
            } catch (error) {
               console.log("Erreur lors de la récupération du profil de l'utilisateur");
            }
         };
         fetchData();
      }
      }, [dispatch, token]);
   return (
      <header className="header">
         {/* Logo */}
         <Link to="/">
               <img className='header__logo' alt='Logo de Argent Bank' src={Logo} />
         </Link>
         {/* Navbar */}
         <nav className='header__nav'>
            <ul>
               <li>
                  {!token ? (
                     <div className='cont-user'>
                        <NavLink className='btn-user' to="/signin">
                           <i className="fa-solid fa-circle-user"> Sign In</i>
                        </NavLink>
                     </div>
                  ) : (
                     <div className='cont-user'>
                        <button className='btn-user' onClick={handleLogout}>Logout</button>
                        <NavLink className='btn-user' to="/user">
                           <i className="fas fa-user-circle"></i>
                           <p>{firstname}</p>
                        </NavLink>
                     </div>
                  )}
               </li>
            </ul>
         </nav>
      </header>
   )
}
 
export default Header