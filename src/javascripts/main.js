import 'bootstrap';
import '../styles/main.scss';
import nav from './components/navBar/navBar';
import bioText from './components/bioSection/bioWriteUp';
import show from './components/views/projectCardView';

const init = () => {
  nav.navBar();
  bioText.bioWriteUp();
  show.showProjectCards();
};

init();
