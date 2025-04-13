import React, { useEffect, useState } from "react";
import { Container, Row, Navbar, Offcanvas, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Header/header.css";

const Header = () => {
   const [open, setOpen] = useState(false);

   const toggleMenu = () => {
      setOpen(!open);
   };

   const handleForma = () => {};
   useEffect(() => {
      window.addEventListener("scroll", isSticky);
      return () => {
         window.removeEventListener("scroll", isSticky);
      };
   });

   // sticky Header
   const isSticky = (e) => {
      const header = document.querySelector(".header-section");
      const scrollTop = window.scrollY;
      scrollTop >= 120 ? header.classList.add("is-sticky") : header.classList.remove("is-sticky");
   };

   return (
      <header className="header-section">
         <Container>
            <Navbar expand="lg" className="p-0">
               {/* Logo Section  */}
               <Navbar.Brand>
                  <NavLink to="/"> Tibomed Qora Sedana</NavLink>
               </Navbar.Brand>
               {/* End Logo Section  */}

               <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-lg`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                  placement="start"
                  show={open}
               >
                  {/*mobile Logo Section  */}
                  <Offcanvas.Header>
                     <h1 className="logo">Tibomed</h1>
                     <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                        <i className="bi bi-x-lg"></i>
                     </span>
                  </Offcanvas.Header>
                  {/*end mobile Logo Section  */}

                  <Offcanvas.Body>
                     <Nav className=" hover:bg-green-700 hover:text-white">
                        {" "}
                        <NavLink
                           to="/zakas"
                           onClick={() => handleForma()}
                           className="primaryBtn hover:bg-green-700 hover:!text-white"
                        >
                           Buyurtma berish
                        </NavLink>
                     </Nav>
                  </Offcanvas.Body>
               </Navbar.Offcanvas>
               <div className="ms-md-4 ms-2">
                  <li className="d-inline-block d-lg-none ms-3 toggle_btn">
                     <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
                  </li>
               </div>
            </Navbar>
         </Container>
      </header>
   );
};

export default Header;
