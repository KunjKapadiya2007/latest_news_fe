"use client";

import {useEffect, useState} from 'react';
import {useSearchParams, useRouter} from 'next/navigation';
import {
    Typography,
    Box,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Skeleton,
    Grid,
    Paper,
    Avatar,
    Divider,
    Fade,
    Zoom,
    InputBase,
    IconButton,
    Breadcrumbs,
    Link as MuiLink
} from '@mui/material';
import {
    Search,
    AccessTime,
    FilterList,
    ViewModule,
    ViewList,
    TrendingUp,
    BookmarkBorder,
    Share,
    NavigateNext,
    Home
} from '@mui/icons-material';

export default function SearchResults() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q')?.toLowerCase() || '';
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [viewMode, setViewMode] = useState('list');
    const [searchInput, setSearchInput] = useState(query);
    const router = useRouter();

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const getReadingTime = (content) => {
        const wordsPerMinute = 200;
        const wordCount = content.split(' ').length;
        return Math.ceil(wordCount / wordsPerMinute);
    };

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('https://blog-be-gxxu.onrender.com/api/blogs');
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const filteredResults = blogs.filter((item) =>
        item.title.toLowerCase().includes(query) ||
        item.content.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query)
    );

    const handleSearch = () => {
        if (searchInput.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchInput.trim())}`);
        }
    };

    if (loading) {
        return (
            <Box sx={{minHeight: '100vh', bgcolor: '#f8f9fa'}}>
                <Paper
                    elevation={0}
                    sx={{
                        bgcolor: '#1976d2',
                        py: {xs: 4, md: 6},
                        borderRadius: 0
                    }}
                >
                    <Container maxWidth="lg">
                        <Box sx={{textAlign: 'center'}}>
                            <Skeleton
                                variant="text"
                                width="30%"
                                height={40}
                                sx={{
                                    mx: 'auto',
                                    mb: 2,
                                    bgcolor: 'rgba(255,255,255,0.2)',
                                    borderRadius: 2
                                }}
                            />
                            <Skeleton
                                variant="text"
                                width="50%"
                                height={24}
                                sx={{
                                    mx: 'auto',
                                    mb: 3,
                                    bgcolor: 'rgba(255,255,255,0.15)',
                                    borderRadius: 2
                                }}
                            />
                            <Skeleton
                                variant="rounded"
                                width="100%"
                                height={56}
                                sx={{
                                    maxWidth: 600,
                                    mx: 'auto',
                                    bgcolor: 'rgba(255,255,255,0.9)',
                                    borderRadius: 8
                                }}
                            />
                        </Box>
                    </Container>
                </Paper>

                <Container maxWidth="lg" sx={{py: 4}}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 4
                    }}>
                        <Skeleton variant="text" width={200} height={32} sx={{borderRadius: 2}}/>
                        <Box sx={{display: 'flex', gap: 1}}>
                            <Skeleton variant="circular" width={40} height={40}/>
                            <Skeleton variant="circular" width={40} height={40}/>
                            <Skeleton variant="circular" width={40} height={40}/>
                        </Box>
                    </Box>

                    {/* Cards Skeleton */}
                    <Grid container spacing={3}>
                        {[...Array(6)].map((_, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card
                                    sx={{
                                        borderRadius: 3,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                        border: '1px solid #f0f0f0'
                                    }}
                                >
                                    <Skeleton
                                        variant="rectangular"
                                        height={200}
                                        sx={{bgcolor: '#f5f5f5'}}
                                    />
                                    <CardContent sx={{p: 3}}>
                                        <Skeleton
                                            variant="rounded"
                                            width={80}
                                            height={24}
                                            sx={{mb: 2, borderRadius: 3}}
                                        />
                                        <Skeleton
                                            variant="text"
                                            width="100%"
                                            height={28}
                                            sx={{mb: 1, borderRadius: 2}}
                                        />
                                        <Skeleton
                                            variant="text"
                                            width="80%"
                                            height={28}
                                            sx={{mb: 2, borderRadius: 2}}
                                        />
                                        <Skeleton
                                            variant="text"
                                            width="100%"
                                            height={20}
                                            sx={{mb: 1}}
                                        />
                                        <Skeleton
                                            variant="text"
                                            width="90%"
                                            height={20}
                                            sx={{mb: 1}}
                                        />
                                        <Skeleton
                                            variant="text"
                                            width="70%"
                                            height={20}
                                            sx={{mb: 2}}
                                        />
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            mt: 2
                                        }}>
                                            <Skeleton variant="text" width={120} height={20}/>
                                            <Box sx={{display: 'flex', gap: 1}}>
                                                <Skeleton variant="circular" width={24} height={24}/>
                                                <Skeleton variant="circular" width={24} height={24}/>
                                                <Skeleton variant="text" width={80} height={20}/>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        );
    }

    return (
        <Box sx={{minHeight: '100vh', bgcolor: '#f8f9fa'}}>
            <Paper
                elevation={0}
                sx={{
                    bgcolor: '#1976d2',
                    py: {xs: 6, md: 8},
                    borderRadius: 0,
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <Container maxWidth="lg" sx={{position: 'relative', zIndex: 1}}>
                    <Breadcrumbs
                        separator={<NavigateNext fontSize="small" sx={{color: 'rgba(255,255,255,0.7)'}}/>}
                        sx={{mb: 3, color: 'rgba(255,255,255,0.8)'}}
                    >
                        <MuiLink
                            href="/"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                color: 'rgba(255,255,255,0.8)',
                                textDecoration: 'none',
                                '&:hover': {color: 'white'}
                            }}
                        >
                            <Home sx={{mr: 0.5, fontSize: 16}}/>
                            Home
                        </MuiLink>
                        <Typography color="white" sx={{fontWeight: 500}}>Search Results</Typography>
                    </Breadcrumbs>

                    <Box sx={{textAlign: 'center', mb: 4}}>
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontWeight: 700,
                                color: 'white',
                                mb: 2,
                                fontSize: {xs: '2.5rem', md: '3.5rem'},
                                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                        >
                            Search Results
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                color: 'rgba(255,255,255,0.9)',
                                fontWeight: 400,
                                mb: 4,
                                fontSize: {xs: '1.1rem', md: '1.3rem'}
                            }}
                        >
                            Results for "{query}"
                        </Typography>

                        {/* Enhanced Search Bar */}
                        <Paper
                            component="form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSearch();
                            }}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                                maxWidth: 600,
                                mx: 'auto',
                                borderRadius: 8,
                                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                backdrop: 'blur(10px)',
                                bgcolor: 'rgba(255,255,255,0.95)',
                                border: '1px solid rgba(255,255,255,0.2)'
                            }}
                        >
                            <InputBase
                                sx={{ml: 2, flex: 1, fontSize: '1.1rem'}}
                                placeholder="Search articles, topics, or keywords..."
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />
                            <IconButton
                                type="submit"
                                sx={{
                                    p: 2,
                                    color: '#1976d2',
                                    '&:hover': {
                                        bgcolor: 'rgba(25, 118, 210, 0.1)'
                                    }
                                }}
                            >
                                <Search/>
                            </IconButton>
                        </Paper>
                    </Box>

                    {filteredResults.length > 0 && (
                        <Fade in timeout={800}>
                            <Box sx={{textAlign: 'center'}}>
                                <Chip
                                    icon={<TrendingUp sx={{color: 'white !important'}}/>}
                                    label={`${filteredResults.length} result${filteredResults.length !== 1 ? 's' : ''} found`}
                                    sx={{
                                        backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                        color: '#FFF',
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        px: 2,
                                        py: 1,
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(225, 225, 225, 1)'
                                    }}
                                />
                            </Box>
                        </Fade>
                    )}
                </Container>
            </Paper>

            <Container maxWidth="lg" sx={{py: 5}}>
                {filteredResults.length > 0 ? (
                    <>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: 4,
                            flexWrap: 'wrap',
                            gap: 2,
                            width: '100%',
                        }}>
                            <Typography variant="h6" sx={{fontWeight: 600, color: '#1a1a1a'}}>
                                Found {filteredResults.length} articles
                            </Typography>

                            <Box sx={{display: 'flex', gap: 1}}>
                                <IconButton
                                    onClick={() => setViewMode('list')}
                                    sx={{
                                        bgcolor: viewMode === 'list' ? '#1976d2' : 'transparent',
                                        color: viewMode === 'list' ? 'white' : '#666',
                                        '&:hover': {
                                            bgcolor: viewMode === 'list' ? '#1565c0' : 'rgba(25, 118, 210, 0.1)'
                                        }
                                    }}
                                >
                                    <ViewList/>
                                </IconButton>
                                <IconButton
                                    onClick={() => setViewMode('grid')}
                                    sx={{
                                        bgcolor: viewMode === 'grid' ? '#1976d2' : 'transparent',
                                        color: viewMode === 'grid' ? 'white' : '#666',
                                        '&:hover': {
                                            bgcolor: viewMode === 'grid' ? '#1565c0' : 'rgba(25, 118, 210, 0.1)'
                                        }
                                    }}
                                >
                                    <ViewModule/>
                                </IconButton>
                            </Box>
                        </Box>

                        <Grid  spacing={viewMode === 'grid' ? 3 : 2}>
                            {filteredResults.map((article, index) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={viewMode === 'grid' ? 6 : 12}
                                    md={viewMode === 'grid' ? 4 : 12}
                                    key={article._id || index}
                                    sx={{my:3}}
                                >
                                    <Card
                                        sx={{
                                            height: '100%',
                                            maxWidth: '100%',
                                            display: 'flex',
                                            flexDirection: viewMode === 'list' ? {xs: 'column', sm: 'row'} : 'column',
                                            borderRadius: 3,
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            cursor: 'pointer',
                                            border: '1px solid #f0f0f0',
                                            overflow: 'hidden',
                                            position: 'relative',
                                            '&:hover': {
                                                boxShadow: '0 8px 40px rgba(25, 118, 210, 0.15)',
                                                '& .read-more': {
                                                    transform: 'translateX(8px)'
                                                }
                                            }
                                        }}
                                        onClick={() => router.push(`/article-detail/${article._id}`)}
                                    >
                                        {article.image && (
                                            <CardMedia
                                                component="img"
                                                height={'100%'}
                                                width={'100%'}
                                                image={article.image}
                                                alt={article.title}
                                                className="article-image"
                                                sx={{
                                                    objectFit: 'cover',
                                                    width: viewMode === 'list' ? {xs: '100%', sm: 300} : '100%',
                                                    height:'100%',
                                                    transition: 'transform 0.3s ease'
                                                }}
                                            />
                                        )}
                                        <CardContent sx={{
                                            flexGrow: 1,
                                            p: 3,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 1.5,
                                            position: 'relative'
                                        }}>

                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: viewMode === 'list' ? '1.25rem' : '1.1rem',
                                                    lineHeight: 1.3,
                                                    color: '#1a1a1a',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    mb: 1,
                                                    transition: 'color 0.2s ease',
                                                    '&:hover': {
                                                        color: '#1976d2'
                                                    }
                                                }}
                                            >
                                                {article.title}
                                            </Typography>


                                            <Divider sx={{my: 1, opacity: 0.6}}/>

                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                flexWrap: 'wrap',
                                                gap: 1
                                            }}>
                                                <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                                                    <Box
                                                        sx={{
                                                            lineHeight: 1.8,
                                                            color: 'text.secondary',
                                                            typography: 'body1'
                                                        }}
                                                        dangerouslySetInnerHTML={{
                                                            __html: (article?.content || '').slice(0, viewMode === 'list' ? 200 : 120) + '...',
                                                        }}
                                                    />
                                                </Box>

                                                <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                                    <IconButton
                                                        size="small"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                        }}
                                                        sx={{
                                                            color: '#888',
                                                            '&:hover': {
                                                                color: '#667eea',
                                                                bgcolor: 'rgba(102, 126, 234, 0.1)'
                                                            }
                                                        }}
                                                    >
                                                        <BookmarkBorder fontSize="small"/>
                                                    </IconButton>
                                                    <IconButton
                                                        size="small"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                        }}
                                                        sx={{
                                                            color: '#888',
                                                            '&:hover': {
                                                                color: '#667eea',
                                                                bgcolor: 'rgba(102, 126, 234, 0.1)'
                                                            }
                                                        }}
                                                    >
                                                        <Share fontSize="small"/>
                                                    </IconButton>
                                                    <Typography
                                                        variant="body2"
                                                        className="read-more"
                                                        sx={{
                                                            color: '#1976d2',
                                                            fontWeight: 600,
                                                            fontSize: '0.875rem',
                                                            transition: 'transform 0.2s ease',
                                                            ml: 1
                                                        }}
                                                    >
                                                        Read more →
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                ) : (
                    <Fade in timeout={800}>
                        <Paper
                            sx={{
                                textAlign: 'center',
                                py: 8,
                                px: 4,
                                backgroundColor: 'white',
                                borderRadius: 4,
                                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                                border: '1px solid #f0f0f0',
                                bgcolor: 'white'
                            }}
                        >
                            <Avatar
                                sx={{
                                    width: 80,
                                    height: 80,
                                    mx: 'auto',
                                    mb: 3,
                                    bgcolor: 'rgba(25, 118, 210, 0.1)',
                                    color: '#1976d2'
                                }}
                            >
                                <Search sx={{fontSize: 40}}/>
                            </Avatar>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    color: '#1a1a1a',
                                    fontSize: {xs: '1.5rem', md: '2rem'}
                                }}
                            >
                                No Results Found
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#666',
                                    mb: 1,
                                    fontSize: '1.1rem',
                                    maxWidth: 400,
                                    mx: 'auto'
                                }}
                            >
                                We couldn't find any content matching your search for <strong>"{query}"</strong>.
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: '#888',
                                    fontSize: '1rem'
                                }}
                            >
                                Try different keywords or check your spelling.
                            </Typography>
                        </Paper>
                    </Fade>
                )}
            </Container>
        </Box>
    );
}