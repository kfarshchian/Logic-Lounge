import React from 'react'
import { useState } from "react";
import { 
  FormControl, 
  Typography, 
  Box,
  Button, 
  Select, 
  InputLabel,
  Checkbox,
  MenuItem,
  OutlinedInput,
  ListItemText,
 } from '@mui/material';
//  import { MATCH_TUTOR } from '../utils//mutations';


const Match = () => {
  
  const [skill, setSkill] = useState([]);
  const skillChange = (event) => {
    const {
      target: { value },
    } = event;
    setSkill(typeof value === 'string' ? value.split(',') : value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(event);

    // try {
    //   const { event } = await MATCH_TUTOR({
    //     variables: { ...skills },
    //   });

    // } catch (e) {
    //   console.error(e);
    // }
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const skills = [
      "JavaScript",
      "Git",
      "Golang",
      "Ruby on Rails",
      "Github",
      "Heroku",
      "Node.js",
      "SEO",
      "Responsive Design",
      "API/JSON",
      "RESTful API",
      "HTML5",
      "CSS3",
      "jQuery",
      "Bootstrap",
      "Firebase",
      "Node.js",
      "MySQL",
      "MongoDB",
      "Express.js",
      "Handlebars.js",
      "NoSQL",
  ];

  return (
    <div className="example">
      <div className="controls">
       {/* <form onSubmit={this.handleSubmit}> */}
       <Box
       id="box"
       sx={{
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
        }}
        >
          <Typography variant='h6'
              sx={{ 
                color: '#4F2683',
                margin: 1,
                textAlign: "center",
              }}>Choose Your Flavor</Typography>
              <FormControl
                onSubmit={handleFormSubmit}
              sx={{ 
                border: 1,
                padding: 6,
                color: '#4F2683',
                borderRadius: 11,
                boxShadow: '3',
                margin: 1,
              }}
              >
            <InputLabel
            sx={{ 
                color: '#4F2683',
                borderBlockColor: '#4F2683',
                padding: 6,
                borderRadius: 11,
                margin: 1,
              }}>Skills</InputLabel>
                  <Select
                    sx={{ minWidth: '15rem', maxWidth: '20rem', marginTop: 1, marginBottom: 1, color: '#4F2683', }}
                    multiple
                    id='selection'
                    value={skill}
                    onChange={skillChange}
                    input={<OutlinedInput/>}
                    renderValue={(selected) => selected.join(',')}
                    MenuProps={MenuProps}
                    >
                    {skills.map((newSkill, idx) => (
                      <MenuItem key={newSkill.id} value={newSkill}>
                        <Checkbox checked={skill.indexOf(newSkill) > -1} />
                        <ListItemText primary={newSkill} />
                      </MenuItem>
                    ))}
                    </Select>
        {/* <Input type="submit" value="Match Tutor" /> */}
        <Button
                  color='secondary'
                  sx={{ cursor: 'pointer', color: '#4F2683' }}
                  type='submit'
                  variant='outlined'
                  >
                  Match Tutor
                </Button>
       </FormControl> 
       </Box>
      </div>
    </div>
  )
}

export default Match;