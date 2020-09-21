import buildProjectCard from './buildProjectCards';

const showProjectCards = (array) => {
  $('#projects').html('');
  array.forEach((item) => {
    $('#projects').append(buildProjectCard.buildProjectCard(item));
  });
};

export default { showProjectCards };
