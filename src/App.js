import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button'; 
import Navbar from './components/Navbar';
import Mycard from './Mycard';
import { getMatches,getUpcomingMatches, getNews } from './api/Api';
import React,{ Fragment, useEffect, useState } from "react"; 
import { Container, Grid } from '@mui/material';
import { AppBar, Toolbar, Typography } from "@mui/material";

import Mycard2 from './Mycard2';
 
function  App(){
  const[news,setNews]=useState([])
  const [showNewsContent,setShowNewsContent]=useState(true)
  const [matches, setMatches] = useState([]);
  const [upcomingMatches, setupcomingMatches] =useState(true)
const [nextMatch, setNextMatch] = useState([]);
const showUpcomingMatches=()=>{
    setupcomingMatches(false)
}

const DisplayNews=()=>{
  setShowNewsContent(false)
}
const showLiveMatches=()=>{
    setupcomingMatches(true)
    setShowNewsContent(true)
}
     useEffect(() => {
       getMatches()
           .then((data) =>{
            console.log(data);
            setMatches(data.data)
           })
           .catch((error) => {});
         
     
     }, []);

     useEffect(() => {
      getUpcomingMatches()
          .then((data) =>{
           console.log("upcomingMatches",data);
          setNextMatch(data.data)
          })
          .catch((error) => {});
        
    
    }, []);


    useEffect(() => {
      getNews()
          .then((data) =>{
           console.log("News",data);
          setNews(data.articles)
          })
          .catch((error) => {});
        
    
    }, []);

     
  return (
    <div className="App">
      <AppBar position="static">
            <Toolbar>
                 
                <Typography variant="h1">Scorefy</Typography>

                
                {/* <div className="center" onClick={showUpcomingMatches}  >
                    Upcoming Matches

                </div> */}
                {/* <div  style={{style : "text-align:center;"}} onClick={DisplayNews}  >
                    News
                </div> */}
                
            </Toolbar>

            {/* <div className="center" onClick={showUpcomingMatches}  >
                    Upcoming Matches
            </div> */}
            <div>
            <Button  onClick={showUpcomingMatches}  variant="contained" color="primary" autoFocus>Upcoming Matches</Button>
            </div>
        </AppBar>
       <h1></h1> 
       
       <Container>
        {
            showNewsContent ? <Grid container>
            <Grid item xs={12}>
              
  {            upcomingMatches?
              
              
              
             <>
             
            { matches && matches.map((match,i) => (
                <Fragment>
                  {
                     
  
                    <Mycard key={i}  nextmatch="true" match={match}></Mycard>
                  }
                </Fragment> 
                
              ))}</>
              
              :
              <>{ nextMatch && nextMatch.map((match,i) => (
                <Fragment>
                  {
                     
  
                    <Mycard2 key={i}  match={match}></Mycard2>
  
                    
                  }
                </Fragment> 
                
              ))
              
              }
              {/* <div onClick={showLiveMatches} >
                  Back
              </div> */}

              <div>
              <Button  onClick={showLiveMatches}  variant="contained" color="primary" autoFocus>Back</Button>
              </div>
              </>}
            </Grid>
          </Grid>:
<>
{ news && news?.map((newsdetail,i) => (
        <Fragment>
          {
             
            <News key={i}  news={newsdetail}></News>
            
          }
        </Fragment> 
        
      ))}
          {/* <div onClick={showLiveMatches} color='primary'> */}
                  <div>
                  <Button  onClick={showLiveMatches}  variant="contained" color="primary" autoFocus>Back</Button>
                  </div>

</>
        }
        
      </Container>
            </div>
  );
} 

export default App;