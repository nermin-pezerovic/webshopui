import { createContext, ReactNode, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthData = {
  email: string;
  password: string;
};

type AuthContext = {
  loginUser: ({ email, password }: AuthData) => string;
  signUserUp: ({ email, password }: AuthData) => string;
  didRequestFail: () => any;
  isLoggedIn: () => any;
  logOut: () => any;
};

const AuthContext = createContext({} as AuthContext);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [error, setError] = useState(Object());
  const navigate = useNavigate();

  function didRequestFail() {
    if (error.response) return error.response;
    return "";
  }

  function isLoggedIn(): any {
    const token = localStorage.getItem("token");
    return token;
  }

  function logOut(): any {
    localStorage.removeItem("token");
    localStorage.removeItem("shopping-cart");
  }

  function loginUser({ email, password }: AuthData): string {
    axios
      .post(`http://localhost:3000/auth/login`, { email, password })
      .then((res) => {
        const token = res.data;
        setError({});
        navigate("/");
        localStorage.setItem("token", JSON.stringify(token.token));
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
    return "";
  }

  function signUserUp({ email, password }: AuthData): string {
    axios
      .post(`http://localhost:3000/auth/sign-up`, { email, password })
      .then((res) => {
        const token = res.data;
        setError({});
        navigate("/");
        return token;
      })
      .catch((err) => {
        setError(err);
      });
    return "";
  }

  return (
    <AuthContext.Provider
      value={{
        loginUser,
        signUserUp,
        didRequestFail,
        isLoggedIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
