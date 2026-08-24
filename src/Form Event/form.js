// let form = document.querySelector("form");

// form.addEventListener("submit", function (){
//     // console.log("Form submission");
//     alert("Form submission");

// });


// Extracting Form Data

let form = document.querySelector("form");

form.addEventListener("submit", function (event){
  event.preventDefault();
  console.dir(form);

//   let user = document.querySelector("#user");
//     let password = document.querySelector("#password");

  let user = this.elements[0];
  let password = this.elements[1];

  console.log(user.value);
  console.log(password.value);

  alert('Hi ${user.value}, your password is set to ${pass.value}');

});