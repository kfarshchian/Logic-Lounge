import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Button
} from "@mui/material";
import './style.scss';


const TutorCard = (props) => {
  const { tutorInfo } = props;


  const handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
  

  }

  return (

      <div class="scrolling-wrapper">
      {tutorInfo?.map((product, index) => (
        <Card
        
        class="card"
          key={index}
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
            subheader="Tutor"
            subheaderTypographyProps={{ color: "white" }}
            title={product.tutorName}
            sx={{
              backgroundColor: "#4F2683",
              marginBottom: 1,
              color: "white",
            }}
          />
          <CardMedia
            component="img"
            sx={{
              width: "15vp",
              height: "15rem",
              justifyContent: "center",
              objectFit: "scale-down"
            }}
            image={product.image}
            alt={`${product.tutorName}`}
          />
          <CardContent >
            <div class='aboutMe'>
              <h3>About me:</h3>
              <p>{product.bio}</p>
              </div>
            <h3>skills:</h3>
            <ul>
              {product.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </CardContent>
          <Button
          onClick={handleClick}
          color='secondary'
          sx={{ cursor: 'pointer', color: '#4F2683' }}
          type=''
          value=''
          variant='outlined'
          >Buy A Coffee</Button>
        </Card>
      ))}
      </div>

  );
};

export default TutorCard;
