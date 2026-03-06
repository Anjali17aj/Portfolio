import React from 'react';
import resumeData from '../data/resume.json';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box id="home" sx={{ position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', alignItems: 'center', pt: 8 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, borderRadius: '9999px', border: '1px solid', borderColor: 'divider', bgcolor: 'rgba(15, 23, 42, 0.5)', px: 2, py: 1, mb: 4, backdropFilter: 'blur(8px)', animation: 'fade-in-up 0.5s ease-out' }}>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main', animation: 'pulse 2s infinite' }} />
          <Typography variant="body2" color="text.secondary" fontWeight={500}>
            Available for new opportunities
          </Typography>
        </Box>

        <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem' }, mb: 2, animation: 'fade-in-up 0.7s ease-out' }}>
          <Box component="span" sx={{ display: 'block' }}>{resumeData.basics.name}</Box>
          <Box component="span" sx={{ display: 'block', background: 'linear-gradient(to right, #38bdf8, #818cf8, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
            {resumeData.basics.title}
          </Box>
        </Typography>

        <Typography variant="h4" color="text.secondary" sx={{ mb: 6, fontWeight: 400, maxWidth: '800px', mx: 'auto', lineHeight: 1.6, animation: 'fade-in-up 0.9s ease-out' }}>
          {resumeData.basics.summary}
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ animation: 'fade-in-up 1.1s ease-out' }}>
          <Button 
            variant="contained" 
            size="large" 
            onClick={() => handleScroll('experience')}
            endIcon={<ArrowDownwardIcon />}
            sx={{ py: 1.5, px: 4, fontSize: '1.1rem' }}
          >
            View Experience
          </Button>
          {/* <Button 
            variant="outlined" 
            size="large" 
            onClick={() => window.print()}
            startIcon={<DownloadIcon />}
            sx={{ py: 1.5, px: 4, fontSize: '1.1rem', borderColor: 'divider', color: 'text.primary', '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(14, 165, 233, 0.05)' } }}
          >
            Download Resume
          </Button> */}
        </Stack>
      </Container>
    </Box>
  );
}
