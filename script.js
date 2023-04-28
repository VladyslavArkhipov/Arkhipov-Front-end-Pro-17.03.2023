const textarea = document.querySelector(".textarrea");
const ghostDiv = document.querySelector(".ghost_div");

textarea.onfocus = function () {
  ghostDiv.className = "ghost_div visible_div";
};

textarea.onblur = function () {
  ghostDiv.className = "ghost_div";
};
