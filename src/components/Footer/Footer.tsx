import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';

export const Footer: React.FC = () => {
  const footerSections = {
    standards: {
      title: 'Standards',
      links: ['CBSE', 'ICSE', 'State Board'],
    },
    subjects: {
      title: 'Subjects',
      links: ['Mathematics', 'Science', 'English', 'Social Studies'],
    },
    about: {
      title: 'About Us',
      links: ['Our Story', 'Contact', 'Careers', 'Privacy Policy'],
    },
  };

  return (
    <Box sx={{ bgcolor: '#1A237E', color: 'white', py: 6, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {Object.entries(footerSections).map(([key, section]) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <Typography variant="h6" gutterBottom sx={{ color: '#4ECDC4' }}>
                {section.title}
              </Typography>
              {section.links.map((link) => (
                <Box key={link} sx={{ mb: 1 }}>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    {link}
                  </Link>
                </Box>
              ))}
            </Grid>
          ))}
        </Grid>
        <Typography align="center" sx={{ mt: 4 }}>
          © {new Date().getFullYear()} EduHub. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};
