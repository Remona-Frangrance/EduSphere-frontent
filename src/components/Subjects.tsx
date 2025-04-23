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

// Styled Card component for neumorphism effect
const SubjectCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  borderRadius: '16px',
  background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
  boxShadow: '8px 8px 20px #d1d9e6, -8px -8px 20px #ffffff',
  transition: '0.3s',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '12px 12px 24px #cfd8dc, -12px -12px 24px #ffffff',
  },
}));

const SubjectsPage: React.FC = () => {
  const { standardId } = useParams<{ standardId: string }>();
  const navigate = useNavigate();
  const { data: subjects, isLoading, error } = useGetSubjectsByStandardQuery(standardId!);

  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: '#F9FAFB', minHeight: '100vh' }}>
           <Header />
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight="bold"
        sx={{ mb: 6, color: '#4ECDC4' }}
      >
        Subjects in This Standard
      </Typography>

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <CircularProgress />
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
                      <SchoolIcon sx={{ fontSize: 40, color: '#1A237E' }} />
                    </Box>
                    <Typography variant="h5" fontWeight="bold">
                      {subject.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
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
