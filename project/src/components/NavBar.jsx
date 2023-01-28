import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { mobile } from "../responsive";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: auto;
  padding: 2px;
  cursor: pointer;
  z-index: 5;
  transition: all 0.5s ease-in-out;
  text-transform: uppercase;
  z-index: 2;
  border-bottom: solid 2px #2e2e2e;
  font-weight: 300;

  &:hover {
    border-bottom: solid 2px #d0d74d;
    color: white;
  }
  ${mobile({ border: "none" })}
`;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="top-nav">
        <input
          id="menu-toggle"
          type="checkbox"
          checked={menuOpen}
          onChange={() => setMenuOpen(!menuOpen)}
        />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className={`mx-auto menu ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/#">About</NavLink>
          </li>
          <li>
            <NavLink to="/#">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/#">Events</NavLink>
          </li>

          <img
            src="https://i.ibb.co/KyNJpVV/Valley-Emporium-logo.png"
            alt="logo"
            className="logo ms-auto"
          />

          <li>
            <NavLink to="/#">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/#">Order Online</NavLink>
          </li>
          <li>
            <IconButton to="/#" aria-label="cart">
              <StyledBadge badgeContent={0} color="warning">
                <ShoppingCartIcon style={{ color: "white" }} />
              </StyledBadge>
            </IconButton>
          </li>
        </ul>
      </section>
      <div className="under-banner"></div>
    </>
  );
}

export default Navbar;
