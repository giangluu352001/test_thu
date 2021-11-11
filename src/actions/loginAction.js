import axios from "axios";

export const login = (name, password) => async (dispatch) => {
    try {
      dispatch({ type: "LOGIN_REQUEST" });
  
      const { data } = await axios.post(
        `/api/v1/login`,
        { name, password },);
  
      dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
    } catch (error) {
      dispatch({ type: "LOGIN_FAIL", payload: error.response.data.message });
    }
  };

  export const register = (userData) => async (dispatch) => {
    try {
        console.log(userData)
      dispatch({ type: "REGISTER_USER_REQUEST" });
      const { data } = await axios.post(`/api/register`, userData);
  
      dispatch({ type: "REGISTER_USER_SUCCESS", payload: data.user });
    } catch (error) {
      dispatch({
        type: "REGISTER_USER_FAIL",
        payload: error.response.data.message,
      });
    }
  };

  export const loadUser = () => async (dispatch) => {
    try {
      dispatch({ type: "LOAD_USER_REQUEST" });
  
      const { data } = await axios.get(`/api/v1/me`);
  
      dispatch({ type: "LOAD_USER_SUCCESS", payload: data.user });
    } catch (error) {
      dispatch({ type: "LOAD_USER_FAIL", payload: error.response.data.message });
    }
  };