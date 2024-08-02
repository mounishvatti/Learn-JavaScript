document.getElementById("forest").onclick = function () {
  alert("You clicked on the forest");
};

document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("You clicked inside the ul");
  },
  false
);

// both of these will execute since they are both click events and present in the same element

document.getElementById("cliff").addEventListener(
  "click",
  function (e) {
    console.log("You clicked on the cliff");
    e.stopPropagation(); // prevents the event from bubbling up to the parent element
  },
  false
);
