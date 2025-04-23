import { styled } from '@mui/material/styles';
import { Paper, TextField, Box, Container } from '@mui/material';

export const ContactWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(135deg, ${theme.palette.primary.light}15, ${theme.palette.background.default})`,
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(8),
}));

export const ContactContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: theme.spacing(4),
  },
}));

export const ImageSection = styled(Box)(({ theme }) => ({
  flex: '1 1 50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& img': {
    width: '100%',
    maxWidth: 600,
    height: 'auto',
  },
  [theme.breakpoints.down('md')]: {
    '& img': {
      maxWidth: 500,
    },
  },
}));

export const FormSection = styled(Box)(({ theme }) => ({
  flex: '1 1 40%',
   [theme.breakpoints.down('md')]: {
    flex: '1 1 100%', // Form takes full width on small screens
  },
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
  background: theme.palette.background.paper,
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(6),
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&.Mui-focused': {
      backgroundColor: theme.palette.background.paper,
      '& fieldset': {
        borderWidth: '2px',
        borderColor: theme.palette.primary.main,
      },
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
}));

export const PageTitle = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  '& h3': {
    fontSize: '2.5rem',
    fontWeight: 700,
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: theme.spacing(2),
  },
  '& p': {
    color: theme.palette.text.secondary,
    fontSize: '1.1rem',
    lineHeight: 1.6,
  },
})); 