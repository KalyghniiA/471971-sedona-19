"use strict";
var popapSent = document.querySelector(".popap--sent");
var popapError = document.querySelector(".popap--error");
var formsBtn = document.querySelector(".forms__button"); 
var inputRequired = document.querySelectorAll(".forms__input--required");
var popapBtnSent = document.querySelector(".popap__button--sent");
var popapBtnError = document.querySelector(".popap__button--error");
var popap = document.querySelector(".popap");

formsBtn.addEventListener ("click", function(evt) {
  evt.preventDefault();
  var inputError = false;

  for(var i = 0; i < inputRequired.length; i++) {
    if (!inputRequired[i].value) {
      inputError = true;
      break
    }
  }

  if (inputError) {
    popapError.classList.remove("visually-hidden");
  } else {
    popapSent.classList.remove("visually-hidden");
  }
});

popapBtnSent.addEventListener ("click", function(evt) {
  evt.preventDefault();
  popapSent.classList.add("visually-hidden");
});

popapBtnError.addEventListener ("click", function(evt) {
  evt.preventDefault();
  popapError.classList.add("visually-hidden");
});
