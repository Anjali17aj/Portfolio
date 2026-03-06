import React from 'react';
import resumeData from '../data/resume.json';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Box, Typography, Card, CardContent, Container, Stack, Chip } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Education() {
  const { ref: headerRef, isIntersecting: isHeaderVisible } = useIntersectionObserver();

  return (
    <Box id="education" sx={{ position: 'relative', zIndex: 10, py: 12 }}>
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
            Education
          </Typography>
          <Box sx={{ height: 4, width: 80, borderRadius: 2, background: 'linear-gradient(to right, #a855f7, #ec4899)' }} />
        </Box>

        <Stack spacing={4}>
          {resumeData.education.map((edu, index) => {
            const { ref, isIntersecting } = useIntersectionObserver();
            return (
              <Card
                key={index}
                ref={ref}
                sx={{
                  transition: 'all 0.7s ease-out',
                  opacity: isIntersecting ? 1 : 0,
                  transform: isIntersecting ? 'translateX(0)' : 'translateX(-32px)'
                }}
              >
                <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, alignItems: { xs: 'flex-start', sm: 'center' } }}>
                    <Box sx={{ display: 'flex', width: 48, height: 48, flexShrink: 0, alignItems: 'center', justifyContent: 'center', borderRadius: 3, bgcolor: 'rgba(168, 85, 247, 0.1)', color: '#a855f7' }}>
                      <SchoolIcon />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {edu.institution}
                      </Typography>
                      <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 500, mb: 1 }}>
                        {edu.degree}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary', typography: 'body2' }}>
                        <LocationOnIcon fontSize="small" />
                        {edu.location}
                      </Box>
                    </Box>
                    <Chip label={edu.dates} sx={{ fontWeight: 500 }} />
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
