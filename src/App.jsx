import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import MenuComponent from "./components/MenuComponent/MenuComponent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import avatar from "../src/images/images.jpg";
import { deepOrange } from "@mui/material/colors";
import useWindowSize from "./hooks/useWindowSize";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import ListItemText from "@mui/material/ListItemText";

import IconButton from "@mui/material/IconButton";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const [postValue, setPostValue] = React.useState("");

  const windowSize = useWindowSize();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <Header toggleDrawer={toggleDrawer} />
      <MobileMenu toggleDrawer={toggleDrawer} open={open} />
      <Grid container spacing={2}>
        <Grid item xs={2} sx={{ display: { xs: "none", md: "block" } }}>
          <Box>
            <MenuComponent />
          </Box>
        </Grid>
        <Grid item xs={windowSize < 900 ? 12 : 10}>
          <Box sx={{ p: 2, bgcolor: deepOrange[100] }}>
            <Stack direction="row" spacing={3}>
              <Avatar alt="Cat" src={avatar} sx={{ height: "90px", width: "90px" }} />
              <Stack>
                <Typography component="p">Захарова Мария</Typography>
                <Typography component="p">Date of Birth: 6.09.1994</Typography>
                <Typography component="p">City: Ulyanovsk</Typography>
                <Typography component="p">Education: "УлГТУ"</Typography>
              </Stack>
            </Stack>
            <Typography mt={2} variant="h6" component="h2">
              My posts
            </Typography>
            <Box
              sx={{
                width: 600,
                maxWidth: "100%",
              }}
            >
              <TextField
                id="filled-textarea"
                label="Your news"
                multiline
                variant="filled"
                fullWidth
                value={postValue}
                onChange={(e) => {
                  setPostValue(e.target.value);
                }}
              />
              <Box mt={2} sx={{ textAlign: "end" }}>
                <Button variant="contained">Send</Button>
              </Box>
              <List>
                {generate(
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar alt="Cat" src={avatar} />
                    </ListItemAvatar>
                    <ListItemText primary="Мария З." secondary="Secondary text" />
                  </ListItem>
                )}
              </List>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
