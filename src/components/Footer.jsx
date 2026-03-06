import React from 'react';
import resumeData from '../data/resume.json';
import { Box, Typography, IconButton, Container, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';

export default function Footer() {
  return (
    <Box id="contact" component="footer" sx={{ position: 'relative', zIndex: 10, borderTop: '1px solid', borderColor: 'divider', bgcolor: 'rgba(2, 6, 23, 0.5)', py: 6, backdropFilter: 'blur(12px)' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
              {resumeData.basics.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
              {resumeData.basics.title}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-end' }, gap: 2 }}>
            <Stack direction="row" spacing={2}>
              <IconButton component="a" href={`mailto:${resumeData.basics.email}`} sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main', bgcolor: 'rgba(14, 165, 233, 0.1)' } }}>
                <EmailIcon />
              </IconButton>
              <IconButton component="a" href={`tel:${resumeData.basics.phone}`} sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main', bgcolor: 'rgba(14, 165, 233, 0.1)' } }}>
                <PhoneIcon />
              </IconButton>
              {resumeData.basics.links.map((link, i) => (
                <IconButton key={i} component="a" href={link.url} target="_blank" rel="noreferrer" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main', bgcolor: 'rgba(14, 165, 233, 0.1)' } }}>
                  <LanguageIcon />
                </IconButton>
              ))}
            </Stack>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
