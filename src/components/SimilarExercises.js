import React from 'react'
import { Box,Typography,Stack } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  console.log("similar",targetMuscleExercises)
  return (
    <Box>
      <Typography variant='h4' mt='100px'>
        Exercises that target the same muscle group
      </Typography>
      <Stack>
        {targetMuscleExercises.length>0?<HorizontalScrollBar data={targetMuscleExercises}/>:<Loader/>}
         
      </Stack><Typography variant='h4' mt='100px'>
        Exercises that target the same muscle group
      </Typography>
      <Stack>
        {targetMuscleExercises.length>0?<HorizontalScrollBar data={targetMuscleExercises}/>:<Loader/>}
         
      </Stack>
    </Box>
  )
}

export default SimilarExercises