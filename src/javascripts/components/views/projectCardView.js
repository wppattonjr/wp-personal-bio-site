import projectsData from '../../../helpers/data/projectsData';
import card from '../cards/projectCards';

const showProjectCards = () => {
  projectsData.getAllProjects().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#projects').append(card.projectCard(item));
      });
    } else {
      $('#projects').html('<h1>There are no projects to show at this time.</h1>');
    }
  });
};

export default { showProjectCards };
