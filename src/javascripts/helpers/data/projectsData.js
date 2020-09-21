const projectData = [
  {
    projectImage: 'src/assets/images/Pet Adoption Screenshot.png',
    projectName: 'Pet Adoption',
    projectDescription:
      'This project uses HTML and CSS, Bootstrap and vanilla javaScript to a pet adoption agency. When you click on each button a function filters an array to only show the pets that you have selected.',
    projectLink: 'https://wendellp-petadoption.netlify.app',
    projectGithub: 'https://github.com/wppattonjr/pet-adoption',
  },
  {
    projectImage: 'src/assets/images/Sorting Hat Screen Shot.png',
    projectName: 'Sorting Hat',
    projectDescription:
      'Sorting Hats is a single page application used for sorting students of Hogwarts into their "Hogwarts House" at random.',
    projectLink: 'wendellp-sortinghat.netlify.app',
    projectGithub: 'https://github.com/wppattonjr/sorting-hats',
  },
  {
    projectImage: 'src/assets/images/Spill The Jeans Screenshot.png',
    projectName: 'Pants Group Project',
    projectDescription:
      'This website showcases the products available from a new jean company for women, called Spill the Jeans. Therea are 4 pages, each with a specific purpose.',
    projectLink: 'https://spillthejeans.netlify.app/index.html',
    projectGithub:
      'https://github.com/nss-evening-cohort-13/pants-group-project-coolcoders3',
  },
];

const getProjects = () => projectData;

export default { getProjects };
