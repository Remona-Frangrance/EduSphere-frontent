import React from 'react';
import { Container, Typography, Link, Box, Stack, useMediaQuery, useTheme } from '@mui/material';

export const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // sm = 600px

  const footerLinks = [
    'CBSE',
    'ICSE',
    'State Board',
    'Mathematics',
    'Science',
    'English',
    'Social Studies',
    'Our Story',
    'Contact',
    'Careers',
    'Privacy Policy',
  ];

  return (
    <Box sx={{ bgcolor: '#1A237E', color: 'white', py: 4, mt: 8 }}>
      <Container maxWidth="lg">
        {/* Footer Links */}
        <Stack
          direction={isMobile ? 'column' : 'row'}
          spacing={2}
          justifyContent={isMobile ? 'flex-start' : 'center'}
          alignItems={isMobile ? 'flex-start' : 'center'}
          sx={{ textAlign: isMobile ? 'left' : 'center' }}
        >
          {footerLinks.map((link) => (
            <Link
              key={link}
              href="#"
              color="inherit"
              underline="none"
              sx={{
                fontSize: '14px',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              {link}
            </Link>
          ))}
        </Stack>

        {/* Copyright */}
        <Typography
          align="center"
          sx={{
            mt: 3,
            fontSize: '13px',
            color: 'white',
          }}
        >
          © {new Date().getFullYear()} EduHub. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};
