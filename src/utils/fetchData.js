export const  exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/status',
    headers: {
    //   'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
      'x-rapidapi-key': 'ba971b91abmsh1f01e084875de30p1e4288jsn00b246f81db3',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'ba971b91abmsh1f01e084875de30p1e4288jsn00b246f81db3',
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url,options) =>{
 const response = await fetch(url,options);
 const data = await response.json();
 return data;
}