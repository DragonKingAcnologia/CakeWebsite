
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}



let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}


var swiper = new Swiper(".product-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".blogs-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextE1 :".swiper-button-next",
        prevE1 :".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });

  var swiper = new Swiper(".review-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
   /* register */
  function validate() {
    var sid = document.getElementById("sid").value;
    var pwd1 = document.getElementById("pwd1").value;
    var pwd2 = document.getElementById("pwd2").value;
    var uname = document.getElementById("uname").value; 
    var genm = document.getElementById("genm").checked;
    var genf = document.getElementById("genf").checked;
  
    var errMsg = "";
    var result = true;
    var pattern = /^[a-zA-Z ]+$/;
  
    if (sid == "") {
      errMsg += "User ID (Email) cannot be empty.\n";
    }
    if (pwd1 == "") {
      errMsg += "Password cannot be empty.\n";
    }
    if (pwd2 == "") {
      errMsg += "Retype password cannot be empty.\n";
    }
    if (uname == "") {
      errMsg += "User name cannot be empty.\n";
    }
    if (!(genm || genf)) {
      errMsg += "Gender must be selected.\n";
    }
    if (sid.indexOf('@') == 0) {
      errMsg += "User ID (Email) cannot start with an @ symbol.\n";
    }
    if (sid.indexOf('@') < 0) {
      errMsg += "User ID must contain @ symbol.\n";
    }
    if (pwd1.length < 9) {
      errMsg += "Password must be at least 9 characters long.\n";
    }
    if (pwd1 != pwd2) {
      errMsg += "Passwords do not match.\n";
    }
  
    if (!uname.match(pattern)) {
      errMsg += "User name contains symbols.\n";
    }
  
    if (errMsg != "") {
      alert(errMsg);
      result = false;
    }
    return result;
  }
  
  function init() {
    var regForm = document.getElementById("registerform");
    regForm.onsubmit = validate;
  }
  
  window.onload = init;
   /* ....*/

   