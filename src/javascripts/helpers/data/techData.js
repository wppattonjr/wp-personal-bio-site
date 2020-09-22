import bootstrapLogo from '../../../assets/images/bootstrapLogo.png';
import css from '../../../assets/images/css.png';
import js from '../../../assets/images/js.png';
import jquery from '../../../assets/images/jquery.png';
import html5 from '../../../assets/images/html5.png';
import github from '../../../assets/images/github.png';
import sass from '../../../assets/images/sass.png';

const techIcons = [
  {
    HTMLIcon: `${html5}`,
    CSSIcon: `${css}`,
    JavaScriptIcon: `${js}`,
    jQueryIcon: `${jquery}`,
    BootstrapIcon: `${bootstrapLogo}`,
    GitHubIcon: `${github}`,
    SassIcon: `${sass}`,
  }
];

const getIcons = () => techIcons;

export default { getIcons };
