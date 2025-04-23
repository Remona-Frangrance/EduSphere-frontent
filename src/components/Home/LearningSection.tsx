import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Grid as MuiGrid } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Grid = MuiGrid as unknown as React.FC<any>;


export const LearningSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container  sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Image on the left (desktop), top (mobile) */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <img
              src="images/undraw_learning_sketching_nd4f.svg"
              alt="Learning"
              style={{ width: '100%', maxWidth: '450px', height: 'auto' }}
            />
          </Box>
        </Grid>

        {/* Text on the right (desktop), bottom (mobile) */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom sx={{ color: '#4ECDC4' }}>
            Every Child Deserves the Chance to Learn
          </Typography>
          <Typography variant="body1" paragraph>
            We believe in providing equal educational opportunities to all students.
            Our platform offers comprehensive learning materials across various subjects
            and standards, making quality education accessible to everyone.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ backgroundColor: '#1A237E', color: '#fff' }}
            onClick={() => navigate('/login')}
          >
            Start Learning Today
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
