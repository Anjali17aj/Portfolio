import React from 'react';
import resumeData from '../data/resume.json';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Box, Typography, Card, CardContent, Container, Stack, Chip, IconButton } from '@mui/material';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Projects() {
  const { ref: headerRef, isIntersecting: isHeaderVisible } = useIntersectionObserver();

  if (!resumeData.projects || resumeData.projects.length === 0) return null;

  return (
    <Box id="projects" sx={{ position: 'relative', zIndex: 10, py: 12 }}>
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
            Projects
          </Typography>
          <Box sx={{ height: 4, width: 80, borderRadius: 2, background: 'linear-gradient(to right, #10b981, #3b82f6)' }} />
        </Box>

        <Stack spacing={4}>
          {resumeData.projects.map((project, index) => {
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
                    <Box sx={{ display: 'flex', width: 48, height: 48, flexShrink: 0, alignItems: 'center', justifyContent: 'center', borderRadius: 3, bgcolor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                      <FolderOpenIcon />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, lineHeight: 1.4 }}>
                          {project.title}
                        </Typography>
                        {project.link && (
                          <IconButton 
                            component="a" 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            sx={{ color: 'text.secondary', '&:hover': { color: '#10b981', bgcolor: 'rgba(16, 185, 129, 0.1)' } }}
                          >
                            <GitHubIcon />
                          </IconButton>
                        )}
                      </Box>
                      
                      <Typography variant="body2" color="primary.main" sx={{ mb: 2, fontWeight: 500 }}>
                        {project.technologies}
                      </Typography>

                      <Stack spacing={1.5}>
                        {project.bullets.map((bullet, i) => (
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
