'use client'

import React from 'react';
import {Box, IconButton, InputAdornment, TextField, Typography} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import bgimg4 from "../../assets/home/EK-credit-card-banner-1024x1024.jpg";
import bgimg5 from "../../assets/home/Amazon-India-affiliate-program-100x70.jpg";
import bgimg6 from "../../assets/home/EK-banner.png";

function Connected() {

    const rbenner = bgimg4;
    const img1 = bgimg5;
    const img2 = bgimg6;

    const social = [
        <FacebookIcon sx={{color: '#1778F2', fontSize: '35px'}}/>,
        <TwitterIcon sx={{color: '#1DA1F2', fontSize: '35px'}}/>,
        <InstagramIcon sx={{color: '#F00075', fontSize: '35px'}}/>,
        <TelegramIcon sx={{color: '#2AABEE', fontSize: '35px'}}/>
    ]

    const blogs = [
        {
            title: "Amazon Affiliate Program with 10.8% Commission | May 2025",
            date: "January 16, 2025",
            img: img1,
        },
        {
            title: "Myntra Affiliate Program With 10% Commission | May 2025",
            date: "January 9, 2025",
            img: img1,
        },
        {
            title: "Flipkart Affiliate Program With 12% Payout | May 2025",
            date: "January 16, 2025",
            img: img1,
        },
        {
            title: "AJIO Affiliate Program With 15% Commission | May 2025",
            date: "January 16, 2025",
            img: img1,
        },
        {
            title: "Meesho Affiliate Program With 15% Commission | May 2025",
            date: "December 17, 2024",
            img: img1,
        },
    ];

    return (
        <Box sx={{borderBottom:'20px solid #F1F1F1'}}>
            <TextField
                fullWidth
                placeholder="Search Programs or Guides"
                variant="outlined"
                size="small"
                sx={{mb: 7}}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton sx={{backgroundColor: '#F0F0F0', borderRadius: '0'}}>
                                <SearchIcon/>
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <Box>
                <Image
                    src={rbenner}
                    alt="Side Banner"
                    style={{width: '100%', height: 'auto'}}
                />
            </Box>
            <Typography sx={{
                textAlign: 'center',
                my: 3,
                fontWeight: 800,
                fontSize: {md: '16px', sm: '14px', xs: '12px', letterSpacing: '0.5px'}
            }}>Stay Connected</Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3}}>
                {social.map((social, index) => (
                    <Typography key={index + 1} sx={{px: 1.5}}>
                        {social}
                    </Typography>
                ))}
            </Box>
            <Typography sx={{
                color: '#797979',
                fontSize: {md: '17px', sm: '15px', xs: '13px'},
                fontWeight: 600,
                lineHeight: '31px',
                py: 3
            }}>
                Popular Money Earning Blogs
            </Typography>
            <Box sx={{mb: 8}}>
                {blogs.map((blog, index) => (
                    <Box sx={{display: 'flex', alignItems: 'center', pb: '26px'}} key={index}>
                        <Box sx={{height: '70px', width: '116px', position: 'relative'}}>
                            <Image
                                src={blog.img}
                                alt={blog.title}
                                fill
                                style={{objectFit: 'cover'}}
                            />
                        </Box>
                        <Box sx={{ml: '16px'}}>
                            <Typography sx={{fontSize: {xs: '12px', sm: '14px'}, color: '#111111'}}>
                                {blog.title}
                            </Typography>
                            <Typography>
                                {blog.date}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
            <Box>
                <Image
                    src={img2}
                    alt="Promo Banner"
                    style={{width: '100%', height: 'auto'}}
                />
            </Box>
        </Box>
    );
}

export default Connected;