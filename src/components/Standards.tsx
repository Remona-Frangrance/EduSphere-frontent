/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  Box,
  Typography,
  Card,
  CircularProgress,
  Alert,
  Stack,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetStandardsByBoardQuery } from '../services/authApi';
import SchoolIcon from '@mui/icons-material/School';
import { styled } from '@mui/material/styles';
import Header from './Header/Header';
import { Grid as MuiGrid } from '@mui/material';

const Grid = MuiGrid as unknown as React.FC<any>;


// Styled Card component for a modern, neumorphism-like effect
const StandardCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
  borderRadius: '20px',
  background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
  boxShadow: '8px 8px 20px #d1d9e6, -8px -8px 20px #ffffff',
  transition: '0.4s',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '12px 12px 24px #cfd8dc, -12px -12px 24px #ffffff',
  },
}));

const StandardsPage: React.FC = () => {
  const { boardId } = useParams<{ boardId: string }>();
  const navigate = useNavigate();
  const { data: standards, isLoading, error } = useGetStandardsByBoardQuery(boardId!);

  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: '#F9FAFB', minHeight: '100vh' }}>
           <Header />
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight="bold"
        sx={{ mb: 6, color: '#4ECDC4' }}
      >
        Standards in This Board
      </Typography>

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error">Failed to load standards</Alert>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {standards?.length ? (
            standards.map((standard) => (
              <Grid item xs={12} sm={6} md={4} key={standard._id}>
                <StandardCard onClick={() => navigate(`/standards/${standard._id}`)}>
                  <Stack spacing={2} alignItems="center">
                    {/* Icon inside a circle */}
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        backgroundColor: '#E3F2FD',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      <SchoolIcon sx={{ fontSize: 40, color: '#1A237E' }} />
                    </Box>
                    <Typography variant="h5" fontWeight="bold">
                      {standard.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {standard.board?.name}
                    </Typography>
                  </Stack>
                </StandardCard>
              </Grid>
            ))
          ) : (
            <Typography textAlign="center" color="text.secondary" mt={4}>
              No standards found.
            </Typography>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default StandardsPage;
