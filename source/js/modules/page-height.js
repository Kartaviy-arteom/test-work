(function () {
  var calculateVh = function () {
    let height = window.innerHeight;
    let vh = height * 0.01;
    document.documentElement.style.removeProperty(`--vh`);
    document.documentElement.style.setProperty(`--vh`, `${vh}px`);
  };
  calculateVh();
  window.pageHeight = {
    calculateVh: calculateVh,
  };
})();
