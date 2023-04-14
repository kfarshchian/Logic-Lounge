import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { QUERY_IMAGE } from '../../utils/queries';
import { useQuery } from '@apollo/client';

export const UserImage = () => {
  
  const {loading, error, data} = useQuery(QUERY_IMAGE);

  console.log(data)

  // Create a Cloudinary instance and set cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: `dxruhnouf`,
    },
  });

  // Instantiate a CloudinaryImage object for the image with the public ID
  const myImage = cld.image('Screen_Shot_2023-04-12_at_10.00.10_PM_jx3mr8');

  // Resize using the 'fill' crop mode.
  // myImage.resize(fill().width(550).height(1050));

  // Render the image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  );
};
