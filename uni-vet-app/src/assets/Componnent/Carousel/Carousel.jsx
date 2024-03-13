import React from 'react'

const Carousel = () => {
  return (
    <div>
        <div id="myCarousel" className="carousel slide mb-6"data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active rounded-bottom">
                  <img src="src/assets/img/pet&cat.jpg" alt="image of cover" className="bd-placeholder-img w-100" style={{ height: '600px', filter:'brightness(0.75)' }} />
                  <div className="container">
                    <div className="carousel-caption text-start">
                      <h1>Give Your Pet Best Care</h1>
                      <p className="opacity-75">We are ready to give our 20+ years of experince to save your pet</p>
                      <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <img src="src/assets/img/allPetTypes.jpg" alt="image of cover" className="bd-placeholder-img w-100" style={{ height: '600px', filter:'brightness(0.75)'  }} />
                
                  <div className="container">
                    <div className="carousel-caption">
                      <h1>Highest Quality Care for Pets You'll Love</h1>
                      <p>A secured place to care your pet</p>
                      <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <img src="src/assets/img/petLove.jpg" alt="image of cover" className="bd-placeholder-img w-100" style={{ height: '600px', filter:'brightness(0.75)' }} />
                  <div className="container">
                    <div className="carousel-caption text-end">
                      <h1>The Kind of Love Your Pet Deserve</h1>
                      <p>Over 10000+ trusted pet owners</p>
                      <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
    </div>
  )
}

export default Carousel