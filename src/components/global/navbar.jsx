'use client'
import React, { useState } from 'react';
import {
    Box,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText
} from '@mui/material';
import { Search } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import Image from 'next/image';
import logo from '@/assets/global/EarnKaro-HD-Logo.png';
import { useRouter } from 'next/navigation';

function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const router = useRouter();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
        setDrawerOpen(open);
    };

    const social = [
        <FacebookIcon key="facebook" sx={{ color: 'white' }} />,
        <TwitterIcon key="twitter" sx={{ color: 'white' }} />,
        <InstagramIcon key="instagram" sx={{ color: 'white' }} />,
        <TelegramIcon key="telegram" sx={{ color: 'white' }} />
    ];

    const menuItems = [
        "EARN MONEY",
        "LATEST NEWS",
        "AI TOOLS"
    ];

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: { md: 'space-evenly', xs: 'space-between' },
                    p: 3,
                    boxShadow: '10px 10px 10px #EBEBEB',
                    backgroundColor: 'white',
                    position: 'relative',
                }}
            >
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        onClick={toggleDrawer(true)}
                        sx={{ fontSize: '35px', color: '#40A132' }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>

                <Box onClick={() => router.push('/')} sx={{ width: { xs: '180px' }, height: '40px', position: 'relative' }}>
                    <Image
                        src={logo}
                        alt="EarnKaro Logo"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </Box>

                <Box sx={{ display: { md: 'flex', xs: 'none' }, gap: 3, mx: 5 }}>
                    {menuItems.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                position: 'relative',
                                cursor: 'pointer',
                                '&:hover .underline': {
                                    width: '100%',
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 600,
                                    fontSize: 16,
                                    color: '#333',
                                    textTransform: 'uppercase',
                                }}
                            >
                                {item}
                            </Typography>
                            <Box
                                className="underline"
                                sx={{
                                    height: '2px',
                                    width: '0%',
                                    backgroundColor: '#3e71f0',
                                    transition: 'width 0.3s ease-in-out',
                                    position: 'absolute',
                                    bottom: -4,
                                    left: 0,
                                }}
                            />
                        </Box>
                    ))}
                </Box>

                <Box>
                    <IconButton aria-label="Search">
                        <Search sx={{ color: '#333' }} />
                    </IconButton>
                </Box>
            </Box>

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        width: '100vw',
                        backgroundImage: 'linear-gradient(to bottom, rgba(0,173,48,0.9), rgba(0,173,48,0.1))',
                        color: 'white',
                        p: 3,
                    }
                }}
            >
                <Box role="presentation" onKeyDown={toggleDrawer(false)}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
                            {social.map((icon, index) => (
                                <IconButton key={index} sx={{ color: 'white' }}>
                                    {icon}
                                </IconButton>
                            ))}
                        </Box>
                        <IconButton onClick={toggleDrawer(false)} sx={{ color: 'white' }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <List>
                        {menuItems.map((text, index) => (
                            <ListItem
                                button
                                key={index}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    },
                                }}
                            >
                                <ListItemText
                                    primary={text}
                                    primaryTypographyProps={{
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}

export default Navbar;
