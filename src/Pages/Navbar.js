import React from "react";
import './Navbar.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogoutClick = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="nav-details">
        <div class="search-container">
          <form action="/action_page.php">
            <input
              type="text"
              placeholder="Search.."
              name="search"
              onkeyup="myFunction()"
            />
            <button type="submit">search</button>
          </form>
        </div>

        <a href="/Home">Home</a>
        <a href="/My-Network">My Network</a>
        <a href="/Message">Message</a>
        <a href="/Notiifcations">Notiifcations</a>
      </div>
      <div className="navbar-profile">
        <h3>
          {" "}
          <img src="/profilelogo.png" onClick={handleDropdownClick} />
          {/* {user} */}
        </h3>

        {isDropdownOpen && (
          <div className="dropdown">
            <ul>
              <button>
                <a
                  href="/"
                  onClick={handleLogoutClick}
                  style={{ color: "black" }}
                >
                  Logout
                </a>
              </button>
              <button>
                <a href="/dashboard">Dashboard</a>
              </button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
