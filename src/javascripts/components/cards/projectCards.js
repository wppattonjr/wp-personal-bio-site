const projectCard = (item) => {
  const domstring = `
  <div class="container-fluid">
      <div class="row proj-row">
        <div class="col-md-5">
          <img class="card-img-top" src="${item.projectImageUrl}" alt="Card image cap">
        </div>
        <div class="col-md-7">
          <h2 class="proj-title">${item.projectName}</h2>
          <h5 class="description">${item.projectDescription}</h5>
          <a href="${item.projectLink}" class="btn btn-secondary mt-auto m-2" target="_blank">Live Demo</a>
          <a href="${item.projectGithub}" class="btn mt-auto m-2 github-button" target="_blank">Github Project</a>
        </div>
      </div>
    </div>
  `;
  return domstring;
};

export default { projectCard };
