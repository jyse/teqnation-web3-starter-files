import React from "react";
import "./Header.css";

const Header = () => {
  const categoryStyles = [["EXPLORE"], ["COLLECTION"], ["RESOURCES"]];

  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://teqnation.com/wp-content/uploads/2018/02/145-x-45-2.0.png"
          alt="logo"
        />
      </div>
      <div className="logo-text">
        <h3> Code | Innovate | Create </h3>
      </div>
      <div className="search-bar">
        <div>
          <input type="text" placeholder="Search all the NFTs" />
        </div>
        <div className="search-button">
          <p>Search</p>
        </div>
      </div>
      <div className="menu">
        {categoryStyles.map(([category, index]) => {
          return (
            <div className="menu-item">
              <h3 key={index}>{category}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
