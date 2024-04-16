const API_KEY=`66f1934e-acbf-4ebd-86e3-6f0ec881551f
`
const NEWS_API=`8ba41e68fba2471f942e8523cc2a0eba`
export const getMatches=()=>{
    const url=`https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`

    return fetch(url)
       .then((response) => response.json())
       .catch((error) => console.log("ERROR :",error));
    
};

export const getMatchDetails=(id)=>{
    const url=`https://api.cricapi.com/v1/match_info?apikey=${API_KEY}&id=${id}`

    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("ERROR :",error));

};

export const getNews=()=>{
    const url=`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${NEWS_API}`

    return fetch(url)
    .then((response)=> response.json())
    .catch((error)=> console.log("ERROR :",error));
};

export const getUpcomingMatches=()=>{
    const url=`https://api.cricapi.com/v1/cricScore?apikey=${API_KEY}`
    
     

    return fetch(url)
    .then((response) => response.json())
    .catch((error)=> console.log("ERROR :",error));

};

