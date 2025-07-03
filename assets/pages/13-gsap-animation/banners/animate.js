/* global gsap, GSDevTools */

(() => {
  function animate() {
    const illust = document.querySelector('.banner__images #items');
    console.log(illust);

    gsap.from('#g', {x:100})

    const tl = gsap.timeline({
      repeat: 1,
      repeatDelay: 1,
      yoyo: true,
      defaults: { opacity: 0, duration: 1, ease: 'back.inOut' },
    });

    .from('#earth', {y:100})
    .from('#earth', {y:100})

  }

})();
