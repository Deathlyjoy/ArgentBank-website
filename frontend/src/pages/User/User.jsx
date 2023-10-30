import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
//import Button from "../../components/Button/Button";

import './user.scss'
import Transactions from '../../components/Transactions/Transactions'

function User() {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const token = useSelector((state) => state.auth.token);

   const user = useSelector((state) => state.name.username);
   const firstname = useSelector((state) => state.name.firstname);
   const lastname = useSelector((state) => state.name.lastname);

   const [showForm, setShowForm] = useState(false);
   const [newUsername, setNewUsername] = useState('');

   const toggleForm = () => {
      setShowForm(!showForm);
   };

   const handleInputChange = (event) => {
      setNewUsername(event.target.value);
   };

   const handleSubmit = async (event) => {
      event.preventDefault();

      try {
         const response = await fetch('http://localhost:3001/api/v1/user/profile', {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify({userName: newUsername}),
         });

         if (response.ok) {
         console.log(response);
         dispatch({
            type: 'SET_USER',
            payload: {
               username: newUsername,
               firstname: firstname,
               lastname: lastname,
            },
         });

         
         } else {
         console.error('Erreur lors de l envoi du nouveau nom d utilisateur');
         }
         
      } catch (error) {
         console.error('Erreur lors de la requête :', error);
      }
      setNewUsername('');
      setShowForm(false);
   };

   useEffect(() => {
      setNewUsername(user);
   }, [user]);

   // Si l'utilisateur n'est pas connecté, redirection vers la page de connexion
   useEffect(() => {
      if (!token) {
         navigate("/signin");
      }
   }, [token, user, navigate]);

   return (
      <main className="user-page">
         {showForm === false ? (
        <div className="user-welcome-content">
          <h1 className="welcome-title">Welcome back</h1>
          <p className="welcome-names">{firstname} {user}!</p>
          <button className="transaction-button button" onClick={toggleForm}>Edit name</button>
        </div>
      ) : (
        <div className="user-edit-container">
          <h1 className="edit-title">Edit user info</h1>
          <form className="edit-form" onSubmit={handleSubmit}>
            <div className="edit-items">
               <label htmlFor="username">Username:</label>
               <input type="text" id="username" value={newUsername} onChange={handleInputChange} required/>
            </div>
            <div className="edit-items">
               <label htmlFor="firstname">First Name:</label>
               <input type="text" id="firstname" value={firstname} disabled/>
            </div>
            <div className="edit-items">
               <label htmlFor="lastname">Last Name:</label>
               <input type="text" id="lastname" value={lastname} disabled/>
            </div>
            <div className="btn-container">
            <button type="submit" className='transaction-button button'>Confirm</button>
            </div>
          </form>
        </div>
      )}
      <Transactions />
      </main>
   )
}
 
export default User