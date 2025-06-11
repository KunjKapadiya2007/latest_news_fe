import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import person1 from '../../assets/about/team/rohan-img-1feb.jpg'
import person2 from '../../assets/about/team/swati-img-1feb.jpg'
import person3 from '../../assets/about/team/about_arumai_desktop.png'
import img1 from '../../assets/about/team/aboutus1-1feb.jpg'
import img2 from '../../assets/about/team/aboutus2-1feb-up.jpg'
import img3 from '../../assets/about/team/aboutus3-1feb.jpg'
import img4 from '../../assets/about/team/about-1-1655278708.jpg'
import Image from "next/image";

function Team() {

    const team = [
        {
            img: person1,
            name: 'Rohan Bhargava',
            role: 'Co Founder',
            description: 'A qualified CFA and alumni of London School of Economics with a BSc in Economics, Rohan has worked with International Hedge funds like Aladdin Capital and Washington Square Capital. He has over 8 years of experience in the industry and previously handled a portfolio of $1 billion structured credit assets.',
        },
        {
            img: person2,
            name: 'Swati Bhargava',
            role: 'Co Founder',
            description: 'Alumni of London School of Economics with a BSc Mathematics and Economics, Swati previously worked as an Investment Banker at Goldman Sachs for 5 years in London. She, along with Rohan, went on to establish Pouring Pounds in 2011 and EarnKaro in 2019 that captured the Indian Affiliate Marketing Industry.',
        },
        {
            img: person3,
            name: 'MK Arumainathan',
            role: 'C.T.O',
            description: 'With over 15 years of tech expertise, Arumai develops the technical strategy for EarnKaro. He previously worked with HCL, one of India\'s premier IT companies.',
        },
    ]

    return (
        <Box sx={{textAlign: 'center' , pb:4}}>
            <Container maxWidth={'lg'}>
                <Box sx={{backgroundColor: '#fff', p: {xs: 3, md: 4}, boxShadow: '10px 5px 10px #f6f6f6'}}>
                    <Typography variant="h3" sx={{
                        fontSize: {xs: '24px', sm: '28px', md: '32px'},
                        fontWeight: 600,
                        color: '#272727',
                        mb: 4,
                        textTransform: 'uppercase',
                        letterSpacing: 1.2
                    }}>
                        THE CORE TEAM
                    </Typography>
                    <Box>
                        <Grid container>
                            {team.map((item, index) => (
                                <Grid item size={{xs: 12, md: 4}} key={index}
                                      sx={{px: 1.5, textAlign: {md: 'start', xs: 'center'}}}>
                                    <Box>
                                        <Image src={item.img} alt={item.name} style={{height: '100%', width: '100%'}}/>
                                    </Box>
                                    <Box sx={{pt: '20px'}}>
                                        <Typography sx={{
                                            fontSize: {md: '18px', xs: '16px'},
                                            color: '#666666',
                                            fontWeight: 600,
                                        }}>
                                            <strong>{item.name}</strong>
                                        </Typography>
                                        <Typography sx={{fontSize: {md: '14px', xs: '12px'}, color: '#666666'}}>
                                            {item.role}
                                        </Typography>
                                    </Box>
                                    <Typography sx={{fontSize: {md: '14px', xs: '12px'}, color: '#666666', pt: '20px'}}>
                                        {item.description}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item size={{md: 5, xs: 12}}>
                            <Image src={img1} alt={'img1'} style={{height: '100%', width: '100%'}}/>
                        </Grid>
                        <Grid item size={{md: 7, xs: 12}}>
                            <Grid container spacing={2}>
                                <Grid item size={{xs: 12, sm: 6}}>
                                    <Image src={img2} alt={'img2'} style={{
                                        height: '100%',
                                        width: '100%'
                                    }}/>
                                </Grid>
                                <Grid item size={{xs: 12, sm: 6}}>
                                    <Image src={img3} alt={'img3'} style={{
                                        height: '100%',
                                        width: '100%'
                                    }}/>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid size={12} spacing={2}>
                                    <Image src={img4} alt={'img4'} style={{
                                        height: '100%',
                                        width: '100%'
                                    }}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{backgroundColor: '#fff', p: {xs: 3, md: 4}, boxShadow: '10px 5px 10px #f6f6f6', mt: 4}}>
                    <Typography sx={{
                        fontSize: {md: '16px', xs: '12px', sm: '14px'},
                        color: '#666666',
                        lineHeight: {md: 1.74, xs: 1.5},
                        letterSpacing: '0.5px',
                        textAlign:'start'
                    }}>
                        EarnKaro is a deal-sharing platform where users share their Profit Links with their buyers. When
                        they shop through that Link, the user gets a part of their order value as Profit. The user can
                        transfer their earnings to their bank account when they have ₹10 or more as Confirmed Profit. A
                        Late
                        Ratan Tata backed organization; we offer our users unmatched Affiliate Marketing experience &
                        curate
                        awesome Partners with high Profit Rates. While there are many individual Sites that offer
                        Affiliate
                        Programs, EarnKaro prides itself on offering over 200 Shopping Sites under one platform for
                        user's
                        ease of use. We cater to people from many walks of life, no matter if they are homemakers,
                        students
                        or even entrepreneurs looking to make a name for themselves. All one has to do is create their
                        network on Telegram, WhatsApp, YouTube, or any of the other social media channels, share
                        EarnKaro
                        Profit Links and get orders.<br/><br/>

                        <strong>Join Free - Share Deals - Get Orders from Friends & Family - Earn Real Money -
                            Transfer to
                            Bank</strong><br/><br/>

                        Discover hundreds of MEGA sales with thousands of products ranging across different categories -
                        Groceries, OTC Medicines, Fashion, Electronics, Beauty & more. Try it yourself, download
                        EarnKaro to
                        earn extra income while working from the comfort and safety of your homes, kyunki EarnKaro ke
                        saath
                        #KamaiPakkiHai.10
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Team;