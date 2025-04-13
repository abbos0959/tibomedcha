import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import LoginForm from "./components/Common/Header/forma";
import "react-phone-input-2/lib/style.css";

function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zakas" element={<LoginForm />} />
         </Routes>
         <Footer />
      </>
   );
}

export default App;
