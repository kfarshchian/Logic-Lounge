import { Button } from '@mui/material';
import React from 'react'
import { useEffect, useRef } from 'react'
// import { useMutation } from '@apollo/client';
require('dotenv').config()

export const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
          {
            cloudName: process.env.REACT_APP_CLOUD_NAME,
            uploadPreset: process.env.REACT_APP_CLOUDPRESET,
          },
          function (error, result) {
            console.log(result);
          }
        );
    }, [])
  return (
    <>
    <Button onClick={() => widgetRef.current.open()}>
        Upload</Button>
        </>
  )
}
