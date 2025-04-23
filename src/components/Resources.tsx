/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Alert,
  Skeleton,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetResourcesBySubjectQuery } from '../services/authApi';
import { styled } from '@mui/material/styles';
import Header from './Header/Header';
import { Grid as MuiGrid } from '@mui/material';

const Grid = MuiGrid as unknown as React.FC<any>;


const ResourceCard = styled(Card)(() => ({
  borderRadius: '16px',
  background: 'linear-gradient(145deg, #ffffff, #f3f4f6)',
  boxShadow: '8px 8px 20px #d1d9e6, -8px -8px 20px #ffffff',
  transition: '0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '12px 12px 24px #cfd8dc, -12px -12px 24px #ffffff',
  },
}));

const ResourcesPage: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const { data: resources = [], isLoading, error } = useGetResourcesBySubjectQuery(subjectId!);
  const user = useSelector((state: any) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const standardId = resources?.[0]?.subject?.standard;

  const handleSubscribe = async (type: 'subject' | 'standard') => {
    const id = type === 'subject' ? subjectId : standardId;

    if (!user) {
      alert('Please login to subscribe.');
      return;
    }

    const response = await fetch('http://localhost:5000/api/payments/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type,
        id,
        userId: user._id,
      }),
    });

    const data = await response.json();
    window.location.href = data.url;
  };

  const getYouTubeVideoId = (url: string) => {
    const regExp = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|\S*\?v=)|youtu\.be\/)([^"&?/\s]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  return (
    <Box sx={{ padding: '2rem', marginTop: '4rem', backgroundColor: '#F9FAFB' }}>
           <Header />
      <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom sx={{ color: '#4ECDC4' }}>
        Subject Resources
      </Typography>

      {isLoading ? (
        <Grid container spacing={3}>
          {[...Array(3)].map((_, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Skeleton variant="rectangular" height={200} />
              <Skeleton />
              <Skeleton width="60%" />
            </Grid>
          ))}
        </Grid>
      ) : error ? (
        <Alert severity="error">Failed to load resources</Alert>
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {resources.length ? (
            resources.map((res) => (
              <Grid item xs={12} sm={6} md={4} key={res._id}>
                <ResourceCard>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {res.type === 'video' ? '🎥' : '📄'} {res.title}
                    </Typography>

                    {res.isAccess ? (
                      <>
                        {res.type === 'video' ? (
                          <Box mt={2}>
                            <iframe
                              width="100%"
                              height="200"
                              src={`https://www.youtube.com/embed/${getYouTubeVideoId(res.url)}`}
                              title={res.title}
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              style={{ borderRadius: '8px', border: 'none' }}
                            />
                          </Box>
                        ) : res.type === 'pdf' ? (
                          <Box mt={2}>
                            <iframe
                              src={res.url}
                              width="100%"
                              height="300px"
                              title={res.title}
                              style={{ border: '1px solid #ccc', borderRadius: '6px' }}
                            />
                            <Button
                              href={res.url}
                              target="_blank"
                              download
                              size="small"
                              sx={{ mt: 1 }}
                            >
                              Download PDF
                            </Button>
                          </Box>
                        ) : null}
                      </>
                    ) : (
                      <Box mt={2} display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="body2" color="text.secondary">
                          🔒 Locked. Subscribe to access.
                        </Typography>
                        <Button
                          onClick={() => handleSubscribe('subject')}
                          variant="contained"
                          sx={{ mt: 1 }}
                        >
                          Unlock this Subject
                        </Button>
                        <Button
                          onClick={() => handleSubscribe('standard')}
                          variant="outlined"
                          sx={{ mt: 1 }}
                        >
                          Unlock Entire Standard
                        </Button>
                      </Box>
                    )}
                  </CardContent>
                </ResourceCard>
              </Grid>
            ))
          ) : (
            <Typography textAlign="center" color="text.secondary">
              No resources yet.
            </Typography>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default ResourcesPage;
