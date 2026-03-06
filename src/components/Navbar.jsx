import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, IconButton, Drawer, Box, Typography, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Publications', href: '#publications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map(item => item.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={isScrolled ? 4 : 0}
        sx={{ 
          background: isScrolled ? 'rgba(2, 6, 23, 0.8)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(30, 41, 59, 1)' : 'none',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        <Toolbar sx={{ maxWidth: '1280px', width: '100%', mx: 'auto', px: 3, justifyContent: 'space-between' }}>
          <Typography variant="h6" component="a" href="#home" onClick={(e) => handleNavClick(e, '#home')} sx={{ fontWeight: 800, textDecoration: 'none', color: 'white', letterSpacing: '-0.05em' }}>
            AK<Box component="span" sx={{ color: 'primary.main' }}>.</Box>
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                sx={{
                  color: activeSection === item.href.substring(1) ? 'white' : 'text.secondary',
                  bgcolor: activeSection === item.href.substring(1) ? 'rgba(255,255,255,0.1)' : 'transparent',
                  borderRadius: '20px',
                  textTransform: 'none',
                  fontWeight: 500,
                  px: 2,
                  '&:hover': {
                    color: 'white',
                    bgcolor: 'rgba(255,255,255,0.05)'
                  }
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{ display: { md: 'none' } }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            top: '64px',
            bgcolor: 'rgba(2, 6, 23, 0.95)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(30, 41, 59, 1)',
          }
        }}
      >
        <List sx={{ px: 2, py: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={(e) => handleNavClick(e, item.href)}
                sx={{
                  borderRadius: '8px',
                  bgcolor: activeSection === item.href.substring(1) ? 'rgba(255,255,255,0.1)' : 'transparent',
                  color: activeSection === item.href.substring(1) ? 'white' : 'text.secondary',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.05)', color: 'white' }
                }}
              >
                <ListItemText primary={item.name} primaryTypographyProps={{ fontWeight: 500 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
