import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { fetchData,exerciseOptions ,youtubeOptions} from '../utils/fetchData';
import Detail from './Detail';
import ExerciseVideos from "./ExerciseVideos"
import SimilarExercises from './SimilarExercises';


const ExerciseDetail = () => {
  const {id} = useParams();
  const [exerciseDetail,setExerciseDetail] = useState({});
  const[exerciseVideos,setExerciseVideos] = useState([]);
 

  useEffect(() =>{
  const fetchExercisesData = async() =>{
    const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
    const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
    setExerciseDetail(exerciseDetailData);
       console.log("exerciseDetail.name:" ,exerciseDetail.name);

    const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions);
    setExerciseVideos(exerciseVideosData.contents);
    console.log("Exercise Videos:", exerciseVideos);

    }
    fetchExercisesData();
    },[id,exerciseDetail.name]);

    

  return (
    <div>
    <Detail exerciseDetail ={exerciseDetail} />
    <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
    <SimilarExercises/>
    </div>
  )
}

export default ExerciseDetail
