import React from 'react';
import moment from 'moment/moment';
import { Stack,Card,CardHeader,CardContent,Box } from '@mui/material';


const PaymentProcessed = () => {

  const tutorInfo = [];
  tutorInfo.push(JSON.parse(localStorage.getItem("pickedTutor")));
  console.log(tutorInfo);

  const theDate = localStorage.getItem("pickedDate");

  const theTime = localStorage.getItem("pickedTime");
  
  
  console.log(theTime);
  return (
    <Box 
    id="box"
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
    <Stack sx={{
      width: "30rem",
      height: "auto",
      padding: 1,
      margin: 1,
      boxShadow: "3",
      border: 1,
      borderColor: "#4F2683",
      alignItems: "center"
    }}>
       <Card
        
        class="card"
         
          sx={{
            width: "30rem",
            height: "auto",
            padding: 1,
            margin: 1,
            boxShadow: "3",
            border: 1,
            borderColor: "#4F2683",
          }}
        >
          <CardHeader
            subheader="Invoice"
            subheaderTypographyProps={{ color: "white" }}
            
            sx={{
              backgroundColor: "#4F2683",
              marginBottom: 1,
              color: "white",
            }}
          />
      <CardContent>Order placed! You will receive an email confirmation.</CardContent>
      <CardContent>You have a tutor session with {tutorInfo[0].tutorName} on {moment(theDate).format("MM/DD/YYYY")} {moment(theTime, 'HH:mm').format('hh:mm a')}</CardContent>   
      <CardContent>The Tutor will provide a link to your live video chat the day of the session. Thank you for using Logic Lounge for your learning needs.</CardContent>
      </Card>
    </Stack>
    </Box>
  );
};

export default PaymentProcessed;