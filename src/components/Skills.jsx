import React from 'react';
import resumeData from '../data/resume.json';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Box, Typography, Card, CardContent, Chip, Grid, Container } from '@mui/material';

export default function Skills() {
  const { ref: headerRef, isIntersecting: isHeaderVisible } = useIntersectionObserver();

  return (
    <Box id="skills" sx={{ position: 'relative', zIndex: 10, py: 12 }}>
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
            Skills & Expertise
          </Typography>
          <Box sx={{ height: 4, width: 80, borderRadius: 2, background: 'linear-gradient(to right, #34d399, #14b8a6)' }} />
        </Box>

        <Grid container spacing={4}>
          {resumeData.skills.map((skillGroup, index) => {
            const { ref, isIntersecting } = useIntersectionObserver();
            return (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card
                  ref={ref}
                  sx={{
                    height: '100%',
                    transition: 'all 0.7s ease-out',
                    transitionDelay: `${index * 100}ms`,
                    opacity: isIntersecting ? 1 : 0,
                    transform: isIntersecting ? 'translateY(0)' : 'translateY(32px)'
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                      {skillGroup.group}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {skillGroup.items.map((skill, i) => (
                        <Chip key={i} label={skill} />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
