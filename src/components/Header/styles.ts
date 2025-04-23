import { styled } from '@mui/material/styles';
import { AppBar, Button, Box } from '@mui/material';

export const StyledAppBar = styled(AppBar)(( ) => ({
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
  padding: '0.5rem 0',
}));

export const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

export const LogoText = styled('h1')({
  fontSize: '1.8rem',
  margin: 0,
  fontWeight: 800,
  letterSpacing: '-0.5px',
  '& .edu': {
    background: 'linear-gradient(90deg, #4ECDC4 0%, #1A237E 100%)', // Gradient from light teal to dark blue for 'Edu'
    WebkitBackgroundClip: 'text',  // Clip the background to text
    WebkitTextFillColor: 'transparent',  // Make the text color transparent to show the gradient
  },
  '& .hub': {
    background: 'linear-gradient(90deg, #1A237E 0%, #4ECDC4 100%)', // Gradient from dark blue to light teal for 'Hub'
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }
});



export const NavLinks = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
});

export const NavButton = styled(Button)({
  color: '#333',
  fontSize: '1rem',
  textTransform: 'none',
  padding: '6px 16px',
  borderRadius: '8px',
  '&:hover': {
    background: 'rgba(77, 171, 245, 0.08)',
  }
});

export const LoginButton = styled(Button)({
  background: 'linear-gradient(90deg, #4ECDC4 0%, #2196F3 100%)',
  color: 'white',
  textTransform: 'none',
  padding: '8px 24px',
  borderRadius: '50px',
  fontSize: '1rem',
  '&:hover': {
    background: 'linear-gradient(90deg, #FF6B6B 0%, #4ECDC4 100%)',
  }
});

export const UserContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});