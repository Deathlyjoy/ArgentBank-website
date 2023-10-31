// Gestion du token pour l'authentification dans le store
const initialState = {
   token: ''
};

const authReducer = (state = initialState, action) => {
   switch (action.type) { 
      case 'LOGIN':
         return {
            ...state,
            token: action.payload.token // Enregistrer le token dans le store
         };
      case 'LOGOUT':
         return initialState; // Réinitialiser le store
      default:
         return state;
   }
};
 
export default authReducer;
 