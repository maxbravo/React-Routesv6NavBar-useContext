import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  const userInitial = {
    id: 1234,
    name: "Max",
    email: "maxa.bravo@gmail.com",
  };

  return (
    <div>
      <h1>Login Page</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <span className="navbar-brand">
        <h2>
          {user ? `Hola ${user?.name}` : "Bienvenid@, por favor inicia sesión"}
        </h2>
      </span>
      <button
        className="btn btn-primary"
        onClick={() => setUser({ ...userInitial })}
      >
        Login
      </button>
      <button className="btn btn-warning" onClick={() => setUser()}>
        Logout
      </button>
    </div>
  );
};
