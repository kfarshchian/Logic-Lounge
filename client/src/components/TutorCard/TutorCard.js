import React from "react";
import { Card } from "@mui/material";

const TutorCard = (props) => {
    const {tutorInfo} = props;
    console.log(tutorInfo);
  return (
    <Card sx={{ maxWidth: 345 }}>
    <div className="my-2">
        <div className="flex-row">
          {tutorInfo?.map((product, index) => (
            <div key={index}>
              <div>
                <h3>Name:</h3>
                {product[0].tutorName}
                <h3>About me:</h3>
                {product[0].bio}
                <h3>skills:</h3>
                <ul>
                  {product[0].skills.map(skill => <li>{skill}</li>)}
                </ul>
                <img src={product.image} alt={`${product[0].tutorName}`} />
              </div>
            </div>
          ))}
          {/* <p>pop out</p> */}
        </div>
    </div>
    </Card>
  );
};

export default TutorCard;
