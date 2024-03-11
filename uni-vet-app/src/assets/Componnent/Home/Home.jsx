import React, { useEffect, useState } from 'react'
import Homecarddata from '../Homecard/Homecarddata'
import Homecards from '../Homecard/Homecards'
import { Box, Typography } from '@mui/material'
import MainPuppy from '../../img/MainPuppy.png'
import './Home.css';
import NavBar from '../NavBar/NavBar'

const Home = () => {
    const [date, setDate] = useState('ff');
    const [time, setTime] = useState('ff');
    useEffect(() => {
        const getDate = async () => {
            try {
                const responce = await fetch('http://worldtimeapi.org/api/timezone/Asia/Colombo');
                const dateJson = await responce.json()

                setDate(dateJson.utc_datetime.split('T')[0]);
                setTime((dateJson.utc_datetime.split('T')[1]).split('.')[0]);
            }
            catch (error) {
                console.log(error);

            }

        }

        getDate();
    }, [])
    return (
        <div className='container'>
            <NavBar/>
            <div className="row">

              <div className="col-12">
              <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="src/assets/img/pet&cat.jpg" alt="image of cover" className="bd-placeholder-img w-100" style={{height:'500px'}} />
        <div className="container">
          <div className="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div className="container">
          <div className="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div className="container">
          <div className="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
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
                <div className="col-6">

                    {Homecarddata.map((value, index) => {
                        return <Homecards width={value.width} title={value.title}
                            bgcolor={value.bgcolor} imageUrl={value.imageUrl} discription={value.discription} />
                    })}
                </div>
                <div className="col-6 position-relative">
                    <Box display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        color={Text.primary}
                        textAlign={'center'}
                        flexDirection={'column'}>
                        <Typography component={'div'} sx={{
                            fontSize: 50,
                            fontWeight: 600
                        }}>
                            {date}
                        </Typography>
                        <Typography component={'div'}>
                            {time}
                        </Typography>
                        <div>
                            {/* <img src={MainPuppy} className="d-block mainpuppy" alt="..." /> */}
                        </div>
                    </Box>

                    <Box component={'img'}
                        src='src/assets/img/Homedog.png'
                        alt='dog'
                        position={'absolute'}

                        sx={{
                            right: '93px',
                            bottom: '-136px',
                            zIndex: -1
                        }}
                    >

                    </Box>

                </div>
                <div className="col-12" style={{
                    backgroundColor: '#fcd533',
                    width: '100%',
                    height: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin:'10px 0',
                    color:'#45443E',
                    borderRadius:'10px',
                    

                }}>
                    <Typography fontSize={30} fontWeight={600}>WELCOME TO BEST CARE HOSPITAL
                        Dedicated to Pets and People
                    </Typography>
                    <Typography fontSize={20} my={4}>Best Care Animal hospital is dedicated to offer you a quality veterinary service at a reasonable price. We are open all 7 days a week between 8.00am to 8.00pm and 
                        Poya days (8.00am – 5.00pm) to cater all your pet care needs.
                        We are capable of vast number of services such as vaccination treatments to surgeries, digital X ray, Pet taxi and Ambulance services. We are dedicated to provide the best care for your pet companions throughout their lives.
                        Please contact us on 011 7 400 800 for all your animal health care needs.
                        
                        </Typography>

                </div>

                <div className="col-12">
                <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>&copy; 2024 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
      </ul>
    </div>
  </footer>
                </div>
            </div>
        </div>
    )
}

export default Home