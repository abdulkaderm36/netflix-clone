import React from "react";

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar false">
        <div className="netflix-logo-div" style={{ flex: "1" }}>
          <a href="/">
            <img
              className="netflix-logo"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F03%2FNetflix_logo.png"
              alt="Netflix Logo"
              style={{ backgroundSize: "100%", width: "110px" }}
            />
          </a>
        </div>

        <div className="navbar-controls">
          <div className="search-container">
            <div className="search-btn">
              <i className="fas fa-search"></i>
            </div>
          </div>

          <div className="user-img-div">
            <img
              className="user-img"
              src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
              alt="user pic"
              style={{
                backgroundSize: "100%",
                width: "2rem",
              }}
            />
          </div>
        </div>
      </nav>
    );
  }
}

//Scroll EventListener for the animation on the Navbar
document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY >= 150) {
    navbar.classList.remove("false");
  } else {
    navbar.classList.add("false");
  }
});
