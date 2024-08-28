function trocarLinguagem() {
  var select = document.querySelector("#idioma");
  var link = select.value;
  if (link) {
    window.location.href = link;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openLogin");
  const closeBtn = document.getElementById("closeLogin");
  const loginPopup = document.getElementById("loginPopup");

  openBtn.addEventListener("click", function () {
    loginPopup.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    loginPopup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === loginPopup) {
      loginPopup.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openSignup");
  const closeBtn = document.getElementById("closeSignup");
  const loginPopup = document.getElementById("signupPopup");

  openBtn.addEventListener("click", function () {
    loginPopup.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    loginPopup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === loginPopup) {
      loginPopup.style.display = "none";
    }
  });
});

let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex].classList.add("active");
}

function autoShowSlides() {
  changeSlide(1);
  setTimeout(autoShowSlides, 3000);
}
autoShowSlides();
