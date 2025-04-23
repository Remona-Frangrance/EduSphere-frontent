import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Link
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AuthContainer, AuthCard, AuthForm, ImageSection, SignupSection } from './styles';
import { StyledTextField } from '../../pages/Contact/styles';
import { useSignupMutation } from '../../services/authApi';
import { setToken } from '../../services/authSlice';
import { useDispatch } from 'react-redux';


export const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [signup, { isLoading, error }] = useSignupMutation();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: ''
  });

  const handleSignup = async () => {
    try {
      const res = await signup(formData).unwrap();
      // Optional: store token
      dispatch(setToken(res.token));
      navigate('/login');
    } catch (err) {
      console.error('Signup failed:', err);
    }
  };

  return (
    <AuthContainer>
      <ImageSection>
        <img src="/images/undraw_sign_in_re_o58h.svg" alt="Learning Illustration" className="hero-image" />
        <Typography variant="h2" component="h1" sx={{
          color: '#6C63FF', mb: 1, pt: 3, fontFamily: '"Source Serif Pro", "Noto Serif", serif',
          fontWeight: 400, fontSize: '36px', lineHeight: '40px',
        }}>
          Join EduHub
        </Typography>
        <Typography variant="h4" sx={{ color: '#6C63FF', mb: 2 }}>
          and start your learning journey
        </Typography>
        <Typography variant="h6" sx={{ color: 'black' }}>
          Create an account to get started!
        </Typography>
      </ImageSection>

      <SignupSection>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <AuthCard>
            <Typography variant="h4" component="h1" gutterBottom sx={{
              fontFamily: '"Source Serif Pro", "Noto Serif", serif',
              fontWeight: 400, fontSize: '36px', lineHeight: '40px',
            }}>
              Sign Up
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: 'black', fontWeight: 500, fontSize: '16px' }}>
              Start your learning journey today
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                Something went wrong. Please try again.
              </Alert>
            )}

            <AuthForm>
              <TextField
                fullWidth
                label="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                variant="outlined"
                margin="normal"
              />
              <StyledTextField
                fullWidth
                label="Mobile Number"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                inputProps={{ maxLength: 10, pattern: '[0-9]*' }}
                margin="normal"
              />
              <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={handleSignup}
                disabled={isLoading}
                sx={{ backgroundColor: '#6C63FF', color: 'white', '&:hover': { backgroundColor: '#6C63FF' } }}
              >
                {isLoading ? 'Creating account...' : 'Sign Up'}
              </Button>
            </AuthForm>

            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: 'black', fontWeight: 400, fontSize: '16px' }}>
                Already have an account?{' '}
                <Link href="/login" underline="hover">
                  Login
                </Link>
              </Typography>
            </Box>
          </AuthCard>
        </motion.div>
      </SignupSection>
    </AuthContainer>
  );
};
