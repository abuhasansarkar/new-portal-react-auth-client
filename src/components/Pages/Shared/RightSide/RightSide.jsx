import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Button, Carousel, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaTwitch,
  FaWhatsapp,
  FaDiscord,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import carousel1 from '../../../../assets/slider/download (1).jpeg'
import carousel2 from '../../../../assets/slider/download.png'
import carousel3 from '../../../../assets/slider/images.jpeg'
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";




const RightSide = () => {
  const navigate = useNavigate();
  const {googleLoginProvider} = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  
  const googleLoginHendel = () =>{
    googleLoginProvider(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate('/')
    })
    .catch(error => console.error("Google sing Error", error))
  }

  return (
    <div className="">
      <div className="account-login">
        <Button onClick={googleLoginHendel} className="mb-2 w-100" variant="outline-primary">
          <FaGoogle /> Login vai Google
        </Button>
        <Button className="mb-2 w-100" variant="outline-dark">
          <FaGithub /> Login vai Github
        </Button>
      </div>
      <div className="sociel-media">
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item action variant="primary">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item action variant="secondary">
            <FaYoutube /> Youtube
          </ListGroup.Item>
          <ListGroup.Item action variant="success">
            <FaTwitch /> Twitter
          </ListGroup.Item>
          <ListGroup.Item action variant="danger">
            <FaWhatsapp /> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item action variant="warning">
            <FaDiscord /> Discord
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Button className="mt-3" variant="outline-primary"> Load More</Button>
      <div className="carusel mt-4">
          <h4>Brands</h4>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={carousel1}
              alt="First slide"
            />
            
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={carousel3}
              alt="Second slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel2}
              alt="Third slide"
            />
            
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default RightSide;
