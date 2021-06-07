import React from "react";
import reactDom from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App () {

  let propiedadesNavbar = {
    titulo: "Start Boostrap",
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
  }




  return (
    <>
    <Navbar/>
    <Jumbotron/>
    <Cards/>
    <Footer/>
    </>
  )
}

reactDom.render(<App/>, document.querySelector("#root"));