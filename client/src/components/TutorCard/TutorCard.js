import React from "react";
import { Card } from "@mui/material";

const TutorCard = (props) => {
    const {tutorInfo} = props;
  console.log(tutorInfo);
  return (
    <>
    {tutorInfo?.map((product, index) => (
    <Card key={index} sx={{ maxWidth: 345 }}>
      <div className="my-2">
          <div className="flex-row">
                <div>
                  <h3>Name:</h3>
                  {product.tutorName}
                  <h3>About me:</h3>
                  {product.bio}
                  <h3>skills:</h3>
                  <ul>
                    {product.skills.map((skill, index) => <li key={index}>{skill}</li>)}
                  </ul>
                  <img src={product.image} alt={`${product.tutorName}`} />
                </div>
          </div>
      </div>
    </Card>
            ))}
            </>
  );
};

export default TutorCard;
