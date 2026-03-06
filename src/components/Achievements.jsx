import React from 'react';
import resumeData from '../data/resume.json';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Box, Typography, Card, CardContent, Grid, Container } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function Achievements() {
  const { ref: headerRef, isIntersecting: isHeaderVisible } = useIntersectionObserver();

  if (!resumeData.achievements || resumeData.achievements.length === 0) return null;

  return (
    <Box id="achievements" sx={{ position: 'relative', zIndex: 10, py: 12 }}>
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
            Key Achievements
          </Typography>
          <Box sx={{ height: 4, width: 80, borderRadius: 2, background: 'linear-gradient(to right, #f59e0b, #f97316)' }} />
        </Box>

        <Grid container spacing={4}>
          {resumeData.achievements.map((achievement, index) => {
            const { ref, isIntersecting } = useIntersectionObserver();
            return (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  ref={ref}
                  sx={{
                    height: '100%',
                    transition: 'all 0.7s ease-out',
                    transitionDelay: `${index * 100}ms`,
                    opacity: isIntersecting ? 1 : 0,
                    transform: isIntersecting ? 'scale(1)' : 'scale(0.95)'
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', width: 48, height: 48, alignItems: 'center', justifyContent: 'center', borderRadius: 3, bgcolor: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', mb: 3 }}>
                      {achievement.item.includes('%') ? <TrendingUpIcon /> : <EmojiEventsIcon />}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, lineHeight: 1.4 }}>
                      {achievement.item}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {achievement.context}
                    </Typography>
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
