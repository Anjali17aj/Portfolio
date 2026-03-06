import React from 'react';
import resumeData from '../data/resume.json';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Box, Typography, Card, CardContent, Container, Stack } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export default function Certifications() {
  const { ref: headerRef, isIntersecting: isHeaderVisible } = useIntersectionObserver();

  if (!resumeData.certifications || resumeData.certifications.length === 0) return null;

  return (
    <Box id="certifications" sx={{ position: 'relative', zIndex: 10, py: 12 }}>
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
            Certifications
          </Typography>
          <Box sx={{ height: 4, width: 80, borderRadius: 2, background: 'linear-gradient(to right, #facc15, #f97316)' }} />
        </Box>

        <Stack spacing={4}>
          {resumeData.certifications.map((cert, index) => {
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
                  <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', width: 48, height: 48, flexShrink: 0, alignItems: 'center', justifyContent: 'center', borderRadius: 3, bgcolor: 'rgba(250, 204, 21, 0.1)', color: '#facc15' }}>
                      <WorkspacePremiumIcon />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, lineHeight: 1.5 }}>
                        {cert.title}
                      </Typography>
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
