"use strict";
var popapSent = document.querySelector(".popap--sent");
var popapError = document.querySelector(".popap--error");
var formsBtn = document.querySelector(".forms__button"); 
var inputRequired = document.querySelectorAll(".forms__input--required");
var popapBtnSent = document.querySelector(".popap__button--sent");
var popapBtnError = document.querySelector(".popap__button--error");
var popap = document.querySelector(".popap");
var formsName = document.querySelector(".forms__input--name");
var formsSubname = document.querySelector(".forms__input--subname");
var formsPhone = document.querySelector(".forms__input--phone");
var formsMail = document.querySelector(".forms__input--mail");


/* formsBtn.addEventListener ("click", function(evt) {
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
    inputRequired[i].classList.add("forms__input--error");
  } else {
    popapSent.classList.remove("visually-hidden");
  }
}); */

formsBtn.addEventListener ("click", function(evt) {
  evt.preventDefault();
  var inputError = false;

  if(!formsName.value) {
    inputError = true;
    formsName.classList.add("forms__input--error");
  }

  if(!formsSubname.value) {
    inputError = true;
    formsSubname.classList.add("forms__input--error");
  }

  if(!formsPhone.value) {
    inputError = true;
    formsPhone.classList.add("forms__input--error");
  }

  if(!formsMail.value) {
    inputError = true;
    formsMail.classList.add("forms__input--error");
  }

  if (inputError) {
    popapError.classList.remove("visually-hidden");
  } else {
    popapSent.classList.remove("visually-hidden");
  }
});

formsName.addEventListener ("keyup", function(evt) {
  formsName.classList.remove("forms__input--error");
});

formsSubname.addEventListener ("keyup", function(evt) {
  formsSubname.classList.remove("forms__input--error");
});

formsPhone.addEventListener ("keyup", function(evt) {
  formsPhone.classList.remove("forms__input--error");
});

formsMail.addEventListener ("keyup", function(evt) {
  formsMail.classList.remove("forms__input--error");
});

popapBtnSent.addEventListener ("click", function(evt) {
  evt.preventDefault();
  popapSent.classList.add("visually-hidden");
});

popapBtnError.addEventListener ("click", function(evt) {
  evt.preventDefault();
  popapError.classList.add("visually-hidden");
});
