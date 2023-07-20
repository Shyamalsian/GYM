export const exerciseOption = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b9f7eb2b65msh8c2c50cd9fc5b84p190f87jsneed8c969f509',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}
export const youtubeOptions = {
  method: 'GET',
   
  headers: {
    'X-RapidAPI-Key': 'b9f7eb2b65msh8c2c50cd9fc5b84p190f87jsneed8c969f509',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
export const fetchData = async(url,options)=>{
    const response = await fetch(url,options)
    const data = await response.json()

    return data;
}