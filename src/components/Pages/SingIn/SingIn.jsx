import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const SingIn = () => {
  const [error, setError] = useState([]);
  const navigate = useNavigate();
  const { singInUser } = useContext(AuthContext);
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const singInHendel = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    singInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("User SingIn", user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("SingIn error", error);
        setError(error.message);
      });
  };
  return (
    <div>
      <h1>SingIn Now</h1>
      <form onSubmit={singInHendel}>
        <h4 className="text-danger">{error}</h4>
        <div className="form-group">
          <label htmlFor="email">Enter your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pass">Enter your Strong Password</label>
          <input
            type="password"
            name="password"
            id="pass"
            className="form-control"
            required
          />
        </div>

        <input
          className="btn btn-dark w-100 mt-4"
          type="submit"
          value="SingUp Now"
        />
      </form>
    </div>
  );
};

export default SingIn;
