import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AuthContainer, AuthCard, AuthForm, ImageSection, LoginSection } from './styles';
import { useLoginMutation } from '../../services/authApi';
import { setToken } from '../../services/authSlice';
import { useDispatch } from 'react-redux';


export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const res = await login({ email, password }).unwrap();
      // Optionally store token: localStorage.setItem("token", res.token);
      dispatch(setToken({ token: res.token, user: res }));
      navigate('/');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <AuthContainer>
      <ImageSection>
        <img src="/images/undraw_road_to_knowledge_m8s0.svg" alt="Learning Illustration" className="hero-image" />
        <Typography variant="h2" component="h1" sx={{ color: '#6C63FF', mb: 1, pt: 3, fontFamily: '"Source Serif Pro", "Noto Serif", serif', fontWeight: 400, fontSize: '36px', lineHeight: '40px' }}>
          Join EduHub
        </Typography>
        <Typography variant="h4" sx={{ color: '#6C63FF', mb: 2 }}>and learn with us</Typography>
        <Typography variant="h6" sx={{ color: 'black' }}>Log in to get started!</Typography>
      </ImageSection>

      <LoginSection>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <AuthCard>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: '"Source Serif Pro", "Noto Serif", serif', fontWeight: 400, fontSize: '36px', lineHeight: '40px' }}>
              Log in
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                Invalid email or password
              </Alert>
            )}

            <AuthForm>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link href="/forgot-password" sx={{ alignSelf: 'flex-start', mb: 2 }}>
                Forgot password?
              </Link>
              <Button
                type="button"
                fullWidth
                variant="contained"
                size="large"
                onClick={handleLogin}
                disabled={isLoading}
                sx={{ backgroundColor: '#6C63FF', color: 'white', '&:hover': { backgroundColor: '#6C63FF' } }}
              >
                {isLoading ? 'Logging in...' : 'Log in'}
              </Button>
            </AuthForm>

            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: 'black', fontWeight: 400, fontSize: '15px' }}>
                Don't have an account?{' '}
                <Link href="/signup" underline="hover">
                  Sign up
                </Link>
              </Typography>
            </Box>
          </AuthCard>
        </motion.div>
      </LoginSection>
    </AuthContainer>
  );
};

