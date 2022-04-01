const paralax = document.getElementById('bg-img');

export const parallaxEffect = () => {
  const coefShearX = 10;
  const coefShearY = 12;

  const speed = 0.05;

  let positionX = 0,
    positionY = 0;
  let coordXPercent = 0,
    coordYPercent = 0;

  const setMouseParalax = () => {
    const distX = coordXPercent - positionX;
    const distY = coordYPercent - positionY;

    positionX = positionX + distX * speed;
    positionY = positionY + distY * speed;

    paralax.style.cssText = `transform: translate(${positionX / coefShearX}%, ${
      positionY / coefShearY
    }%);`;
    requestAnimationFrame(setMouseParalax);
  };
  setMouseParalax();

  const moveBg = (e) => {
    console.log(e.pageX, e.pageY);
    const paralaxWidth = paralax.offsetWidth;
    const paralaxHeight = paralax.offsetHeight;

    const coordX = e.clientX - paralaxWidth / 2;
    const coordY = e.clientY - paralaxHeight / 2;

    coordXPercent = (coordX / paralaxWidth) * -100;
    coordYPercent = (coordY / paralaxHeight) * -100;
  };

  window.addEventListener('mousemove', moveBg);
};
