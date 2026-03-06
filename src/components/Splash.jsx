import React, { useEffect, useState } from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

export default function Splash({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 1500;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);
      if (currentStep >= steps) {
        clearInterval(timer);
        setIsExiting(true);
        setTimeout(onComplete, 600);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        transition: 'all 0.5s ease-in-out',
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? 'translateY(-48px)' : 'translateY(0)'
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            width: 96,
            height: 96,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'rgba(15, 23, 42, 0.5)',
            boxShadow: '0 0 40px rgba(56,189,248,0.1)',
            backdropFilter: 'blur(12px)',
            animation: 'fadeInScale 0.5s ease-out forwards'
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              letterSpacing: '-0.05em',
              background: 'linear-gradient(to bottom right, #38bdf8, #6366f1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            AK
          </Typography>
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              borderRadius: 4,
              border: '1px solid rgba(56, 189, 248, 0.3)',
              animation: 'spin 8s linear infinite',
              '@keyframes spin': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' }
              },
              '@keyframes fadeInScale': {
                '0%': { opacity: 0, transform: 'scale(0.9)' },
                '100%': { opacity: 1, transform: 'scale(1)' }
              }
            }}
          />
        </Box>
        
        <Box sx={{ display: 'flex', width: 192, flexDirection: 'column', gap: 1 }}>
          <LinearProgress 
            variant="determinate" 
            value={progress} 
            sx={{ 
              height: 4, 
              borderRadius: 2,
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              '& .MuiLinearProgress-bar': {
                background: 'linear-gradient(to right, #38bdf8, #6366f1)'
              }
            }} 
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="caption" sx={{ fontWeight: 500, letterSpacing: '0.1em', color: 'text.secondary' }}>
              LOADING
            </Typography>
            <Typography variant="caption" sx={{ fontWeight: 500, letterSpacing: '0.1em', color: 'text.secondary' }}>
              {Math.round(progress)}%
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
