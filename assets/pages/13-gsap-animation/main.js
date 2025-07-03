/* global gsap, GSDevTools */
() => {
  // Web Animations API
  function playground() {
    // const boxElements = document.querySelectorAll('.box');
    // const keyframes = [{ translate: '0 0' }, { translate: '80vw 0' }];
    // const options = {
    //   duration: 1000,
    //   fill: 'forwards',
    // };
    // boxElements.forEach((element) => {
    //   const animation = element.animate(keyframes, options);
    //   animation.pause();
    //   // animation.play()
    // });
  }

  {
    // GSAP API
    function playgroundGSAP() {
      // gsap.to(target, varObject)
      // gasp.to(selector, varObject)
      // gasp.to(htmlElement, varObject)
      gsap.to('.box', { x: '80vw' });
    }

    setTimeout(() => {
      playground();
      playgroundGSAP();
    }, 500);
  }
};

() => {
  function animate() {
    // gsap.from('.blue', { y: 100, opacity: 0, duration: 1 });

    // gsap.from('.yellow', { y: 100, opacity: 0, duration: 1, delay: 0.5 });

    // gsap.from('.green', { y: 100, opacity: 0, duration: 1, delay: 1 });

    gsap.from('.box', {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      ease: 'power1.out',
    });

    const boxes = document.querySelectorAll('.box');

    for (const box of boxes) {
      box.addEventListener('click', () => {
        gsap.to('.box', {
          y: -100,
          opacity: 0,
          scale: 1.2,
          stagger: 0.1,
          ease: 'power4.out',
        });
      });
    }
  }

  setTimeout(animate, 500);
};

(() => {
  gsap.registerPlugin(GSDevTools);

  const tl = gsap.timeline({
    repeat: 1,
    yoyo: true,
    defaults: { duration: 0.4, opacity: 0, rotation: 270 },
  });
  tl.pause;
})();
