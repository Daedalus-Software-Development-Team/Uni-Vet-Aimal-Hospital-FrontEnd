import { Select, TextField, MenuItem, InputLabel, FormControl, Button, Alert } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CheckIcon from '@mui/icons-material/Check';
import './Appoinment.css';
import appoinment from '../../img/appoinment.jpg'


import React, { useEffect, useState } from 'react'

const Appoinment = () => {
    const [appoinmentJson, setAppoinment] = useState({
        customerName: '',
        contactNum: '',
        petTyp: '',
        dateOfApp: ''
    })

    const petTypes = ['Dog', 'Cat', 'Fish', 'Rabbit'];

    useEffect(() => {
        <Alert icon={<CheckIcon />} severity="success">
            Here is a gentle confirmation that your action was successful.
        </Alert>
    }, [])


    console.log(appoinmentJson)

    return (
        <div>
            <div className="row">
                <div className="col-5">
                    <h1 className='heading'>Schedule Your Appoinment Here</h1>
                </div>
                    <div className="col-4">
                        <img src={appoinment} className="d-block appoinment" alt="..." />
                        </div>
                        <div className="col-4"></div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 mt-5" >
                    <form className='d-flex flex-column align-items-center justify-content-center gap-4 my-4'>

                        <TextField label="Pet Owner Name" id="fullWidth" sx={{

                            width: '50%'
                        }} value={appoinmentJson.customerName} onChange={(e) => {
                            setAppoinment((pre) => ({
                                ...pre,
                                customerName: e.target.value
                            }))
                        }} />

                        <TextField value={appoinmentJson.contactNum} type='number' label="Contact Number" id="fullWidth" sx={{
                            margin: '10px 10px',
                            width: '50%'
                        }} onChange={(e) => {
                            setAppoinment((pre) => ({
                                ...pre,
                                contactNum: e.target.value
                            }));
                        }} />


                        <FormControl sx={{
                            width: '50%'
                        }}>
                            <InputLabel id="demo-simple-select-label">Pet Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={appoinmentJson.petTyp}
                                label="Pet Type"
                                onChange={(e) => {
                                    setAppoinment((pre) => ({
                                        ...pre,
                                        petTyp: e.target.value
                                    }))
                                }}
                                sx={{
                                    color: 'text.primary'
                                }}

                            >

                                {petTypes.map((value) => (<MenuItem value={value}>{value}</MenuItem>))}


                            </Select>
                        </FormControl>

                        <LocalizationProvider dateAdapter={AdapterDayjs}  >
                            <DemoContainer components={['DatePicker']} >
                                <DatePicker label="Book a Date" onChange={(value) => {
                                    const date = String(value).split(' ');
                                    const dateInString = `${date[1]} ${date[2]} ${date[3]}`;

                                    setAppoinment((pre) => ({
                                        ...pre,
                                        dateOfApp: dateInString
                                    }))
                                }} />
                            </DemoContainer>
                        </LocalizationProvider>



                        <Button variant="contained" sx={{
                            margin: '10px 0'
                        }} onClick={() => {
                            <Alert icon={<CheckIcon />} severity="success">
                                Here is a gentle confirmation that your action was successful.
                            </Alert>
                        }}>Note My Appoinment</Button>




                    </form>
                </div>

            </div>
        </div>
    )
}

export default Appoinment