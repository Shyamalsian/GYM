import React from 'react'
import { Stack, Typography, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import Target from '../assets/icons/target.png'
import Equipment from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail
  // const capitalizeWords = (str) => {
  //   return str
  //     .toLowerCase()
  //     .split(' ')
  //     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //     .join(' ');
  // };
  // console.log("url:",gifUrl)

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart
    }, {
      icon: Target,
      name: target
    }, {
      icon: Equipment,
      name: equipment
    }
  ]

  return (
    <Stack gap='60px' sx={{
      flexDirection: {
        lg: 'row'
      }, p: '20px', alignItems: 'center'
    }}>
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack sx={{ gap: { lg: '60px', xs: '20px' } }}>
        <Typography variant='h3'>
          {(name)}
        </Typography>
        <Typography>
          Exercises keep you strong.{' '}<br />
          <span style={{ textTransform: 'capitalize' }}>{name}</span>  is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>
        <Typography>
          {extraDetail.map((item) => (
            <Stack key={item.name} direction="row" alignItems="center">
              <Button sx={{background:'#fff2db' ,borderRadius:'50%', mb:'15px'}}>
                <img src={item.icon} alt="" />
              </Button>
              <Typography textTransform='capitalize' ml='10px' variant='h5'>
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Typography>

      </Stack>
    </Stack>
  )
}

export default Detail