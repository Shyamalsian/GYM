import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'
import { exerciseOption, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisePerPage = 9
  console.log("exercises ",exercises)
  // let data = [...exercises]

  const indexOfLastExercise = currentPage * exercisePerPage

  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage

  // exercises = string(exercises);
  const currentExercises = Array.from(exercises).slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: '1800px', behavious: 'smooth' })
  }
  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = []

      if (bodyPart === 'all') {
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOption)
      } else {
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOption)
      }

      setExercises(exerciseData)
    }
    fetchExerciseData()
  }, [bodyPart])
  console.log(exercises)
  return (
    <Box>
      <Typography variant='h3' mb='30px'>
        Showing Result
      </Typography>
      <Stack direction='row' flexWrap='wrap' justifyContent='center'
        sx={{ gap: { lg: '110px', sx: '50px' } }}>
        {currentExercises.map((exercise, index) => (
          <p> <ExerciseCard key={index} exercise={exercise} /></p>
        ))}
      </Stack>
      <Stack alignItems='center' mt='100px'>
        {exercises.length > 9 && (
          <Pagination color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.round(Math.ceil(exercises.length) / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large" />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises