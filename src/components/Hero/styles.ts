import { styled, keyframes } from '@mui/material/styles';

const float = keyframes`
  0% { 
    transform: translateY(0px) rotate(0deg); 
    background: linear-gradient(135deg, #4ECDC4 0%, #1A237E 100%); /* Start with light teal to dark blue gradient */
  }
  50% { 
    transform: translateY(-20px) rotate(5deg); 
    background: linear-gradient(135deg, #1A237E 0%, #4ECDC4 100%); /* Reverse the gradient (dark blue to light teal) */
  }
  100% { 
    transform: translateY(0px) rotate(0deg); 
    background: linear-gradient(135deg, #4ECDC4 0%, #1A237E 100%); /* End with light teal to dark blue gradient */
  }
`;

export const HeroContainer = styled('div')({
  minHeight: '90vh',
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  display: 'flex',
  alignItems: 'center',
  padding: '4rem 0',
  width: '100vw',
});

export const HeroContent = styled('div')({
  textAlign: 'center',
  position: 'relative',
  zIndex: 2,
});

export const HeroTitle = styled('h1')({
  fontSize: '4.5rem',
  fontWeight: 800,
  marginBottom: '1.5rem',
  lineHeight: 1.2,
  color: '#1a237e',
  '& .highlight': {
    display: 'block',
    background: '#4ECDC4',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  '@media (max-width: 960px)': {
    fontSize: '3rem',
  },
  '@media (max-width: 600px)': {
    fontSize: '2.5rem',
  },
});

export const HeroSubtitle = styled('p')({
  fontSize: '1.25rem',
  color: '#455a64',
  maxWidth: '800px',
  margin: '0 auto 3rem auto',
  lineHeight: 1.6,
  '@media (max-width: 600px)': {
    fontSize: '1.1rem',
    padding: '0 1rem',
  },
});

export const AnimatedShape = styled('div')({
  position: 'absolute',
  borderRadius: '50%',
  animation: `${float} 6s ease-in-out infinite`, // Applying the float animation
  zIndex: 1,
  '&.shape1': {
    width: '300px',
    height: '300px',
    top: '10%',
    left: '5%',
    animationDelay: '0s',
  },
  '&.shape2': {
    width: '200px',
    height: '200px',
    bottom: '10%',
    right: '5%',
    animationDelay: '-2s',
  },
  '&.shape3': {
    width: '150px',
    height: '150px',
    bottom: '20%',
    left: '15%',
    animationDelay: '-4s',
  },
});

export const StyledButton = styled('button')({
  background: 'linear-gradient(90deg, #FF6B6B 0%, #4ECDC4 100%)',
  color: 'white',
  padding: '1rem 2.5rem',
  fontSize: '1.1rem',
  border: 'none',
  borderRadius: '50px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
  },
});
