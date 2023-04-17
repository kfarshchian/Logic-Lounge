import React from "react";
import { Button, Stack, TextField} from "@mui/material";
import TutorCard from "../TutorCard/TutorCard";


export default function Checkout() {
  
  const tutorInfo = [];
  tutorInfo.push(JSON.parse(localStorage.getItem("pickedTutor")))

  

  const dateClick = e => {
    let theDate = e.target.value;
    console.log(theDate);
    localStorage.setItem("pickedDate", [theDate])
  }
  const timeClick = e => {
    let theTime = e.target.value;
    console.log(theTime);
    localStorage.setItem("pickedTime", [theTime])
  }

  return (
  
    <section>
      <Stack direction={{ xs: 'column', sm: 'row'}}
  spacing={{ xs: 1, sm: 2, md: 4 }} 
  
  >
     


<TutorCard tutorInfo={tutorInfo} checkout={true} />

<div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content'
    }}>
      <h3>What day would you like to learn?</h3>
      <TextField
        label="Choose Date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={dateClick}
      />
      <TextField
        label="Choose Time"
        defaultValue="12:00"
        type="time"
        InputLabelProps={{
          shrink: true,
        }}
        // 5 minutes
        inputProps={{
          step: 300,
        }}
        onChange={timeClick}
      />
    <div className="description">
    <img
      width={"150rem"} 
      height={"150rem"}
      src="https://i.imgur.com/VoaHbT8.png"
      alt="The cover of Stubborn Attachments"
    />
    
    <h3>Tutor Session</h3>
    <h5>$24.99</h5>
    
  
  <form action="/create-checkout-session" method="POST">
    <Button 
    type="submit"
    sx={{ cursor: "pointer", color: "#4F2683"}}
    variant="outlined"
    >
      Checkout
    </Button>
    
  </form>
  </div>
  </div>
</Stack>
</section>
  );
}