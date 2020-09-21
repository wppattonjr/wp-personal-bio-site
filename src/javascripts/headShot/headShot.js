import wendellHeadShot from '../../assets/images/wendellHeadShot.jpg';

const headShot = () => {
  $('#headshot-image').html(`<div>
  <img id="headshot" src=${wendellHeadShot} alt='wendell head shot'/>
</div>`);
};

export default { headShot };
