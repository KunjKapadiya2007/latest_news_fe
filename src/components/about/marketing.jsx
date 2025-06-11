'use client'

import React from "react";
import {Box, Container, Grid, Typography} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from '@mui/icons-material/Circle';
import bgimg from '../../assets/about/marketing/top-banner-d-1655204891.jpg'
import Image from "next/image";
const steps = [
    {
        // image: img1,
        title: "JULY ’19: OFF TO A GREAT START",
        details: [
            "Amplify awareness of emotional intelligence as a leadership cornerstone",
            "Pinpoint challenges and uncover pathways for growth",

            "Develop a precision-driven strategy for lasting impact",
        ],
    },
    {
        // image: img2,
        title: "SEPTEMBER’19: EXCLUSIVE TOOL ",
        details: [
            "Facilitate introspective self-assessments to foster personal growth",
            "Conduct comprehensive wellness evaluations for participants",
            "Deliver data-driven insights to empower organisational strategies",
        ],
    },
    {
        // image: img3,
        title: "OCTOBER ’19: HARDWORK LED TO SUCCESS",
        details: [
            "Develop demographic-specific curricula tailored by gender, age, and region",
            "Foster engagement through interactive workshops and training",
            "Empower self-help groups as first responders and feedback hubs",
        ],
    },
    {
        // image: img4,
        title: "SEPTEMBER ’20: WE BECAME A HIT",
        details: [
            "Curate meticulously designed sessions for profound growth",
            "Provide customised guidance to cultivate essential life skills",
            "Detect underlying risks and elevate organisational consciousness",
        ],
    },
    {
        // image: img5,
        title: "OCTOBER ’20: HIP HIP HURRAY",
        details: [
            "Assess intervention effectiveness with follow-up evaluations",
            "Facilitate collaborative feedback sessions for shared learning",
            "Develop a strategic roadmap with leadership for sustained success",
        ],
    },
    {
        // image: img5,
        title: "MARCH ’22: SUCCESS KEPT US GOING",
        details: [
            "Assess intervention effectiveness with follow-up evaluations",
            "Facilitate collaborative feedback sessions for shared learning",
            "Develop a strategic roadmap with leadership for sustained success",
        ],
    },
    {
        // image: img5,
        title: "JUNE ’22: AS EXCLUSIVE AS IT GETS",
        details: [
            "Assess intervention effectiveness with follow-up evaluations",
            "Facilitate collaborative feedback sessions for shared learning",
            "Develop a strategic roadmap with leadership for sustained success",
        ],
    },
];
function WorksTable() {
    return (
        <Box component="section" sx={{
            mx: { xs: '20px', sm: '70px', md: '90px', xl: '100px' }
        }}>
            <Box sx={{ position: 'relative', width: '100%', height: { xs: '300px', md: '500px' } }}>
                <Image
                    src={bgimg}
                    alt="Marketing"
                    style={{ objectFit: 'cover' , height: '100%', width: '100%' }}
                    priority
                />
            </Box>
            <Container maxWidth={"lg"}>
                <Box sx={{py: "40px"}}>
                    <Typography sx={{
                        fontSize: { md: '38px', sm: '32px', xs: '26px' },
                        py: '40px',
                        fontWeight: 500,
                        color: '#272727',
                        textAlign: 'center',
                        lineHeight: 1.2
                    }}>
                        &quot;We are India's #1 Affiliate Marketing Platform&quot;
                    </Typography>
                    <Typography sx={{
                        fontSize: { xs: '14px', sm: '16px', md: '18px' },
                        color: '#666666',
                        lineHeight: '24px',
                        textAlign: 'center',
                        maxWidth: '800px',
                        mx: 'auto',
                        mb: 4
                    }}>
                        Founded by Swati & Rohan Bhargava in July 2019, EarnKaro is a deal-sharing platform, partnered
                        with 200+ Shopping Sites across various categories like Fashion, Beauty, Grocery, OTC Medicines,
                        Electronics & Credit Cards. Backed by Late Mr. Ratan Tata & some of India's leading VC firms -
                        Kalaari Capital & Korea Investment Partners, we cater to 20L+ registered users sharing deals
                        across e-commerce sites like Flipkart, Myntra, Axis Bank, Mamaearth, Beardo & more.
                    </Typography>
                    <Typography sx={{
                        fontSize: { xs: '20px', sm: '24px', md: '28px' },
                        py: '40px',
                        color: '#272727',
                        textAlign: 'center',
                        fontWeight: 600
                    }}>
                        Follow Our Achievements
                    </Typography>
                    <Box sx={{position: "relative", mt: {xs: 4, sm: 6}}}>
                        <Box
                            sx={{
                                position: "absolute",
                                left: 6,
                                top: 0,
                                bottom: 0,
                                width: {md: "4px", xs: 0},
                                bgcolor: "#8398ed",
                                transform: "translateX(-50%)",
                                zIndex: 0,
                            }}
                        />
                        {steps.map((step, index) => (
                            <Box
                                key={index}
                                sx={{
                                    position: "relative",
                                    mt: index === 0 ? 0 : {xs: 4},
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: {lg: "50%", md: "50%", sm: "50%"},
                                        left: {lg: "-1.6%", md: "-3%", sm: "-4.8%"},
                                        display: {xs: "none", sm: "inline-flex"},
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: 50,
                                        height: 50,
                                        borderRadius: "50%",
                                        bgcolor: "#0073E6",
                                        color: "#fff",
                                        fontWeight: "bold",
                                        fontSize: 18,
                                        transform: "translateY(-50%)",
                                        zIndex: 1,
                                    }}
                                >
                                    <CircleIcon/>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: {xs: "column", md: "row"},
                                        bgcolor: "#fff",
                                        borderRadius: 2,
                                        p: {xs: 3, sm: 3, md: 4},
                                        border: "1px solid #E5E7EB",
                                        gap: 4,
                                        ml: {md: 5, xs: 0},
                                        position: "relative",
                                        transition: "0.3s",
                                        "&:hover": {
                                            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                                        },
                                    }}
                                >
                                    {/*<Box*/}
                                    {/*    sx={{*/}
                                    {/*        position: "absolute",*/}
                                    {/*        top: "10px",*/}
                                    {/*        right: "12px",*/}
                                    {/*        display: {xs: "inline-flex", sm: "none"},*/}
                                    {/*        alignItems: "center",*/}
                                    {/*        justifyContent: "center",*/}
                                    {/*        width: 35,*/}
                                    {/*        height: 35,*/}
                                    {/*        borderRadius: "50%",*/}
                                    {/*        bgcolor: "#0073E6",*/}
                                    {/*        color: "#fff",*/}
                                    {/*        fontWeight: "bold",*/}
                                    {/*        fontSize: 14,*/}
                                    {/*    }}*/}
                                    {/*>*/}
                                    {/*    <CircleIcon/>*/}
                                    {/*</Box>*/}
                                    <Grid container spacing={4}>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={7}
                                            display="flex"
                                            flexDirection="column"
                                            justifyContent="center"
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: {xs: 20, sm: 22, md: 24},
                                                    mb: 2,
                                                    color: "#002F6C",
                                                }}
                                            >
                                                {step.title}
                                            </Typography>
                                            {step.details.map((detail, i) => (
                                                <Box key={i} display="flex" mb={1}>
                                                    <CheckCircleIcon
                                                        sx={{color: "#0073E6", mr: 1, mt: 0.5, fontSize: 20}}
                                                    />
                                                    <Typography
                                                        sx={{fontSize: {xs: 12, sm: 16}, lineHeight: 1.5,color:"#000"}}
                                                    >
                                                        {detail}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={5}
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Box
                                                sx={{
                                                    height: "220px",
                                                    width: "400px",
                                                }}
                                            >
                                                {/*<img*/}
                                                {/*    src={step.image}*/}
                                                {/*    alt={step.title}*/}
                                                {/*    style={{*/}
                                                {/*        width: "100%",*/}
                                                {/*        height: "100%",*/}
                                                {/*        objectFit: "contain",*/}
                                                {/*        borderRadius: 8,*/}
                                                {/*        transition: "transform 0.3s ease-in-out",*/}
                                                {/*    }}*/}
                                                {/*    className="hover-scale-image"*/}
                                                {/*/>*/}
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
export default WorksTable;