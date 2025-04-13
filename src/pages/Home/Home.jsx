import React from "react";
import Banner from "../../components/Banner/Banner";
import AdvanceSearch from "../../components/AdvanceSearch/AdvanceSearch";
import { Container, Row, Col } from "react-bootstrap";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./home.css";

import Gallery from "../../components/Gallery/Gallery";
import Cards from "../../components/Cards/Cards";
import { destinationsData, popularsData } from "../../utils/data";
import PopularCard from "../../components/Cards/PopularCard";
import BenefitsList from "../../components/Features/BenefitsList";
import BenefitsListcha from "../../components/Features/BenefitListcha";
import { NavLink } from "react-router-dom";

const Home = () => {
   var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,

      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
               infinite: false,
               dots: true,
               autoplay: true,
            },
         },
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: false,
               dots: true,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               autoplay: true,
               prevArrow: false,
               nextArrow: false,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               prevArrow: false,
               nextArrow: false,
            },
         },
      ],
   };

   return (
      <>
         <Banner />
         {/* <AdvanceSearch /> */}

         <BenefitsList />

         {/* tour seciton start */}

         <section className="tours_section slick_slider">
            <Container>
               <Row>
                  <Col md="12">
                     <div className="main_heading">
                        <h1>
                           {" "}
                           Mahsulotimizni iste'mol qilib shifo topib so'ngra tavsiya qilayotgan
                           mashhurlar
                        </h1>
                     </div>
                  </Col>
               </Row>

               <Row>
                  <Col md="12">
                     <Slider {...settings}>
                        {destinationsData.map((destination, inx) => {
                           return <Cards destination={destination} key={inx} />;
                        })}
                     </Slider>
                  </Col>
               </Row>
            </Container>
         </section>

         {/* tour seciton start */}
         <BenefitsListcha />

         <section className="popular py-5">
            <Container>
               <Row>
                  <Col md="12">
                     <div className="main_heading">
                        <h1> Tibomed haqida mutaxassislar fikri </h1>
                     </div>
                  </Col>
               </Row>
               <Row>
                  {popularsData.map((val, inx) => {
                     return (
                        <Col className="mb-5" key={inx}>
                           <PopularCard val={val} />
                        </Col>
                     );
                  })}
               </Row>
            </Container>
         </section>

         <section className="call_us">
            <Container>
               <Row className="align-items-center">
                  <Col md="8">
                     <h5 className="title fs-1">HALI HAM O'YLANIB TURIBSIZMI</h5>
                     <h2 className="heading fs-2">
                        Hozir sog'ligingizni o'ylamasangiz keyin kech bo'lishi mumkin!
                     </h2>
                     <p className="text fs-3">
                        Hoziroq bizga murojaat qiling va sizga mutaxassislarimiz bepul konsultatsiya
                        berishadi
                     </p>
                  </Col>
                  <Col md="4" className="text-center mt-3 mt-md-0">
                     <NavLink
                        to="/zakas"
                        className="primaryBtn hover:bg-green-700 hover:!text-white"
                     >
                        Buyurtma berish
                     </NavLink>
                  </Col>
               </Row>
            </Container>
            <div className="overlay"></div>
         </section>

         <section className="gallery">
            <Container>
               <Row>
                  <Col md="12">
                     <div className="main_heading">
                        <h1>Bizning mahsulotimiz haqida </h1>
                     </div>
                  </Col>
               </Row>
               <Row>
                  <Col md="12">
                     <Gallery />
                  </Col>
               </Row>
               <Col md="12">
                  <div className="main_heading d-flex justify-content-center">
                     <h1 className="text-center">TIBOMED QORA SEDANA YOG'I</h1>
                  </div>
               </Col>
               <NavLink
                  to="/zakas"
                  className=" p-3  d-flex justify-content-center primaryBtn hover:bg-green-700 hover:!text-white"
               >
                  Buyurtma berish
               </NavLink>
            </Container>
         </section>
      </>
   );
};

export default Home;
