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
import SchoolIcon from '@mui/icons-material/School';
import Header from './Header/Header';
import { Grid as MuiGrid } from '@mui/material';

const Grid = MuiGrid as unknown as React.FC<any>;

const BoardsPage: React.FC = () => {
  const { data: boards, isLoading, error } = useGetBoardsQuery();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        pt: { xs: 10, md: 15 },
        background: 'linear-gradient(to right, #e0f7fa, #ffffff)',
        minHeight: '100vh',
      }}
    >
      <Header />

      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{
          color: '#1A237E',
          fontSize: { xs: '25px', md: '40px' },
          mb: { xs: 3, md: 5 },
        }}
      >
        Explore Educational Boards
      </Typography>

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <CircularProgress size={60} />
        </Box>
      ) : error ? (
        <Alert severity="error" sx={{ mt: 4, mx: 'auto', maxWidth: 400 }}>
          Failed to load boards
        </Alert>
      ) : (
        <Grid container spacing={{ xs: 4, md: 3 }} justifyContent="center" sx={{ mt: 2, px: { xs: 2, md: 6 } }}>
          {boards?.length ? (
            boards.map((board) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={board._id}>
                <Card
                  onClick={() => navigate(`/boards/${board._id}`)}
                  sx={{
                    height: '70%',
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                    textAlign: 'center',
                    p: { xs: 2, md: 3 },
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <SchoolIcon sx={{ fontSize: { xs: 50, md: 70 }, color: '#4ECDC4', mb: 2 }} />
                    <CardContent sx={{ p: 0 }}>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ mb: 0.5 }}
                        color="text.primary"
                      >
                        {board.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: '14px', md: '16px' },
                          minHeight: { xs: 'auto', md: '50px' },
                          px: { xs: 0.5, md: 1 },
                        }}
                      >
                        Curriculum overview, syllabus & resources.
                      </Typography>
                    </CardContent>
                  </Box>
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