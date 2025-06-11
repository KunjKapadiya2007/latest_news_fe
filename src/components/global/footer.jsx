'use client'

import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import Image from 'next/image';
import Link from 'next/link';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import logo from "../../assets/global/EarnKaro-HD-Logo.png";

function Footer() {
    const social = [
        { icon: <FacebookIcon />, name: 'Facebook' },
        { icon: <TwitterIcon />, name: 'Twitter' },
        { icon: <InstagramIcon />, name: 'Instagram' },
        { icon: <TelegramIcon />, name: 'Telegram' }
    ];

    const pages = [
        { name: 'About Us', path: '/about ' },
        { name: 'Contact Us', path: '/contact ' },
        { name: 'FAQs', path: '/faq ' },
        { name: 'T&C', path: '/terms-condition ' },
    ];

    return (
        <Box sx={{ backgroundColor: '#1976D2' }}>
            <Container maxWidth="lg">
                <Box sx={{
                    py: 5,
                    px: { xs: 2, md: 3 },
                    display: { md: 'flex', xs: 'block' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: { xs: 'center', md: 'left' }
                }}>
                    <Grid container>
                        <Grid item size={{xs :12 , md:4}} sx={{ mt: { xs: 0, md: 4 } }}>
                            <Box sx={{ position: 'relative', width: '100%', height: '60px' }}>
                                <Image
                                    src={logo}
                                    alt="EarnKaro Logo"
                                    style={{ objectFit: 'contain' }}
                                />
                            </Box>
                        </Grid>
                        <Grid item size={{xs:12 ,  md :4}} sx={{
                            pl: { md: 3, lg: 0 },
                            mt: { xs: 4, md: 0 }
                        }}>
                            <Typography
                                sx={{
                                    color: '#FFF',
                                    fontSize: { md: '18px', xs: '16px' },
                                    mb: '26px',
                                    fontWeight: 700
                                }}
                            >
                                ABOUT US
                            </Typography>
                            <Typography sx={{
                                fontSize: { md: '16px', xs: '14px' },
                                color: '#FFF',
                                lineHeight: 1.6
                            }}>
                                EarnKaro is India's #1 Affiliate Marketing Platform that helps you make easy money
                                through promoting the latest deals & offers via Affiliate! Whether you are a student, a
                                housewife or a working professional, EarnKaro is a great source of extra income for you.
                                Earnings can be upto Rs. 30,000 per month. All you have to do is simply share deals from
                                sites like Flipkart, Myntra, Ajio & more. When your friends, family and others from your
                                network shop through your Profit Link, you Earn Profit!
                            </Typography>
                        </Grid>
                        <Grid item size={{xs:12 ,  md :4}} sx={{
                            pl: { md: 5, xs: 0 },
                            mt: { xs: 4, md: 0 }
                        }}>
                            <Typography
                                sx={{
                                    color: '#FFF',
                                    fontSize: { md: '18px', xs: '16px' },
                                    mb: '26px',
                                    fontWeight: 700
                                }}
                            >
                                FOLLOW US
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: { md: 'flex-start', xs: 'center' },
                                alignItems: 'center',
                                py: { md: 2, xs: 0 },
                                gap: 2
                            }}>
                                {social.map((socialItem, index) => (
                                    <IconButton
                                        key={index}
                                        sx={{
                                            p: '10px',
                                            color: '#FFF',
                                            backgroundColor: 'rgba(242, 242, 242, 0.1)',
                                            border: '1px solid rgba(245, 245, 245, 0.5)',
                                            '&:hover': {
                                                backgroundColor: 'rgba(255, 255, 255, 0.2)'
                                            }
                                        }}
                                        aria-label={socialItem.name}
                                    >
                                        {socialItem.icon}
                                    </IconButton>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Box sx={{ backgroundColor: '#176bbd' }}>
                <Container>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: { xs: 'center', md: 'space-between' },
                        py: 2
                    }}>
                        <Box sx={{
                            fontSize: '12px',
                            py: { xs: 1, md: '8px' },
                            px: { xs: 2, md: 3 },
                            color: '#FFF'
                        }}>
                            © Copyright 2025 EarnKaro. All Rights Reserved.
                        </Box>
                        <Box sx={{
                            px: { xs: 2, md: 3 },
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: { xs: 1, md: 2 }
                        }}>
                            {pages.map((page, index) => (
                                <Link
                                    key={index}
                                    href={page.path}
                                    passHref
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: '12px',
                                            color: '#FFF',
                                            px: { lg: '8px', md: '6px', xs: '8px' },
                                            py: { xs: 1, md: 0 },
                                            cursor: 'pointer',
                                            '&:hover': {
                                                textDecoration: 'underline'
                                            }
                                        }}
                                    >
                                        {page.name}
                                    </Typography>
                                </Link>

                            ))}
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default Footer;