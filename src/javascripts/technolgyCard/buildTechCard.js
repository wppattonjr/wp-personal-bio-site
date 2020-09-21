const buildTechCards = (item) => {
  const domstring = `
    <ul class="tech-list">
      <li> <img src="${item.HTMLIcon}" alt="..."></li>
      <li> <img src="${item.CSSIcon}" alt="..."></li>
      <li> <img src="${item.JavaScriptIcon}" alt="..."></li>
      <li> <img src="${item.jQueryIcon}" alt="..."></li>
      <li> <img src="${item.BootstrapIcon}" alt="..."></li>
      <li> <img src="${item.GitHubIcon}" alt="..."></li>
      <li> <img src="${item.SassIcon}" alt="..."></li>
    </ul>
  </div>`;
  return domstring;
};

export default { buildTechCards };
