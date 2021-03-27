//This file contains the data used for the header, navbar and footer in app.js

import React from "react";
import {
  WelcomeContent,
  ExperienceContent,
  ProjectsContent,
  PhotosContent,
} from "../components/export-components";

//Data used for the header.
export const headerData = {
  imgdir: "../me.png",
  header: "Full Name",
  subheader: "Current Title",
};

//Social box icons and urls.  Part of the header but is optional if you wish.
export const socialBoxOptions = [
  { icon: "envelope", url: "mailto:test@gmail.com" },
  { icon: "github", url: "https://github.com/" },
  { icon: "linkedin", url: "https://www.linkedin.com/" },
];

//Navbar options and components used in the content of the page
export const navbarOptions = [
  {
    name: "Welcome",
    component: <WelcomeContent />,
  },
  {
    name: "Experience",
    component: <ExperienceContent />,
  },
  {
    name: "Projects",
    component: <ProjectsContent />,
  },
  {
    name: "Photos",
    component: <PhotosContent />,
  },
];

//Data used in the footer.
export const footerData =
  "Ⓒ Template Created by Sita Robinson.  Modified by User";
