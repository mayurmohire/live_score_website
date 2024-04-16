import react, { Fragment, useImperativeHandle, useState } from "react";
import   Card from '@mui/material/Card';
import { Button, CardActions, CardContent, Dialog, DialogActions, DialogContentText, Grid, Typography } from "@mui/material";
import { getMatchDetails } from "./api/Api";
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
const Mycard2 =({ match }) => {

    const[detail,setDetail]=useState({});
    const [open,setOpen]=useState(false);
    const [nextMatchDisplay,setNextMatchDisplay]=useState(true);
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
              
              
              <CardActions>
                     <Grid container justifyContent={"center"}> 
                     <Button onClick={() =>{
                        handleClick(match.id); 
                     }} variant="contained">
                       Show Details
                    </Button>
                    <Button style={{marginLeft:5}} variant="contained">
                       Match Date {(match.dateTimeGMT)}
                    </Button>
                     
                     </Grid>
                </CardActions>
           
                  
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
          { 
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
 
            <Typography>
            <p>
                {
                    match.t1
                }
            </p>


            <p>
               <img src={match.t1img} alt="" />
            </p>
            <p>
                {
                    match.t2
                }
            </p>
            <p>
               <img src={match.t2img} alt="" />
            </p>

            <p>{match.status}</p>
             
             
            <p>{match.matchType}</p>
            <p>{match.series}</p>

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


export default Mycard2;