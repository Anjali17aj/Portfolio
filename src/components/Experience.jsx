import React from 'react';
import resumeData from '../data/resume.json';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Box, Typography, Card, CardContent, Container, Stack } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Experience() {
  const { ref: headerRef, isIntersecting: isHeaderVisible } = useIntersectionObserver();

  return (
    <Box id="experience" sx={{ position: 'relative', zIndex: 10, py: 12 }}>
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
            Experience
          </Typography>
          <Box sx={{ height: 4, width: 80, borderRadius: 2, background: 'linear-gradient(to right, #0ea5e9, #6366f1)' }} />
        </Box>

        <Stack spacing={4}>
          {resumeData.experience.map((exp, index) => {
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
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                    <Box sx={{ display: 'flex', width: 48, height: 48, flexShrink: 0, alignItems: 'center', justifyContent: 'center', borderRadius: 3, bgcolor: 'rgba(14, 165, 233, 0.1)', color: 'primary.main' }}>
                      <WorkOutlineIcon />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {exp.role}
                      </Typography>
                      <Typography variant="h6" color="primary.main" sx={{ fontWeight: 500, mb: 2 }}>
                        {exp.company}
                      </Typography>
                      
                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 3 }} sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary', typography: 'body2' }}>
                          <CalendarTodayIcon fontSize="small" />
                          {exp.dates}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary', typography: 'body2' }}>
                          <LocationOnIcon fontSize="small" />
                          {exp.location}
                        </Box>
                      </Stack>

                      <Stack spacing={1.5}>
                        {exp.bullets.map((bullet, i) => (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'primary.main', mt: 1, flexShrink: 0 }} />
                            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                              {bullet}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>
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
