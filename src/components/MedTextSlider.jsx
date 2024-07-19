import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Box } from '@chakra-ui/react'

const MedTextCard = () => {
  return (
    <div id="carouselExampleDark" class="carousel carousel-dark slide" style={{marginTop:"10px"}}>
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="https://consumer-app-images.pharmeasy.in/marketing/comp_50lac.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Top-Tests we cover</h5>
          <p>1,200+ cities and 20,000+ Pin codes served</p>
        </div>
        
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="https://consumer-app-images.pharmeasy.in/marketing/comp_3step.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Top-Selling Healthcare Products</h5>
          <p>1 Lakh+ medicines available</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://consumer-app-images.pharmeasy.in/marketing/comp_50lac.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Top-Selling Medicines</h5>
          <p>Garnered the trust of more than 10 million users who have made an online purchase through MedNedHub</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  
  )
}

export default MedTextCard
