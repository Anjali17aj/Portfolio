import React from 'react';
import resumeData from '../data/resume.json';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Box, Typography, Card, CardContent, Container, Stack, Chip, IconButton } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Publications() {
  const { ref: headerRef, isIntersecting: isHeaderVisible } = useIntersectionObserver();

  if (!resumeData.publications || resumeData.publications.length === 0) return null;

  return (
    <Box id="publications" sx={{ position: 'relative', zIndex: 10, py: 12 }}>
      <Container maxWidth="lg">
        <Box
          ref={headerRef}
          sx={{
            mb: 8,
            transition: 'all 0.7s ease-out',
            opacity: isHeaderVisible ? 1 : 0,
            transform: isHeaderVisible ? 'translateY(0)' : 'translateY(32px)'
          }}
        >
          <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 1 }}>
            Publications
          </Typography>
          <Box sx={{ height: 4, width: 80, borderRadius: 2, background: 'linear-gradient(to right, #60a5fa, #6366f1)' }} />
        </Box>

        <Stack spacing={4}>
          {resumeData.publications.map((pub, index) => {
            const { ref, isIntersecting } = useIntersectionObserver();
            return (
              <Card
                key={index}
                ref={ref}
                sx={{
                  transition: 'all 0.7s ease-out',
                  opacity: isIntersecting ? 1 : 0,
                  transform: isIntersecting ? 'translateY(0)' : 'translateY(32px)'
                }}
              >
                <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, alignItems: 'flex-start' }}>
                     <Box sx={{ display: 'flex', width: 48, height: 48, flexShrink: 0, alignItems: 'center', justifyContent: 'center', borderRadius: 3, bgcolor: 'rgba(96, 165, 250, 0.1)', color: '#60a5fa' }}>
                      <MenuBookIcon />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, lineHeight: 1.4 }}>
                        {pub.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        {pub.authors}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
                        <Chip label={pub.journal} variant="outlined" sx={{ borderColor: 'divider', color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary" fontWeight={500}>
                          {pub.year}
                        </Typography>
                      </Box>
                    </Box>
                    {pub.url && (
                      <IconButton 
                        component="a" 
                        href={pub.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        sx={{ bgcolor: 'rgba(30, 41, 59, 0.5)', '&:hover': { bgcolor: 'rgba(96, 165, 250, 0.2)', color: '#60a5fa' } }}
                      >
                        <OpenInNewIcon />
                      </IconButton>
                    )}
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
