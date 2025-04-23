import React from 'react';
import { Box } from '@mui/material';
import  Header  from '../components/Header/Header';
import  Hero  from '../components/Hero/Hero';
import { Benefits } from '../components/Home/Benefits';
import { LearningSection } from '../components/Home/LearningSection';
import { SubscriptionPlans } from '../components/Home/SubscriptionPlans';
import { Footer } from '../components/Footer/Footer';

export const Home: React.FC = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Benefits />
      <LearningSection />
      <SubscriptionPlans />
      <Footer />
    </Box>
  );
};