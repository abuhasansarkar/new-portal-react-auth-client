import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const SingUp = () => {
  // Error Hendeling state
  const [error, setError] = useState([]);
  // Checkbox and trems and condition accepted
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();
  const { createUser, upDateUserProfile, emailVerify } =
    useContext(AuthContext);

  const singUpHendel = (event) => {
    event.preventDefault();
    // console.log(event.target);
    const form = event.target;
    const name = form.name.value;
    const profileURL = form.profile_img_url.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, profile_ing, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/");
        updateUserProfileHeldel(name, profileURL);
        mailVerifyHendel();
        toast.success('Please Check your and verify your Email Address.')
      })
      .catch((error) => {
        console.error("UserCreate Error", error);
        setError(error.message);
      });
  };
  //   Checkbox function
  const acceptHendel = (event) => {
    setAccepted(event.target.checked);
  };

  //   Profile Update
  const updateUserProfileHeldel = (name, profileURL) => {
    const profile = {
      displayName: name,
      photoURL: profileURL,
    };
    upDateUserProfile(profile)
      .then(() => {})
      .then((error) => console.error(error));
  };
//   Mail Verify 
  const mailVerifyHendel = () => {
     emailVerify()
     .then(() => {})
     .catch(error => console.error(error))
  }

  return (
    <div>
      <h1>SingUp Now</h1>
      <form onSubmit={singUpHendel}>
        <h3 className="text-danger">{error}</h3>
        <div className="form-group">
          <label htmlFor="name">Enter your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="pic">Enter your Profile picture URL</label>
          <input
            type="text"
            name="profile_img_url"
            id="pic"
            className="form-control"
          />
        </div>
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
        <div className="form-group">
          <input onClick={acceptHendel} type="checkbox" id="check" required />
          <label htmlFor="check">
            {" "}
            Accecpt{" "}
            <>
              <Link to="/trams">Trams and condition</Link>
            </>
          </label>
        </div>

        <input
          className="btn btn-dark w-100 mt-4"
          type="submit"
          value="SingUp Now"
          disabled={!accepted}
        />
      </form>
    </div>
  );
};

export default SingUp;
