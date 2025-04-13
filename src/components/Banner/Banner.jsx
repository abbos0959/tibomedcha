import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg from "../../assets/images/slider/11.png";
import sliderImg1 from "../../assets/images/slider/22.png";
import "../Banner/banner.css";
import { NavLink } from "react-router-dom";

const Banner = () => {
   return (
      <>
         <section className="slider">
            <Carousel variant="dark">
               <Carousel.Item>
                  <img src={sliderImg1} className="d-block w-100" alt="First slide" />

                  <Carousel.Caption>
                     <div className="d-flex">
                        <NavLink
                           to="/zakas"
                           className="primaryBtn  h-100 p-3 mt-5 bg-green-100 hover:bg-green-700 hover:!text-white"
                        >
                           Buyurtma berish
                        </NavLink>
                        <div className="slider_des">
                           {/* <NavLink className="primaryBtn ">Buyurtma berish</NavLink> */}

                           <h5 className="heading">
                              TIBBIO TIBOMED <span>QORA SEDANA YOG'I</span>
                           </h5>
                           <p className="sub_text">
                              Расулуллоҳ (с.а.в.) «Қора седана ўлимдан бошқа барча дардга даводир»
                              деганлар
                           </p>
                        </div>
                     </div>
                  </Carousel.Caption>
               </Carousel.Item>

               <Carousel.Item>
                  <img src={sliderImg} className="d-block w-100" alt="First slide" />
                  <Carousel.Caption>
                     <div className="d-flex">
                        <NavLink
                           to="/zakas"
                           className="primaryBtn  h-100 p-3 mt-5 bg-green-100 hover:bg-green-700 hover:!text-white"
                        >
                           Buyurtma berish
                        </NavLink>
                        <div className="slider_des">

                           <h5 className="heading">
                              TIBBIO TIBOMED <span>QORA SEDANA YOG'I</span>
                           </h5>
                           <p className="sub_text">
                              Расулуллоҳ (с.а.в.) «Қора седана ўлимдан бошқа барча дардга даводир»
                              деганлар
                           </p>
                        </div>
                     </div>
                  </Carousel.Caption>
               </Carousel.Item>
            </Carousel>
         </section>
      </>
   );
};

export default Banner;
