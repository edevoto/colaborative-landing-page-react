import React from "react";
import reactDom from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App () {

  return (
    <>
    <Navbar/>

    <Jumbotron/>

    <div className="row d-flex justify-content-center mx-1">
    <Cards
    img='https://picsum.photos/id/237/500/325'
    title = 'Card Title 1'
    cardContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, sapiente repellendus! Sequi aperiam neque, cupiditate debitis quam tenetur ea fugiat.'
    btnContent = 'Find out more'
    />
        <Cards
    img='https://picsum.photos/id/231/300/200'
    title = 'Card Title 2'
    cardContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, sapiente repellendus! Sequi aperiam neque, cupiditate debitis quam tenetur ea fugiat.'
    btnContent = 'Find out more'
    />
        <Cards
    img='https://picsum.photos/id/222/300/200'
    title = 'Card Title 3'
    cardContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, sapiente repellendus! Sequi aperiam neque, cupiditate debitis quam tenetur ea fugiat.'
    btnContent = 'Find out more'
    />
        <Cards
    img='https://picsum.photos/id/236/300/200'
    title = 'Card Title 4'
    cardContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, sapiente repellendus! Sequi aperiam neque, cupiditate debitis quam tenetur ea fugiat.'
    btnContent = 'Find out more'
    />
    </div>
    
    <Footer/>
    </>
  )
}

reactDom.render(<App/>, document.querySelector("#root"));