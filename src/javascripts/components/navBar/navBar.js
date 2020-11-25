const navBar = () => {
  $('#nav').html(
    `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#bio-write-up-container">Wendell P. Patton, Jr.</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#bio-write-up-container">Bio <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects-container">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#tech-container">Technologies Used</a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li id="social-media-icons">
          <a href="https://www.linkedin.com/in/wendellpattonjr/" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="https://github.com/wppattonjr" target="_blank"><i class="fab fa-github"></i></a>
          <a href="https://twitter.com/wendellcodes" target="_blank"><i class="fab fa-twitter"></i></a>
        </li>
      </ul>
      <span class="navbar-text">
      </span>
    </div>
  </nav>`
  );
};

export default { navBar };
