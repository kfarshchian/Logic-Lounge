import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {
  FormControl,
  OutlinedInput,
  Checkbox,
  InputLabel,
  Select,
  ListItemText,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { QUERY_SINGLE_USER } from "../utils/queries";
import { UPDATE_USER } from "../utils/mutations"
// import { QUERY_SINGLE_USER } from "../utils/queries"

// import Auth from "../utils/auth";

const ProfileBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: theme.spacing(2),
}));

const MatchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  height: "200px",
  width: "50%",
  borderRadius: "20px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  margin: theme.spacing(1),
  backgroundColor: "#4F2683 ",
  border: "5px solid white",
}));

const MatchImage = styled(Avatar)(({ theme }) => ({
  width: "80px",
  height: "80px",
  margin: theme.spacing(2),
}));

function Profile() {
  const { userId } = useParams();
  // console.log(userId);
  const { loading, error, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { _id: userId },
  }); // fetch the user data using GraphQL query and user ID

  // console.log(data, loading, error);

  const [profilePicture, setProfilePicture] = useState({
    img: "",
  });

  const [editing, setEditing] = useState(false);
  const [updateUser] = useMutation(UPDATE_USER);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async(event) => {
    // save profile changes to database or API
    console.log(event)
    event.preventDefault();
    try {
      const { data } = await updateUser({
        variables: {...skill}
      });
      console.log(data, 'err')
    } catch (err) {console.error(err)}

    setEditing(false);
  };

  const [skill, setSkill] = useState([]);
  const skillChange = (event) => {
    const {
      target: { value },
    } = event;
    setSkill(typeof value === "string" ? value.split(",") : value);
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
    "HTML",
    "CSS",
    "React",
    "Linux",
    "LinkedIn",
    "Python",
    "MySQL",
    "MongoDB",
    "GoLang",
    "Algorithms & Data Structures",
  ];

  const user = data?.user || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Error loading user data.</div>;
  }

  const styles = {
    root: {
      backgroundColor: "#DDCDC6",
      flexGrow: 1,
      paddingTop: "18px",
      paddingBottom: "18px",
    },
    avatar: {
      width: "144px",
      height: "144px",
      margin: "16px",
      border: "5px solid white",
    },
    name: {
      fontWeight: "bold",
      marginBottom: "25px",
    },
    bio: {
      marginBottom: "25px",
    },
    interest: {
      marginBottom: "25px",
    },
    button: {
      margin: "8px",
      backgroundColor: "#4F2683 ",
    },
  };

  return (
    <div style={styles.root}>
      <Grid container spacing={10} justifyContent="flex=end">
        <Grid item xs={10} sm={4} md={3}>
          <ProfileBox>
            {/* <ImageUpload/> */}
            {/* Need to render profile img */}
            <Avatar style={styles.avatar} />
            <Typography variant="h6" style={styles.name}>
              {user.username}
            </Typography>
            <Typography variant="body1" style={styles.bio}>
              {user.skills}
            </Typography>
            {/* <Typography variant="body1" style={styles.interest}>
              Interest
            </Typography> */}
            {!editing ? (
              <Button
                variant="contained"
                color="primary"
                style={styles.button}
                onClick={handleEdit}
              >
                Edit Profile
              </Button>
            ) : (
              <>
                <TextField
                  type="file"
                  onChange={(event) => setProfilePicture(event.target.value)}
                  label=""
                  value={profilePicture.img}
                />
                {/* <TextField
                  label="Skills"
                  value={skills}
                  onChange={(event) => setSkills(event.target.value)}
                /> */}

                <FormControl margin="normal">
                  <InputLabel>Skills</InputLabel>
                  <Select
                    sx={{ minWidth: "15rem", maxWidth: "20rem" }}
                    multiple
                    id="selection"
                    value={skill}
                    onChange={skillChange}
                    input={<OutlinedInput label="Skill" />}
                    renderValue={(selected) => selected.join(",")}
                    MenuProps={MenuProps}
                  >
                    {skills.map((newSkill) => (
                      <MenuItem key={newSkill} value={newSkill}>
                        <Checkbox checked={skill.indexOf(newSkill) > -1} />
                        <ListItemText primary={newSkill} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button onClick={handleSave}>Save Profile</Button>
              </>
            )}
          </ProfileBox>
        </Grid>
        {/* {matches.length > 0 && ( */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h4" gutterBottom>
            Matches
          </Typography>
          <Stack direction="column" justifyContent="center">
            {/* {matches.map(match => ( */}
            <MatchBox>
              <MatchImage />
              <Typography variant="h6" gutterBottom>
                Match Name
              </Typography>
              <Typography variant="body1">Match Bio</Typography>
            </MatchBox>
            {/* <MatchBox>
              <MatchImage />
              <Typography variant="h6" gutterBottom>
                Match Name
              </Typography>
              <Typography variant="body1">Match Bio</Typography>
            </MatchBox>
            <MatchBox>
              <MatchImage />
              <Typography variant="h6" gutterBottom>
                Match Name
              </Typography>
              <Typography variant="body1">Match Bio</Typography>
            </MatchBox> */}
            {/* ))} */}
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
