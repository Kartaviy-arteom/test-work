'use strict';
(function (deps) {
	window.addEventListener("resize", function() {
    deps.calculateVh();
    deps.changePlaceholder();
	}, false);
})({
  calculateVh: window.pageHeight.calculateVh,
  changePlaceholder: window.search.changePlaceholder,
});
