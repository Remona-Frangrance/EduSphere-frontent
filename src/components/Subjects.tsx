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
import { useGetSubjectsByStandardQuery } from '../services/authApi';
import SchoolIcon from '@mui/icons-material/School';
import { styled } from '@mui/material/styles';
import Header from './Header/Header';
import { Grid as MuiGrid } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Grid = MuiGrid as unknown as React.FC<any>;

// Styled Card component for a modern and professional look
const SubjectCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  borderRadius: '12px',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '200px', // Fixed height for consistent card height
  width: '210px', // Ensure full width for each card on mobile
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
}));

const SubjectsPage: React.FC = () => {
  const { standardId } = useParams<{ standardId: string }>();
  const navigate = useNavigate();
  const { data: subjects, isLoading, error } = useGetSubjectsByStandardQuery(standardId!);

  return (
    <Box sx={{ py: 10, px: 4, backgroundColor: '#F4F6F8', minHeight: '100vh' }}>
      <Header />
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight="bold"
        sx={{
          mb: 6,
          color: '#333',
          fontSize: { xs: '24px', md: '36px' },
          fontFamily: 'Arial, sans-serif',
        }}
      >
        Subjects in This Standard
      </Typography>

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <CircularProgress color="primary" />
        </Box>
      ) : error ? (
        <Alert severity="error">Failed to load subjects</Alert>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {subjects?.length ? (
            subjects.map((subject) => (
              <Grid item xs={12} sm={6} md={4} key={subject._id}>
                <SubjectCard onClick={() => navigate(`/subjects/${subject._id}/resources`)}>
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
                      <SchoolIcon sx={{ fontSize: 50, color: '#4ECDC4' }} />
                    </Box>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{
                        fontSize: { xs: '18px', md: '22px' },
                        color: '#1A237E',
                        fontFamily: 'Arial, sans-serif',
                      }}
                    >
                      {subject.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: '14px', md: '16px' },
                        color: '#757575',
                      }}
                    >
                      {subject.standard?.name}
                    </Typography>
                  </Stack>
                </SubjectCard>
              </Grid>
            ))
          ) : (
            <Typography textAlign="center" color="text.secondary" mt={4}>
              No subjects found.
            </Typography>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default SubjectsPage;
