import buildTechCard from './buildTechCard';

const showTechCard = (array) => {
  $('#tech-container').html('');
  array.forEach((item) => {
    $('#tech-container').append(buildTechCard.buildTechCards(item));
  });
};

export default { showTechCard };
