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
                <div className="col-6">
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
                            <img src={MainPuppy} className="d-block mainpuppy" alt="..." />
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Home