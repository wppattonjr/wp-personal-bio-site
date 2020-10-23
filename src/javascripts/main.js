import 'bootstrap';
import '../styles/main.scss';
import nav from './navBar/navBar';
import mainImage from './headShot/headShot';
import bioText from './bioSection/bioWriteUp';
import cards from './projectCards/showProjectCards';
import data from './helpers/data/projectsData';
import techCards from './technolgyCard/showTechCard';
import techData from './helpers/data/techData';

const init = () => {
  nav.navBar();
  mainImage.headShot();
  bioText.bioWriteUp();
  cards.showProjectCards(data.getProjects());
  techCards.showTechCard(techData.getIcons());
};

init();
