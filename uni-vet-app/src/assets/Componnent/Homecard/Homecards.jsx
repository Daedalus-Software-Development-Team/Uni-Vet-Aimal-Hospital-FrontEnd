import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'

const Homecards = (props) => {

    return (
        <>
            <Card sx={{
                display: "flex",
                width:`${props.width}`,
                margin:'20px',
                height:'auto'

            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyItems:'center',
                    justifyContent:'center',
                    alignItems:'center',
                    width:'30%',
                    height:'auto',
                    padding:'10px',
                    overflow:' hidden'
                }}>
                    <CardContent>
                        <Typography component={'div'} variant='h1' textAlign={'center'}
                        fontSize={'20px'} color={'text.primary'}>
                            {props.title}
                        </Typography>
                    </CardContent>
                    <CardMedia component={'img'}
                    sx={{
                        bgcolor:`${props.bgcolor}`,
                        borderRadius:'50%',
                        width:'70%',
                        height:'auto'
                        
                        
                    }}
                    image={props.imageUrl}
                    alt='image of icon'/>
                </Box>

                <Box sx={{
                    display:'flex',
                    flexDirection:'row',
                    textAlign:'center',
                    alignItems:'center',
                    justifyContent:'center',
                    width:'70%',
                    color:'text.secondary'
                }}>
                {props.discription}
                </Box>

                </Card>
        </>
    )
}

export default Homecards
