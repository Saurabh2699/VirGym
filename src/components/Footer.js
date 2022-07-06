import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/newlogo.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => (
  <Box mt="80px" bgcolor="#e0f0f0">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "100px", height: "100px" }} />
    </Stack>
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="center"
      gap="15px"
    >
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "28px", xs: "20px" } }}
        mt="41px"
        textAlign="center"
        pb="40px"
      >
        <i>
          Made by <b>Saurabh Khaparey</b>
        </i>
      </Typography>
      <GitHubIcon
        sx={{
          "&:hover": {
            color: "gray",
          },
        }}
        fontSize="large"
        onClick={(event) =>
          window.open("https://github.com/Saurabh2699/VirGym", "_blank")
        }
      />
      <LinkedInIcon
        sx={{
          "&:hover": {
            color: "lightblue",
          },
          color: "blue",
        }}
        fontSize="large"
        onClick={(event) =>
          window.open("https://www.linkedin.com/in/saurabh-khaparey/", "_blank")
        }
      />
    </Stack>
  </Box>
);

export default Footer;
