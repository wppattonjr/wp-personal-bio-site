import axios from 'axios';

const baseUrl = 'https://wp-personal-bio-site.firebaseio.com';

const getAllProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/projects.json`)
    .then((response) => {
      const myProjects = response.data;
      const projects = [];
      if (myProjects) {
        Object.keys(myProjects).forEach((firebaseKey) => {
          projects.push(myProjects[firebaseKey]);
        });
      }
      resolve(projects);
    }).catch((error) => reject(error));
});

export default { getAllProjects };
