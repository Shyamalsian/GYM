import React from 'react'
import { Link } from 'react-router-dom'
import { Stack,Button,Typography } from '@mui/material'
const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} loading='lazy'/>
        <Stack direction='row'>

            <Button  sx={{ml:'21px',color:"#fff",background:'#ffa9a9', fontSize:'20px', borderRadius:'20px' , textTransform:'capitalize'}}>
                {exercise.bodyPart}
            </Button>

            <Button  sx={{ml:'21px',color:"#fff",background:'#fcc757', fontSize:'20px', borderRadius:'20px' , textTransform:'capitalize'}}>
                {exercise.target}
            </Button>
            
        </Stack>
        <Typography color='black' sx={{ml:'21px',ontWeight:'700',textTransform:'capitalize'}} fontWeight='bold' mt='10px' fontSize='20px'>
            <p>{exercise.name}</p>
        </Typography>
    </Link>
  )
}

export default ExerciseCard