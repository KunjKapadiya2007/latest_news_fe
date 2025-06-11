'use client'

import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import Image from "next/image";
import Connected from "../../components/global/connected";
import map from '../../assets/contact/EarnKaro-Address.png'
import journey from '../../assets/contact/EarnKaro-App-Banner-1024x538.jpg'

function ContactUs() {

    const style = {
        fontSize: {md: '16px', xs: '12px', sm: '14px'},
        color: '#222222',
        lineHeight: {md: 1.74, xs: 1.5},
        letterSpacing: '0.5px',
        mb: '26px',
    };

    const data = {
        description1: 'We are Ratan Tata funded Affiliate Marketing Platform in India.',
        description2: (<>
            Our user shares deals from 150+ Partners Like Ajio, Myntra, Flipkart, etc. & earns a commission on each
            sale. Please know more <span style={{color: '#5c83e6'}}>about us</span>.
        </>),
        title1: 'For Inquiries & partnerships:',
        description3: (<>
            For Editorial inquiries, please contact<span style={{color: '#5c83e6'}}> our content team</span> or share
            directly
            at <strong>editor@earnkaro.com</strong>.<br/><br/>
            For any user queries, such as missing/tracking, you can reach us at <strong>support@earnkaro.com </strong>.
        </>),
        title2: 'Our Office Address',
        address: (<>
            UM House, P – 35, 2nd Floor,<br/> UM House, Sector 44 Rd,<br/> Gurugram, Haryana 122002
        </>),
        subText: 'Our office is located right behind Taj Hotel.',
        img1: map,
        img2: journey,
        description4: (<>
            You can check more details and features about <span style={{color: '#5c83e6'}}>EarnKaro App</span>.
        </>)
    }

    return (
        <Box sx={{mt: 6}}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item size={{xs: 12, md: 4}}>
                        <Connected/>
                    </Grid>
                    <Grid item size={{xs: 12, md: 8}}>
                        <Box sx={{px:'24px'}}>
                            <Typography
                                sx={{fontSize: {md: '30px', sm: '26px', xs: '22px'}, color: '#111111', mb: '16px'}}>
                                Contact Us
                            </Typography>
                            <Typography sx={style}>
                                {data.description1}
                            </Typography>
                            <Typography sx={style}>
                                {data.description2}
                            </Typography>
                            <Typography sx={{
                                fontSize: {md: '27px', sm: '24px', xs: '21px'},
                                color: '#111111',
                                marginBottom: '20px'
                            }}>
                                {data.title1}
                            </Typography>
                            <Typography sx={style}>
                                {data.description3}
                            </Typography>.
                            <Box sx={{display: {lg:'flex' , xs:'unset'}, justifyContent: 'space-between' , mb:'26px'}}>
                                <Box>
                                    <Typography sx={{
                                        fontSize: {md: '27px', sm: '24px', xs: '21px'},
                                        color: '#111111',
                                        mb: '20px',
                                        mt: '30px'
                                    }}>
                                        {data.title2}
                                    </Typography>
                                    <Typography sx={style}>
                                        {data.address}
                                    </Typography>
                                    <Typography sx={{...style , fontSize:'12px'}}>
                                        {data.subText}
                                    </Typography>
                                </Box>
                                <Box sx={{width: {lg:'444px'  , xs:'100%'} , height:'100%'}}>
                                    <Image src={data.img1} alt={data.title1} style={{ width: '100%' , height: '100%' }} />
                                </Box>
                            </Box>
                            <Box>
                                <Image src={data.img2} alt={data.title2} style={{ width: '100%' , height: '100%' }} />
                            </Box>
                            <Typography sx={{...style , my:'26px'}}>
                                {data.description4}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ContactUs;