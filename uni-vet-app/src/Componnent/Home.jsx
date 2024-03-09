import React, { useEffect, useState } from 'react'
import Homecarddata from './Homecarddata'
import Homecards from './Homecards'
import { Box, Typography } from '@mui/material'
const Home = () => {
    // const[date,setDate]=useState();
    useEffect(()=>{
        const getDate=async ()=>{
            try{
            const responce=await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Colombo',{
                method:'GET',
                mode:'no-cors'
            }).then(response => response.json())
            .then(json => console.log(json))
            .catch(error => console.log('Authorization failed : ' + error.message));;
            console.log(responce)
            const dateJson=await responce.json()

            console.log(dateJson)
        }
        catch(error){
            console.log(error);

        }
            
        }

        getDate();
    },[])
    return (
        <div className='container'>
            <div className="row">
                <div className="col-6">
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
                            Hello
                        </Typography>
                        <Typography component={'div'}>
                            Welcome
                        </Typography>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Home