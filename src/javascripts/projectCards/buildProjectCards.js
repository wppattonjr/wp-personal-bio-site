const buildProjectCard = (item) => {
  const domstring = `<div class="card" style="width: 25rem;">
  <img src="${item.projectImage}" class="card-img-top" alt="screenshot of project">
  <div class="card-body">
    <h5 class="card-title">${item.projectName}</h5>
    <p class="card-text">${item.projectDescription}</p>
  </div>
  <div class="card-body">
    <a href="${item.projectLink}" class="card-link">Live Project Site</a>
    <a href="${item.projectGithub}" class="card-link">Link To GitHub Repository</a>
  </div>
</div>`;
  return domstring;
};

export default { buildProjectCard };
