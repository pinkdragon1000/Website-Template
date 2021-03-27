//This file contains the content used for projects.  Rendered in projects-content.js

import React from "react";

export const projectsContent = [
  {
    title: "Project Name 1",
    description: <div>Information about project</div>,
    socialBoxOptions: [
      { icon: "code", url: "https://github.com/" },
      { icon: "video", url: "https://youtube.com/" },
    ],
  },
  {
    title: "Project Name 2",
    description: <div>Information about project 2</div>,
    socialBoxOptions: [{ icon: "code", url: "https://github.com/" }],
  },
];

//Groups projects into arrays of two to make it easier to put two projects on each row.
export var projectGroup = [];
var size = 2;
while (projectsContent.length > 0)
  projectGroup.push(projectsContent.splice(0, size));
