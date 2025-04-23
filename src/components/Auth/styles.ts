import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';

export const AuthContainer = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'row',
});

export const ImageSection = styled(Box)(({ theme }) => ({
  flex: 1,
  background: '#FFFFFF', // Dark green background like Khan Academy
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  '& .hero-image': {
    maxWidth: '80%',
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.down('md')]: {
    display: 'none', // Hide on mobile
  },
}));

export const LoginSection = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  background: '#fff',
}));

export const AuthCard = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '400px',
  padding: theme.spacing(4),
  background: '#ffffff',
}));

export const AuthForm = styled('form')(({ theme }) => ({
  display: 'flex',
  width: '400px',

    flexDirection: 'column',
  gap: theme.spacing(2.5),
  marginTop: theme.spacing(3),
})); 

export const SignupSection = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  background: '#FFFFFF', // You can choose a different background color or pattern if needed
}));
