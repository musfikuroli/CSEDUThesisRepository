import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import cseduLogo from "../../Assets/Images/cseduLogo.png";
import { AuthContext } from "../../context/AuthProvider";
import { ImProfile } from "react-icons/im";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/publications">Publications</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>

      {user?.uid ? (
        <>
          <li>
            <Link to="/submission">Submission</Link>
          </li>
          <li onClick={handleSignOut} to="/">
            <Link>Signout</Link>
          </li>
          <li>
            <Link className="text-xl font-extrabold" to="/myProfile">
              <ImProfile></ImProfile>
            </Link>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </React.Fragment>
  );
  return (
    <div>
      <div className="navbar flex justify-between shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              // htmlFor="my-drawer"
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <span className="text-xl">
                <HiMenu></HiMenu>
              </span>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="normal-case text-xl">
            {/* <span className="text-yellow-500 font-bold pr-2">CSEDU</span>
            <span className="text-blue-600">Thesis Repository</span> */}
            <span className="flex justify-start md:text-2xl  text-md font-medium items-center">
              <img
                src={cseduLogo}
                alt="cseduLogo"
                className="md:w-20 md:h-20 w-10 h-10"
              />

              <p className="hidden md:block ">
                {" "}
                <span>CSEDU</span> Thesis Repository
              </p>
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
