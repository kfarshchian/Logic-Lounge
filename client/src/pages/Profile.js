import React from "react";
// import { useEffect } from "react";
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
import { UPDATE_USER } from "../utils/mutations";
import { QUERY_SKILLS } from "../utils/queries";
// import { MATCH_TUTOR } from "../utils/queries.js";
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
  const { loading, error, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { _id: userId },
  }); // fetch the user data using GraphQL query and user ID
  // const { data: skillData } = useQuery(QUERY_SKILLS);
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormState({ ...formState, [name]: value });
  // };
  // console.log(userId);

  const [profilePicture, setProfilePicture] = useState({
    img: "",
  });

  const [formState, setFormState] = useState({ skills: [] });
  // console.log(formState);

  const [editing, setEditing] = useState(false);
  const [updateUser] = useMutation(UPDATE_USER);

  const handleEdit = () => {
    setEditing(true);
  };
  // const handleSave = async (event) => {
  //   // save profile changes to database or API
  //   console.log(data.user._id);
  //   // console.log(skill);
  //   event.preventDefault();

  //   const userId = data.user._id;
  //   try {
  //     const { skillData } = await updateUser({
  //       variables: { userId, skillData },
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }

  const { data: skillData } = useQuery(QUERY_SKILLS);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await updateUser({
        variables: { skills: formState.skills, userId: userId },
      });
    } catch (e) {
      console.error(e);
    }

    setEditing(false);
  };

  // const { tutorInfo } = useParams();
  // const [tutors, setTutors] = useState([]);

  // const { tutorData } = useQuery(MATCH_TUTOR, {
  //   variables: { _id: tutorsInfo },
  // });

  // useEffect(() => {

    // fetch tutor data from database using subject as parameter
    // set the fetched data to the tutors state variable using setTutors

  // }, [tutorInfo]);

  // const tutor = tutorData?.tutor || tutorData?.tutor || {};
  // const [tutorInfo, setTutorInfo] = useState();
  //query all tutors
  // const { tutors } = useQuery(MATCH_TUTOR);
  //Submit function for checkbox

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

  const user = data?.user || data?.user || {};
  console.log(user);

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
            <Avatar style={styles.avatar} img={user.img} />
            <Typography variant="h6" style={styles.name}>
              {user.username}
            </Typography>
            <Typography variant="body1" style={styles.bio}>
              No skills have been added
              {/* map over skills */}
            </Typography>

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
                <form>
                  <FormControl margin="normal" onSubmit={handleFormSubmit}>
                    <InputLabel>Skills</InputLabel>
                    <Select
                      sx={{ minWidth: "15rem", maxWidth: "20rem" }}
                      multiple
                      id="selection"
                      name="skills"
                      value={formState.skills}
                      onChange={handleChange}
                      input={<OutlinedInput label="Skill" />}
                      renderValue={(selected) => selected.join(",")}
                      MenuProps={MenuProps}
                    >
                      {/* This will render skills dynamically from database */}
                      {skillData
                        ? skillData.skills.map((skill) => (
                            <MenuItem key={skill._id} value={skill.skillName}>
                              <Checkbox
                                checked={
                                  formState.skills.indexOf(skill.skillName) > -1
                                }
                              />
                              <ListItemText primary={skill.skillName} />
                            </MenuItem>
                          ))
                        : "No skills available a this time..."}
                    </Select>
                  </FormControl>
                  <Button type="submit">Save Profile</Button>
                </form>
              </>
            )}
          </ProfileBox>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h4" gutterBottom>
            Matches
          </Typography>
          {/* {tutorInfo?.map((tutors) => ( */}
          <Stack direction="column" justifyContent="center">
            <MatchBox>
              <MatchImage
              //  image={tutor.image} alt={`${tutor.tutorName}`} 
               />
              <Typography variant="h6" gutterBottom>
                {/* {tutor.tutorName} */}
              </Typography>
              <Typography variant="body1">
                {/* {tutor.bio} */}
                </Typography>
            </MatchBox>
          </Stack>
          {/* ))} */}
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
