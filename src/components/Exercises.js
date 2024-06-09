import React,{useState,useEffect} from 'react';
import Pagination from '@mui/material';
import { Box,Stack,Typography } from '@mui/material';
import { fetchData,exerciseOptions } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({exercises,setExercises,bodyPart}) => {
  //console.log("Exercises component:", exercises); 
  //console.log("BodyPart:", bodyPart)
 

  useEffect(()=>{
    const fetchExercisesData = async() =>{
      let exercisesData = [];
      try {
        if (bodyPart === 'all' || bodyPart === '') {
          exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        } else {
          exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        }
        setExercises(exercisesData);
      } catch (error) {
        console.error('Error fetching exercises data:', error);
        setExercises([]); // In case of error, ensure exercises is an array
      }
      
      // if(bodyPart === "all"){
      //   const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises",exerciseOptions);
      //   setExercises(exercisesData);
      //   //console.log(exercisesData);
       
      // }
      // else{
      //   const exercisesData = await  fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions);
      //   setExercises(exercisesData);
      //   console.log(exercisesData);
      // }
    }
    fetchExercisesData();

  },[bodyPart,setExercises])

  if (!Array.isArray(exercises)) {
    return null; // Or render a loading state or an error message
  }
  return (
    <Box id="exercises"
    sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
     <Typography  fontWeight="600"  fontSize="35px" mb="46px" sx={{
     
      ml:{
        lg:"45px",
        sm:"45px"
      }
     }}>Showing Results</Typography>
     <Stack direction="row" sx={{ gap: { lg: '114px', xs: '70px' } }} flexWrap="wrap" justifyContent="center">
      {exercises.map((exercise, index) => (
      <ExerciseCard key={index} exercise={exercise}/>
      ))}
     </Stack>
    </Box>
  )
}

export default Exercises
