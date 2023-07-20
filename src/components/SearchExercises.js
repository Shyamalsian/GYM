import React, { useState, useEffect } from 'react'
import { Box, Typography, Button, Stack, TextField } from '@mui/material'
import { exerciseOption, fetchData } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'


const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {

  const [search, setSearch] = useState('')
  // const [exercises, setExercises] = useState([])
  const [bodyParts, setBodyParts] = useState([])

  useEffect(async () => {
    const fetchExercises = async () => {
      let bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOption)

      setBodyParts(bodyPartsData)
      console.log(bodyParts)
      console.log(bodyPartsData)
    }

    fetchExercises()
  }, [])


  const handleSearch = async () => {

    if (search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/', exerciseOption)

      console.log("Data:",exerciseData)
      const searchedExercises = exerciseData.filter((exercise) => 
        exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search)

      )
      console.log("searchedExercises",searchedExercises)
      setSearch("")
      setExercises(searchedExercises)
    }
  }
  return (
    <Stack alignItems='center' justifyContent='center' mt='30px' p='20px'>
      <Typography fontWeight='700'
        sx={{ fontSize: { lg: '44px', sm: '20px' } }} textAlign='center' mb='30px'>
        Awesome Exercises You <br />Should Know
      </Typography>
      <Box position='relative'>
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '5px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height='70px'
          value={search}
          onChange={(e) =>
            setSearch(e.target.value.toLowerCase())
          }
          placeholder='Search Exercises'
          type='text' />
        <Button className='search-btn'
          sx={{
            bgcolor: '#FF2625', color: '#FFF', textTransform: 'none',
            width: { lg: '250px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute'
          }}
          onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollBar width='100%' p='0px' data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart={true}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises