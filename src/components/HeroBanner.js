import React from 'react'
import { Box,Button,Stack,Typography } from '@mui/material'
import banner from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:'212px', xs:'70px'},
        ml:{sm:'50px'}
    }} position='relative' p='20px'>
        <Typography color='red' fontSize='40px'
        fontWeight='600'>
            Fitness Club
        </Typography>

        <Typography fontWeight='700'
        sx={{fontSize:{lg:'44px',xs:'40px'}}}>
            Sweat, Smile <br/> and Repeat
        </Typography>

        <Typography fontSize='22px' lineHeight='35px' mb='20px'>
            Check out the most efficient exercises
        </Typography>
        <Button sx={{backgroundColor:'red', padding:'10px'}} variant='contained' color='error' href='#Exercises' fontWeight='700'>Explore Exercises</Button>

        <Typography fontWeight={600} fontSize='200px'
        sx={{opacity:0.1 ,
        display:{lg:'block' ,xs:'none'}}}>
            Exercise
        </Typography>

        <img src={banner} alt="banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner