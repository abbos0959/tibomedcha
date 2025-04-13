import React, { useState } from "react";
import "../Footer/footer.css";
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
   const [visible, setVisible] = useState(false);

   const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
         setVisible(true);
      } else if (scrolled <= 300) {
         setVisible(false);
      }
   };

   const scrollTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisible);
   }

   return (
      <>
         <footer className="pt-5 bg-success">
            <Container>
               <Row>
                  <Col md="3" sm="12" className="quick_link mt-3 mt-md-0 ">
                     <h4 className="mt-lg-0 mt-sm-3 fs-3">TIBBIO TIBOMED QORA SEDANA </h4>
                  </Col>
                  <Col md="3" sm="12" className="quick_link mt-3 mt-md-0 ">
                     <h4 className="mt-lg-0 mt-sm-3 ">
                        TO'LOVNI MAHSULOTNI QO'LINGIZGA OLGANDAN KEYIN QILASIZ{" "}
                     </h4>
                  </Col>
                  <Col md="3" sm="12" className="quick_link mt-3 mt-md-0 ">
                     <h4 className="mt-lg-0 mt-sm-3">
                        HOZIROQ BIZ BILAN BOG'LANING VA MUTAHASSISLARIMIZ BEPUL KONSULTATSIYA
                        BERISHADI{" "}
                     </h4>
                  </Col>
                  <Col md="3" sm="12" className="location mt-3 mt-md-0 ">
                     <h4 className="mt-lg-0 mt-sm-3">Rasmiy diller Aloqa Raqamlari </h4>

                     <div className="d-flex align-items-top ">
                        <i className="bi bi-telephone me-3"></i>
                        <a
                           target="_blank"
                           href="tel:9876543210"
                           className="d-block"
                           rel="noreferrer"
                        >
                           +998 (95) 982-17-09
                        </a>
                     </div>
                     <div className="d-flex align-items-top ">
                        <i className="bi bi-telephone me-3"></i>
                        <a
                           target="_blank"
                           href="tel:9876543210"
                           className="d-block"
                           rel="noreferrer"
                        >
                           +998 (88) 038-27-03
                        </a>
                     </div>
                  </Col>
               </Row>
               <Row className="py-2 bdr mt-3"></Row>
            </Container>
         </footer>

         <div id="back-top" onClick={scrollTop} className={visible ? "active" : ""}>
            <i className="bi bi-arrow-up"></i>
         </div>
      </>
   );
};

export default Footer;
