import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST } from "./actionTypes";
import { redirect, useNavigate } from "react-router-dom"

export const loginAction = (data) => async (dispatch) => {
  try {
    dispatch(loginRequestAction());

    let logindata = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),

    });
    
    const user = await logindata.json();
    console.log(user);
    dispatch({ type: LOGIN_SUCCESS, payload: user.token });

  } catch (err) {
    console.log(err);
    return dispatch({ type: LOGIN_ERROR });
  }
};

const loginRequestAction = () => {
  return { type: LOGIN_REQUEST };
};
export default loginRequestAction;




