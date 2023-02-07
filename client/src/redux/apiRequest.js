import axios from "axios";
import { loginFailed, loginStart, loginSusscess } from "./authSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());

  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_ENDPOINT}/auth/login`,
      user,
    );
    dispatch(loginSusscess(res.data));
    navigate("/");
  } catch (err) {
    dispatch(loginFailed());
  }
};
