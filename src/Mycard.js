import react, { Fragment, useEffect, useImperativeHandle, useState } from "react";
import   Card from '@mui/material/Card';
import { Button, CardActions, CardContent, Dialog, DialogActions, DialogContentText, Grid, Typography } from "@mui/material";
import { getMatchDetails } from "./api/Api";
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
const Mycard =({ match,nextmatch }) => {

    const[detail,setDetail]=useState({});
    const [open,setOpen]=useState(false);
    const [nextMatchDisplay,setNextMatchDisplay]=useState(nextmatch);
    useEffect(()=>{
        console.log("match",match)
    },[])
    const handleClick=(id)=>{
        
        getMatchDetails(id)
        .then((data) => {console.log("MATCHDATA",data)
      setDetail(data);
      handleOpen();
       
    })
        .catch((error)=> console.log(error));
    };

     const getMatchcard=()=>{
        return(
            <Card style={{marginTop:20}}>
                {
                    nextMatchDisplay ? 
                    <CardContent>
                 <Grid container justifyContent={"center"}  alignItems={"center"} spacing={4}>
                    <Grid item >
                        <Typography>{match.teams[0]}</Typography>
                    </Grid>
                    <Grid item>
                        <img style={{width: 85}} src="./images/vs.png"></img>
                 </Grid>
                    <Grid item>
                        <Typography >{match.teams[1]}</Typography>
                    </Grid>
                 </Grid>

                </CardContent> :
                <CardContent>
                <Grid container justifyContent={"center"}  alignItems={"center"} spacing={4}>
                   <Grid item >
                       <Typography>{match.t1}</Typography>
                   </Grid>
                   <Grid item>
                       <img style={{width: 85}} src="./images/vs.png"></img>
                </Grid>
                   <Grid item>
                       <Typography >{match.t2}</Typography>
                   </Grid>
                </Grid>

               </CardContent>
                }
              { 
              nextMatchDisplay ? 
              <CardActions>
                     <Grid container justifyContent={"center"}> 
                     <Button onClick={() =>{
                        handleClick(match.id); 
                     }} variant="contained">
                       Show Details
                    </Button>
                    <Button style={{marginLeft:5}} variant="contained">
                       Match Date {(match.date).toLocaleString()}
                    </Button>
                     </Grid>
                </CardActions>
            :""    
            }
                  
            </Card>
        );
     };

     const handleOpen=()=>{
        setOpen(true);
     }


     const handleClose=()=>{
        setOpen(false);

     }

     const getDialog=()=>(
        <Dialog open={open}onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">{"match Details.."}</DialogTitle>
          { nextMatchDisplay ? <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography>{detail.stat}</Typography>
                    <Typography>
                        Match status : <span style={{fontStyle:"italic",fontWeight:"bold"}}>
                            {match.status? match.status: "still not started"}</span>

                    </Typography>
                    <Typography>Score: <span style={{fontStyle:"italic",fontWeight:"bold"}}>
                       
                       {
                        match.score&&match.score.map((score,i)=>(

                            <div key={i}> <p>
                                RUNS : {score.r}</p>
                                <p>
                                WICKETS :  {score.w}</p>
                                <p>
                                OVER : {score.o}</p>
                                <p>
                                inning : {score.inning}</p>
                                </div>
                        ))
                       }
                        {console.log("match score",match.score)}</span></Typography>
                        <Typography>Venue :<span style={{fontStyle:"italic",fontWeight:"bold"}}>
                            {match.venue}</span></Typography>
                            
                </DialogContentText>
            </DialogContent>
        :
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
             
            <Typography>
                Match status : <span style={{fontStyle:"italic",fontWeight:"bold"}}>
                    {match.status? match.status: "still not started"}</span>
            </Typography>
            <Typography>
            <p>
                {
                    match.t0
                }
            </p>
            <p>
                {
                    match.t1
                }
            </p>
            <p>
               <img src={match.t0img} alt="" />
            </p>
            <p>
               <img src={match.t1img} alt="" />
            </p>

            </Typography>
                
                    
        </DialogContentText>
    </DialogContent>    
        }
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>Close</Button>
            </DialogActions>
        </Dialog>
     );

     return  <Fragment>
        {getMatchcard()}
        {getDialog()}
         
     </Fragment>



    
};
export default Mycard;