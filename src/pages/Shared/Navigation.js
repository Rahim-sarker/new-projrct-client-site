import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navigation = () => {

  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };

  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="hospital">Hospitals</Link>
      </li>
      <li>
        <Link to="doctor">Doctors</Link>
      </li>
      {/* <li>
        <Link to="/appoinment">Appoinment</Link>
      </li> */}
      {/* <li>
        <Link to="review">Reviews</Link>
      </li> */}
      <li>
        <Link to="contactus">Contact us</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        {user &&  <Link to="/dashboard">Dashboard</Link>}
      </li>
      <li>
       { user ? <button className="btn  btn-ghost" onClick={logout}>Sign Out</button>: <Link to="login">Login</Link>}
      </li>
     
       {/* <li>
         <span>{user.displayName}</span>
      </li>  */}
     
    </>
  );
  return (
    <div className="navbar bg-secondary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case font-bold text-xl">
          Public Health Service
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>



      <div className="navbar-end">
      <label tabIndex="1" htmlFor=" dashboard-sidebar" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
      </div>
    </div>
  );
};

export default Navigation;
