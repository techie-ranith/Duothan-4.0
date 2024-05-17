"use client"
import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import { useState } from 'react';


export default function Signin () {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');



  const handleSubmit = async (e:any) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/authsignup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstname, lastname, email, password })
      });
      if (response.ok) {
       console.log('Response: logeed');
        const form = e.target;
        form.reset();

        
      } else {
        const result = await response.json();
        setError(result.message || 'Sign up failed for an unknown reason');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Sign up failed: Network error');
    }
  


  }
  
  

   

  return (
    <>
      
    
      <Box
        
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100dvh',
            width: '100%',
            px: 2,
          }}
        >
          <Box
            component="header"
            sx={{
              py: 3,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            
          </Box>

            
          <Box
            component="main"
            sx={{
              my: 'auto',
              py: 2,
              pb: 5,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: 400,
              maxWidth: '100%',
              mx: 'auto',
              borderRadius: 'sm',
              '& form': {
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              },
              [`& .MuiFormLabel-asterisk`]: {
                visibility: 'hidden',
              },
            }}
          >
            <Stack gap={4} sx={{ mb: 2 }}>
              <Stack gap={1}>
                <div className=' text-[40px]  align w-full  text-center pb-10 font-bold'>
                Update User Profile
                </div>
              </Stack>
            </Stack>
            <Stack gap={4} sx={{ mt: 2 }}>
              <form onSubmit={handleSubmit}
                 
              >


                <FormControl required>
                  <FormLabel>New Email</FormLabel>
                  <Input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} />
                </FormControl>
                <FormControl required>
                  <FormLabel>New Password</FormLabel>
                  <Input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
                </FormControl>
                {error && <Typography color="danger" sx={{ mt: 1 }}>{error}</Typography>}
                <Stack gap={4} sx={{ mt: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                  </Box>
                  <Button type="submit" fullWidth>
                    Update
                  </Button>
                </Stack>
                
              </form>
            </Stack>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
          </Box>
        </Box>
      </Box>
     </>
  );
}