const siteContainer = document.querySelector('.site-container');
const toggleOffsiteButton = siteContainer.querySelector('button');
const OFFSITE_OPEN_CLASSNAME = 'offsite-is-open';

toggleOffsiteButton.addEventListener('click', () => {
  console.log('open offsite container');
});
