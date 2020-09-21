const buildTechCards = (item) => {
  const domstring = `
    <ul class="tech-list">
      <li> <img src="${item.HTMLIcon}" alt="HTML icon"></li>
      <li> <img src="${item.CSSIcon}" alt="CSS icon"></li>
      <li> <img src="${item.JavaScriptIcon}" alt="JavaScript icon"></li>
      <li> <img src="${item.jQueryIcon}" alt="jQuery icon"></li>
      <li> <img src="${item.BootstrapIcon}" alt="Bootstrap icon"></li>
      <li> <img src="${item.GitHubIcon}" alt="GitHub icon"></li>
      <li> <img src="${item.SassIcon}" alt="SASS icon"></li>
    </ul>
  </div>`;
  return domstring;
};

export default { buildTechCards };
