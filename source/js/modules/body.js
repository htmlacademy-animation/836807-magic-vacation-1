export default () => {
  window.addEventListener('load', () => {
    setTimeout(() => document.body.classList.add('ready'), 0);
  });
};
