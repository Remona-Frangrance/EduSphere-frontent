import React, { useState } from 'react';
import { 
  Typography, 
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import  Header  from '../components/Header/Header';

import { 
  ContactWrapper,
  ContactContainer,
  ImageSection,
  FormSection,
  StyledPaper,
  StyledTextField,
  PageTitle
} from './Contact/styles';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header />
      <ContactWrapper>
        <ContactContainer maxWidth="lg">
          <ImageSection>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src="images/undraw_contact_us_re_4qqt.svg" alt="Contact Us" />
            </motion.div>
          </ImageSection>
          
          <FormSection>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <PageTitle>
                <Typography variant="h3">
                  Get in Touch
                </Typography>
                <Typography>
                  Have questions? We'd love to hear from you. Send us a message
                  and we'll respond as soon as possible.
                </Typography>
              </PageTitle>

              <StyledPaper elevation={0}>
                <form onSubmit={handleSubmit}>
                  <StyledTextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    margin="normal"
                  />
                  <StyledTextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    margin="normal"
                  />
                  <StyledTextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    margin="normal"
                  />
                  <StyledTextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    margin="normal"
                  />
                  <Button 
                    type="submit" 
                    variant="contained" 
                    size="large"
                    fullWidth
                    sx={{ 
                      mt: 3,
                      mb: 2,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 2,
                      textTransform: 'none',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      '&:hover': {
                        boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </StyledPaper>
            </motion.div>
          </FormSection>
        </ContactContainer>
      </ContactWrapper>
    </>
  );
};