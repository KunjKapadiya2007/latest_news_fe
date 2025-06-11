'use client'

import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    CircularProgress,
    Button
} from "@mui/material";
import { usePathname } from "next/navigation";
import { ExpandMore, ExpandLess } from '@mui/icons-material';

function Blog() {
    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expandedBlogs, setExpandedBlogs] = useState({});
    const pathname = usePathname();

    const toggleExpanded = (blogIndex) => {
        setExpandedBlogs(prev => ({
            ...prev,
            [blogIndex]: !prev[blogIndex]
        }));
    };

    const truncateContent = (content, limit = 700) => {
        if (!content) return '';
        const textContent = content.replace(/<[^>]*>/g, '');
        if (textContent.length <= limit) return content;

        const truncated = content.substring(0, limit);
        const lastSentence = truncated.lastIndexOf('.');
        const lastWord = truncated.lastIndexOf(' ');

        const breakPoint = lastSentence > limit - 100 ? lastSentence + 1 : lastWord;
        return content.substring(0, breakPoint) + '...';
    };

    const segments = pathname.split('/')[1];

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await fetch('https://blog-be-gxxu.onrender.com/api/blogs');
                if (!response.ok) {
                    throw new Error('Failed to fetch blog data');
                }
                const data = await response.json();
                const allBlogs = Array.isArray(data) ? data : [data];

                const filteredBlogs = allBlogs.filter(blog => {
                    return blog.type?.toLowerCase() === segments?.toLowerCase();
                });

                setBlogData(filteredBlogs);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        if (segments) {
            fetchBlogData();
        }
    }, [segments]);

    const style = {
        fontSize: { md: '16px', xs: '12px', sm: '14px' },
        color: '#222222',
        lineHeight: { md: 1.74, xs: 1.5 },
        letterSpacing: '0.5px',
        mb: '26px',
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'center', py: 22 }}>
                <CircularProgress size={50} thickness={4} sx={{ color: '#40A132' }} />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ mt: 5 }}>
                <Container maxWidth="lg">
                    <Typography sx={{ textAlign: 'center', fontSize: '18px', color: 'red' }}>
                        Error: {error}
                    </Typography>
                </Container>
            </Box>
        );
    }

    if (blogData.length === 0) {
        return (
            <Box sx={{ my: 23 }}>
                <Container maxWidth="lg">
                    <Typography sx={{ textAlign: 'center', fontSize: '18px' , color:'#000' }}>
                        No blogs found for this category.
                    </Typography>
                </Container>
            </Box>
        );
    }

    return (
        <Box>
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 6 }}>
                {blogData.map((blog, blogIndex) => {
                    const isExpanded = expandedBlogs[blogIndex];
                    const textContent = blog.content ? blog.content.replace(/<[^>]*>/g, '') : '';
                    const needsTruncation = textContent.length > 700;
                    const displayContent = isExpanded || !needsTruncation ? blog.content : truncateContent(blog.content);

                    return (
                        <Box
                            key={blog._id || blogIndex}
                            sx={{
                                mb: blogIndex < blogData.length - 1 ? 12 : 0,
                                animation: 'fadeInUp 0.8s ease-out',
                                animationDelay: `${blogIndex * 0.2}s`,
                                animationFillMode: 'both',
                                '@keyframes fadeInUp': {
                                    '0%': {
                                        opacity: 0,
                                        transform: 'translateY(30px)'
                                    },
                                    '100%': {
                                        opacity: 1,
                                        transform: 'translateY(0)'
                                    }
                                }
                            }}
                        >
                            <Box sx={{ textAlign: 'center'}}>
                                <Typography
                                    component="h4"
                                    variant="h4"
                                    sx={{
                                        color: '#000',
                                        fontSize: { lg: '40px', md: '36px', sm: '32px', xs: '26px' },
                                        fontWeight: 700,
                                        display: 'inline-block',
                                    }}
                                >
                                    {blog.title || 'Blog Title'}
                                </Typography>
                            </Box>

                            <Grid container justifyContent="center">
                                <Grid item xs={12} md={10}>
                                    <Box sx={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        backdropFilter: 'blur(20px)',
                                        borderRadius: '24px',
                                        p: { md: 6, sm: 4, xs: 3 },
                                        transition: 'all 0.3s ease',
                                    }}>
                                        {blog.image && (
                                            <Box
                                                sx={{
                                                    mb: 5,
                                                    borderRadius: '20px',
                                                    overflow: 'hidden',
                                                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                                                    position: 'relative'
                                                }}
                                            >
                                                <img
                                                    src={blog.image}
                                                    alt={blog.title || 'Blog Image'}
                                                    style={{
                                                        width: '100%',
                                                        height: 'auto',
                                                        objectFit: 'cover',
                                                        display: 'block'
                                                    }}
                                                />
                                            </Box>
                                        )}

                                        {blog.content && (
                                            <Box>
                                                <Box sx={{
                                                    '& p': {
                                                        lineHeight: 1.8,
                                                        mb: 3,
                                                        fontSize: { md: '18px', sm: '16px', xs: '15px' },
                                                        color: '#444'
                                                    }
                                                }}>
                                                    <Typography
                                                        component="div"
                                                        sx={style}
                                                        dangerouslySetInnerHTML={{ __html: displayContent }}
                                                    />
                                                </Box>

                                                {needsTruncation && (
                                                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                                                        <Button
                                                            onClick={() => toggleExpanded(blogIndex)}
                                                            sx={{
                                                                background: '#5C83E6',
                                                                color: 'white',
                                                                px: 4,
                                                                py: 1.5,
                                                                borderRadius: '25px',
                                                                fontSize: { md: '16px', sm: '14px', xs: '13px' },
                                                                fontWeight: 600,
                                                                textTransform: 'none'
                                                            }}
                                                            startIcon={isExpanded ? <ExpandLess /> : <ExpandMore />}
                                                        >
                                                            {isExpanded ? 'Read Less' : 'Read More'}
                                                        </Button>
                                                    </Box>
                                                )}
                                            </Box>
                                        )}

                                        {blog.tags && blog.tags.length > 0 && (
                                            <Box sx={{
                                                mt: 6,
                                                pt: 4,
                                                borderTop: '2px solid rgba(102, 126, 234, 0.1)'
                                            }}>
                                                <Typography
                                                    sx={{
                                                        fontSize: { md: '18px', sm: '16px', xs: '14px' },
                                                        fontWeight: 700,
                                                        mb: 3,
                                                        color: '#667eea',
                                                        display: 'flex',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    Tags:
                                                </Typography>
                                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                                                    {blog.tags.map((tag, tagIndex) => (
                                                        <Typography
                                                            key={tagIndex}
                                                            sx={{
                                                                background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
                                                                color: '#3b82f6',
                                                                padding: '8px 18px',
                                                                borderRadius: '25px',
                                                                fontSize: { md: '14px', sm: '13px', xs: '12px' },
                                                                fontWeight: 600
                                                            }}
                                                        >
                                                            #{tag}
                                                        </Typography>
                                                    ))}
                                                </Box>
                                            </Box>
                                        )}
                                    </Box>
                                </Grid>
                            </Grid>

                            {blogIndex < blogData.length - 1 && (
                                <Box
                                    sx={{
                                        mt: 10,
                                        mx: 'auto',
                                        width: { md: '200px', xs: '150px' },
                                        height: '2px',
                                        background: 'linear-gradient(90deg, transparent, #667eea, transparent)',
                                        position: 'relative'
                                    }}
                                />
                            )}
                        </Box>
                    );
                })}
            </Container>
        </Box>
    );
}

export default Blog;