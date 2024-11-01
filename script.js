"use strict";
const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", () => {
  if (text.className === "hidden") {
    text.className = "visible";
  } else {
    text.className = "hidden";
  }
});
