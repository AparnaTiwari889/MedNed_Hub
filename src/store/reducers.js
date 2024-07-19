import { LOGIN_ERROR, LOGIN_REQUEST } from "./actionTypes"

import { LOGIN_SUCCESS } from "./actionTypes"
import { useNavigate } from "react-router-dom"

 const init = {isLoading: false, isAuth: false, token:null, isError: false}

 export const authReducers = ( state =init, action ) => {
    
    switch (action.type) {
        case "LOGIN_REQUEST":
            return {...state,isLoading: true, isAuth: false, token:null}
        case "LOGIN_SUCCESS":

            return { ...state , isLoading: false, isAuth: true, token:action.payload}
        case "LOGIN_ERROR":
            return {isLoading: false, isError: true, token:null}
        case "LOGOUT":
            return init; 
        default:
            return state

             
    }

}

// import { LOGIN_SUCCESS, LOGOUT } from "./actionTypes"

// const initialState = {
//     user: null,
//     Auth:false
// }

// export const authReducer=(state=initialState,action)=>{
//     switch(action.type){
//         case LOGIN_SUCCESS :
//             return{
//                 ...state,
//                 user:action.payload,
//                 Auth:true
//             }
//         case LOGOUT:
//             return{
//                 ...state,
//                 user:null,
//                 Auth:false
//             }
//         default:
//             return state
//     }
// }


// import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

// const initialState = {
//   isLoading: false,
//   isAuthenticated: false,
//   token: null,
//   error: false
// };

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOGIN_REQUEST:
//       return { ...state, isLoading: true, error: false };
//     case LOGIN_SUCCESS:
//       return {
//         ...state,
//         isLoading: false,
//         isAuthenticated: true,
//         token: action.payload,
//         error: false
//       };
//     case LOGIN_ERROR:
//       return { ...state, isLoading: false, error: true };
//     default:
//       return state;
//   }
// };

// export default authReducer;