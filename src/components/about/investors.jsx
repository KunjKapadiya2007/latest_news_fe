'use client';

import React from 'react';
import { Box, Typography, Divider, Grid, Container, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import kalaari from '../../assets/about/investor/ck_kalaari_capital.png';
import korea from '../../assets/about/investor/korea-investment-1654842838.png';
import ratanTata from '../../assets/about/investor/ck_ratan_tata.png';

const investors = [
    {
        name: "Kalaari Capital",
        title: "India's Leading Venture Capital Firm",
        description: "Invested $3.4 Million as Series 'A' Funding making EarnKaro India's 1st VC funded deal-sharing site helping reinforce our position as the strongest player in the Affiliate Marketing segment.",
        image: kalaari,
    },
    {
        name: "Korea Investment Partners",
        title: "A Leading Venture Capital Firm",
        description: "Invested $10 Million in Series 'B' Funding to help EarnKaro grow in new avenues and become a household name.",
        image: korea,
    },
    {
        name: "Late Ratan Tata",
        title: "Former Chairman, Tata Group",
        description: "Invested & helped reinforce EarnKaro's position as the strongest player in the deal-hungry Affiliate Marketing industry.",
        image: ratanTata,
    },
];

export default function Investors() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ textAlign: 'center', py: 8, backgroundColor: '#f9f9f9' }}>
            <Container maxWidth="lg">
                <Typography variant="h3" sx={{
                    fontSize: { xs: '24px', sm: '28px', md: '32px' },
                    fontWeight: 600,
                    color: '#272727',
                    mb: 4,
                    textTransform: 'uppercase',
                    letterSpacing: 1.2
                }}>
                    OUR INVESTORS
                </Typography>

                <Divider sx={{ mb: 6, mx: 'auto', width: '100px', height: '3px', backgroundColor: '#5C83E6' }} />

                <Grid container spacing={4}>
                    {investors.map((investor, index) => (
                        <Grid item size={{xs:12,sm:6,md:4}} key={index}>
                            <Box sx={{
                                backgroundColor: '#fff',
                                borderRadius: '16px',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
                                p: 3,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)'
                                }
                            }}>
                                <Box sx={{
                                    mb: 3,
                                    width: 120,
                                    height: 120,
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    border: '3px solid #5C83E6'
                                }}>
                                    <Image
                                        src={investor.image}
                                        alt={investor.name}
                                        fill
                                        style={{ objectFit: 'contain', padding: '10%' }}
                                    />
                                </Box>

                                <Typography variant="h6" sx={{
                                    fontWeight: 700,
                                    color: '#272727',
                                    mb: 1,
                                    textAlign: 'center'
                                }}>
                                    {investor.name}
                                </Typography>

                                <Typography variant="subtitle2" sx={{
                                    color: '#5C83E6',
                                    mb: 2,
                                    fontWeight: 600,
                                    textAlign: 'center'
                                }}>
                                    {investor.title}
                                </Typography>

                                <Typography sx={{
                                    color: '#666666',
                                    lineHeight: 1.6,
                                    fontSize: '0.95rem',
                                    textAlign: 'center'
                                }}>
                                    {investor.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
