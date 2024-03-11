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
               
                <div className="col-5">
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
                <footer class="py-5">
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>&copy; 2024 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
      </ul>
    </div>
  </footer>
                </div>
            </div>
        </div>
    )
}

export default Home