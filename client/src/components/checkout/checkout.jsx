import React, { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import TutorCard from "../TutorCard/TutorCard";



const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Checkout() {
  const tutorInfo = [];
 
  tutorInfo.push(JSON.parse(localStorage.getItem("pickedTutor")))

  const [message, setMessage] = useState("");



  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    
    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <section>
  <Grid  container direction="row" justifyContent="center"   spacing={0}  >
  <TutorCard tutorInfo={tutorInfo} checkout={true} />
</Grid>
  <Grid>
  <Grid  container direction="row" justifyContent="center"  spacing={0}  >
    <item className="product">
      <img
        width={"150rem"} 
        height={"150rem"}
        src="https://i.imgur.com/VoaHbT8.png"
        alt="The cover of Stubborn Attachments"
      />
      
    </item>
    </Grid>
    <Grid  container direction="row" justifyContent="center" >
    <item className="product">
    <div className="description">
      <h3>Tutor Session</h3>
      <h5>$24.99</h5>
      </div>
    
    <form action="/create-checkout-session" method="POST">
      <Button 
      type="submit"
      sx={{ cursor: "pointer", color: "#4F2683"}}
      variant="outlined"
      >
        Checkout
      </Button>
    </form>
    </item>
    </Grid>
    </Grid>
  </section>
  );
}