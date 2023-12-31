import React from 'react'
import { Stack,Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'
const BodyPart = ({item,bodyPart,setBodyPart}) => {
  return (
    <Stack 
    type="button" alignItems="center" justifyContent="center"  className='bodyPart-card' 
    sx={
        bodyPart===item?{
            borderTop:'4px solif #ff2625',
            backgroundColor:'#fff',
            borderBottomLeftRadius:'20px',
            width:'270px',
            height:'280px',
            cursor:'pointer'
        }:{
            backgroundColor:'#fff',
            borderBottomLeftRadius:'20px',
            width:'270px',
            height:'280px',
            cursor:'pointer'
        }
    }
    onClick={()=>{
      setBodyPart(item)
      window.scrollTo({top:1800,left:100,behavior:'smooth'})
    }}>
        <img src={Icon} alt="dumbell" style={{width:'40px', height:'40px'}} />
        <Typography sx={{fontSize:'24px', mt:'15px', textTransform:'capitalize'}}>{item}</Typography>
    </Stack>
  )
}

export default BodyPart