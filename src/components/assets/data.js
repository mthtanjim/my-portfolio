import react from "./projectdemo.jpg";

import leonf from "./leonf.png";
import admin from "./admin.png";
import dominno from "./dominno.png";
import pp from "./pp.png";
import rnext from "./projects/realestatenextjs.jpg";
import bim from "./bim.png";


const projectsData = [
    {
        id: 11,
        title: "La Tarte",
        imgSrc: react,
        liveLink: "https://www.latartebd.com",
        techStack: ["Next js", "Express JS"]
      },
    {
        id: 10,
        title: "Navana Real Estate",
        imgSrc: react,
        liveLink: "https://navana-realestate.com/",
        techStack: ["Next js", "Strapi", "MySql"]
      },
    {
        id: 9,
        title: "Gloria Jean's Cofees Bangladesh",
        imgSrc: react,
        liveLink: "https://gloriajeanscoffeesbd.com/",
        techStack: ["React js", "Express JS"]
      },
    {
      id: 1,
      title: "Pharmaceuticals Industries",
      imgSrc: leonf,
      liveLink: "https://leonbd.com",
      techStack: ["Reactjs", "Material UI", "SCSS", "Firebase"]
    },
    {
      id: 2,
      title: "Backend Admin Dashboard",
      imgSrc: react,
      liveLink: "",
      techStack: ["Nodejs", "Express JS", "Mongoodb", "Rest API"]
    },
    {
      id: 3,
      title: "Admin Dashboard Frontend",
      imgSrc: admin,
      liveLink: "", // Update with actual live link
      techStack: ["React js", "Material UI", "Firebase"]
    },
    {
      id: 4,
      title: "Consumer Products Manufacturer Industries",
      imgSrc: react, // Update with actual image path
      liveLink: "", // Update with actual live link
      techStack: ["React js", "Material UI", "Firebase"]
    },
    {
      id: 5,
      title: "React Portfolio Website",
      imgSrc: pp,
      liveLink: "https://github.com/mthtanjim/my-portfolio",
      techStack: ["React js", "SCSS"]
    },
    {
      id: 6,
      title: "NextJs Real Estate",
      imgSrc: rnext,
      liveLink: "https://realestatebd23.netlify.app/",
      techStack: ["Next js", "Bootstrap"]
    },
    {
      id: 7,
      title: "Real Estate Website",
      imgSrc: dominno,
      liveLink: "https://dominno-bd.com",
      techStack: ["Wordpress", "Custom CSS", "Custom JS"]
    },
    {
      id: 8,
      title: "Architectural Company",
      imgSrc: bim,
      liveLink: "https://bimenvision.com/",
      techStack: ["Wordpress", "Custom CSS", "Custom JS"]
    },
   
  ];
  
  export default projectsData;
  