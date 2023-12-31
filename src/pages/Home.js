import React from 'react'
import {useState} from 'react'
import { Box } from '@mui/material'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'

function Home() {
  const [exercises, setExercises] = useState([])
  const [bodyPart,setBodyPart] = useState('all')
  console.log(bodyPart)
  console.log(exercises)
  return (
    <Box>
        <HeroBanner/>
        <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}/>
        
        <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
        />
    </Box>
  )
}

export default Home