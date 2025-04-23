import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '@mui/material';
import {
  HeroContainer,
  HeroTitle,
  HeroSubtitle,
  HeroContent,
  AnimatedShape,
} from './styles';

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      {/* Static shapes */}
      <AnimatedShape className="shape1" />
      <AnimatedShape className="shape2" />
      <AnimatedShape className="shape3" />

      <Container maxWidth={false} disableGutters sx={{ width: '100%' }}>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle>
              Your Educational Journey{' '}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="highlight"
              >
                Starts Here
              </motion.span>
            </HeroTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <HeroSubtitle>
              Choose your board and begin your learning adventure with our
              interactive platform designed for modern education
            </HeroSubtitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              variant="contained"
              size="large"
              className="cta-button"
              sx={{ backgroundColor: '#1A237E' }}
            >
              Get Started
            </Button>
          </motion.div>
        </HeroContent>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
