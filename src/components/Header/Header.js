import React from "react";
import { Container, LogoImage } from "./Header.styles";
//Routing
import { Link } from "react-router-dom";
//Image
import Logo from "../../images/samplelogo.png";
import Logo2 from "../../images/logo2.png";
export default function Header({ state }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light " style={{background:'none',position:'absolute',zIndex:9999,width:'100%'}}>
        <Container className="container-fluid">
          <LogoImage className="navbar-brand" src={Logo2} />
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link text-light" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-light" to="/cart">
                  Category
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-light" to="/cart">
                  Shop
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-light" to="/cart">
                  Card
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-light" to="/cart">
                  Wishlist
                </Link>
              </li>
              <li class="nav-item"><input
                type="search"
                class="form-control  search"
                placeholder="Search"
                aria-label="Search" style={{paddingLeft:'20px',width:'350px',marginLeft:'20px'}}/>
          </li>
            </ul>
          </div>

          <div className="d-flex">
            <span className="nav-item me-5">Login</span>
            <span className="nav-item">Logout</span>
          </div>
        </Container>
      </nav>
    </>
  );
}
