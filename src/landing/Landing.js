import Banner from "./Banner";
import FeatureProduct from "../components/FeatureProduct";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Redirect } from "react-router-dom";


function Landing() {
  // return (
  //   <>
  //     <ScrollToTopOnMount />
  //     <Banner />
  //     <div className="d-flex flex-column bg-white py-4">
  //       <p className="text-center px-5">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //         eiusmod tempor incididunt ut labore et dolore magna aliqua.
  //       </p>
  //       <div className="d-flex justify-content-center">
  //         <Link to="/view-inventory" className="btn btn-primary" replace>
  //           Browse products
  //         </Link>
  //       </div>
  //     </div>
  //     <h2 className="text-muted text-center mt-4 mb-3">New Arrival</h2>
  //     <div className="container pb-5 px-lg-5">
  //       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
  //         {Array.from({ length: 6 }, (_, i) => {
  //           return <FeatureProduct key={i} />;
  //         })}
  //       </div>
  //     </div>
  //     <div className="d-flex flex-column bg-white py-4">
  //       <h5 className="text-center mb-3">Follow us on</h5>
  //       <div className="d-flex justify-content-center">
  //         <a href="!#" className="me-3">
  //           <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
  //         </a>
  //         <a href="!#">
  //           <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
  //         </a>
  //         <a href="!#" className="ms-3">
  //           <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
  //         </a>
  //       </div>
  //     </div>
  //   </>
  // );

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({ username: "", password: "" });

  const handleLogin = () => {
    if (user.username === "demo" && user.password === "password") {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };


  if (loggedIn) {
    return <Redirect to="/view-inventory" />;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 mt-5 pt-3">Login</h2>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Landing;
