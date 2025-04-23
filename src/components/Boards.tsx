/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import { useGetBoardsQuery } from '../services/authApi';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School'; // Added icon for better visual
import Header from './Header/Header';
import { Grid as MuiGrid } from '@mui/material';

const Grid = MuiGrid as unknown as React.FC<any>;


const BoardsPage: React.FC = () => {
  const { data: boards, isLoading, error } = useGetBoardsQuery();
  const navigate = useNavigate();


  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(to right, #f8f9fa, #e0f7fa)',
        minHeight: '100vh',
      }}
    >
         <Header />
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{ color: '#4ECDC4' }}
      >
        Explore Educational Boards
      </Typography>

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error" sx={{ mt: 4, mx: 'auto', maxWidth: 400 }}>
          Failed to load boards
        </Alert>
      ) : (
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {boards?.length ? (
            boards.map((board) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={board._id}>
                <Card
                  onClick={() => navigate(`/boards/${board._id}`)}
                  sx={{
                    height: '100%',
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                    textAlign: 'center',
                    p: 3,
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  <SchoolIcon sx={{ fontSize: 60, color: '#1A237E', mb: 2 }} />
                  <CardContent>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ mb: 1 }}
                      color="text.primary"
                    >
                      {board.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ minHeight: '50px' }}
                    >
                      Curriculum overview, syllabus & resources.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography textAlign="center" color="text.secondary" sx={{ mt: 4 }}>
              No boards found.
            </Typography>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default BoardsPage;
