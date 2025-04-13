import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./login.css";

import BackgroundImage from "../../../assets/images/slider/22.png";
import Logo from "../../../assets/images/slider/tibologo.jpg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const Login = () => {
   const [inputUsername, setInputUsername] = useState("");
   const [inputPassword, setInputPassword] = useState("");

   const [show, setShow] = useState(false);
   const [loading, setLoading] = useState(false);
   const [phone, setPhone] = useState("");

   const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
      await delay(500);
      console.log(`Username :${inputUsername}, Password :${inputPassword}`);
      if (inputUsername !== "admin" || inputPassword !== "admin") {
         setShow(true);
      }
      setLoading(false);
   };

   const handlePassword = () => {};

   function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
   }

   return (
      <div className="sign-in__wrapper" style={{ backgroundImage: `url(${BackgroundImage})` }}>
         {/* Overlay */}
         <div className="sign-in__backdrop"></div>
         {/* Form */}
         <Form className="shadow p-4 bg-white " onSubmit={handleSubmit}>
            {/* Header */}
            <img className=" mx-auto d-block mb-2" src={Logo} alt="logo" />
            <div className="h4 mb-2 text-center">Buyurtma berish</div>
            {/* ALert */}
            {show ? (
               <Alert className="mb-2" variant="danger" onClose={() => setShow(false)} dismissible>
                  Incorrect username or password.
               </Alert>
            ) : (
               <div />
            )}
            <Form.Group className="mb-2" controlId="username">
               <Form.Label>Ismingiz</Form.Label>
               <Form.Control
                  type="text"
                  disableCountryCode={false}
                  countryCodeEditable={false}
                  value={inputUsername}
                  placeholder="ismingiz"
                  onChange={(e) => setInputUsername(e.target.value)}
                  required
               />
            </Form.Group>
            <Form.Group className="mb-2" controlId="password">
               <Form.Label>Qayerdan murojaat qilmoqdasiz?</Form.Label>
               <Form.Control
                  type="text"
                  value={inputPassword}
                  placeholder="yashash manzilingiz"
                  onChange={(e) => setInputPassword(e.target.value)}
                  required
               />
            </Form.Group>
            <Form.Group>
            <Form.Label>Telefon raqamingiz?</Form.Label>

               <PhoneInput
                  country={"uz"}
                  onlyCountries={["uz"]} // Faqat O‘zbekiston
                  disableDropdown={true} // Dropdown yo‘q
                  disableCountryCode={false} // Prefiksni o‘zgartirib bo‘lmaydi
                  countryCodeEditable={false} // << MUHIM: foydalanuvchi o‘chirib tashlay olmaydi
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  placeholder="90 123 45 67"
                  inputStyle={{
                     width: "100%",
                     paddingLeft: "48px",
                  }}
               />
            </Form.Group>

            <Button className="w-100 mt-2" variant="primary" type="submit">
               Buyurtma berish
            </Button>
         </Form>
         {/* Footer */}
      </div>
   );
};

export default Login;
