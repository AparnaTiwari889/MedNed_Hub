import React from 'react'
import NewsCard from '../components/NewsCard'
import HealthCard from '../components/HealthCard'

const TestLabPage = () => {
  return (
    <>
    <div style={{marginTop:"10px" , marginBottom:"80px" , padding:"10px"}}>
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/04/17075733/6.webp" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{color:"white"}}>
        <h2>How to Increase Platelet Count Naturally</h2>
        <p>Doctor's Speak / Featured / Health Today</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000" >
      <img src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/08/17075827/shutterstock_1035357679-1.webp" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{color:"white"}}>
        <h5>Natural Home Remedies For Constipation...</h5>
        <p>Doctor's Speak / Featured / Health Today</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/04/17075702/3-2.webp" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{color:"white"}}>
        <h5>Natural ways to be fit</h5>
        <p>Doctor's Speak / Featured / Health Today</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/04/17075609/1.webp" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{color:"white"}}>
        <h5>Natural ways To Check Pregnancy at Home...</h5>
        <p>Doctor's Speak / Featured / Health Today</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/04/17075422/Person-Experiencing-Acidity.webp" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{color:"white"}}>
        <h5>Natural Ways To Keep Your Heart Healthy</h5>
        <p>Doctor's Speak / Featured / Health Today</p>
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
<div >
 
</div>

    </div>
    <HealthCard/>
    </>
    
  )
}

export default TestLabPage
