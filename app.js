
// document.getElementById("contact-me-btn").addEventListener("click", function(){
//     document.querySelector(".pop-up-contact-form").style.display="flex";

// });

// document.querySelector(".close").addEventListener("click", function(){
//     document.querySelector(".pop-up-contact-form").style.display="none";

// });

//   window.addEventListener("DOMContentLoaded", function() {

//     // get the form elements defined in your form HTML above
    
//     var form = document.getElementById("contact-form");
//     var button = document.getElementById("form-submit-button");
   

//     // Success and Error functions for after the form is submitted
    
//     function success() {
//       form.reset();
//     //   button.style = "display: none ";
//       status.innerHTML = "Thanks so much for reaching out! We received your email and will get back to you as soon as possible. ";
//     }

//     function error() {
//       status.innerHTML = "Oops! There was a problem.";
//     }

//     // handle the form submission event

//     form.addEventListener("submit", function(ev) {
//       ev.preventDefault();
//       var data = new FormData(form);
//       ajax(form.method, form.action, data, success, error);
      
//     });
//   });
  
//   // helper function for sending an AJAX request

//   function ajax(method, url, data, success, error) {
//     var xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.setRequestHeader("Accept", "application/json");
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState !== XMLHttpRequest.DONE) return;
//       if (xhr.status === 200) {
//         success(xhr.response, xhr.responseType);
//       } else {
//         error(xhr.status, xhr.response, xhr.responseType);
//       }
//     };
//     xhr.send(data);
//   }
