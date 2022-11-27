const reload = document.querySelector("#reload");
const num1EL = document.querySelector(".Fnumber");
const num2EL = document.querySelector(".Snumber");
const result = document.querySelector(".result");
const statusMSG = document.querySelector(".status");
const accept = document.querySelector(".Accept");
const overlay = document.querySelector(".blackout-cookies");
const homeBTN = document.querySelector("#Home");
const dropdown = document.querySelector(".dropdown");
const navItemsContainer = document.querySelector("#navItmes");
const SignUpLink = document.querySelector(".SignUpLink");
const mySignUpForm = document.querySelector("#signup-form");
const mySignInForm = document.querySelector("#signin-form");
const submitBTN = mySignUpForm.querySelector(".submit");
let userID = 0;
let level = 1;
let recaptcha = false;
let num1 = null;
let num2 = null;
const cookies = localStorage.getItem("cookies");
if (cookies) {
  overlay.style.display = "none";
}
if (!cookies) {
  overlay.style.display = "flex";
}
homeBTN.addEventListener("click", () => {
  navItemsContainer.appendChild(dropdown);
  dropdown.classList.toggle("inactiveHidden");
});
accept.addEventListener("click", () => {
  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    overlay.innerHTML = "";
    document.body.style.overflowY = "auto";
  });
  localStorage.setItem("cookies", "true");
  overlay.style.display = "none";
  popup.remove();
});
submitBTN.addEventListener("click", (e) => {
  if (!recaptcha) {
    statusMSG.innerHTML = "Invalid captcha";
    e.preventDefault();
  }
});
reload.addEventListener("click", () => {
  randomizer();
  result.value = "";
  statusMSG.innerHTML = "";
  submitBTN.classList.add("inactive");
  submitBTN.style.cursor = "default";
});
const randomizer = () => {
  num1 = random();
  num2 = random();
  if (num1 > num2) {
    sum = num1 - num2;
    if (sum < 0) {
      num1 = random();
      num2 = random();
      sum = num1 - num2;
    }
    num2EL.innerHTML = num2;
    num1EL.innerHTML = num1;
  } else {
    sum = num2 - num1;
    if (sum < 0) {
      num1 = random();
      num2 = random();
      sum = num1 - num2;
    }
    num2EL.innerHTML = num1;
    num1EL.innerHTML = num2;
  }
};
const random = () => {
  return Math.floor(Math.random() * 50);
};
randomizer();
result.addEventListener("keyup", (e) => {
  statusMSG.innerHTML = "";
  const input = Number(result.value);
  if (input === sum) {
    recaptcha = true;
    statusMSG.classList.remove("error");
    statusMSG.innerHTML = "correct!";
    submitBTN.classList.remove("inactive");
    submitBTN.style.cursor = "pointer";
    submitBTN.removeAttribute("disabled");
  } else {
    statusMSG.innerHTML = "Invalid captcha";
    statusMSG.classList.add("error");
    submitBTN.classList.add("inactive");
    submitBTN.style.cursor = "default";
  }
});
const SignUpLinkFunction = () => {
  document.querySelector("h2").innerHTML =
    "Please fill the form below and we will send you an email if you are accepted!";
  mySignUpForm.classList.remove("hidden");
  mySignInForm.classList.add("hidden");
  document.querySelector("#guide").innerHTML = "already have an account?";
  SignUpLink.setAttribute("onclick", "SignInLinkFunction()");
  SignUpLink.innerHTML = "Sign in instead";
};
const SignInLinkFunction = () => {
  document.querySelector("h2").innerHTML =
    "You aren't Signed in, Please Sign in";
  mySignUpForm.classList.add("hidden");
  mySignInForm.classList.remove("hidden");
  document.querySelector("#guide").innerHTML = "Not a user?";
  SignUpLink.setAttribute("onclick", "SignUpLinkFunction()");
  SignUpLink.innerHTML = "Sign up Now";
};
//
//        SIGNIn INFO
//
mySignInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(mySignInForm);
  const userData = {};
  userData.email = formData.get("email");
  userData.password = formData.get("password");
  const DATAJSON = JSON.stringify(userData);
  console.log(DATAJSON);
});
//
//        SIGNUP INFO
//

mySignUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  userID++;
  const formData = new FormData(mySignUpForm);
  const userData = {};
  userData.signup = level;
  //   userData.userID = userID;
  userData.username = formData.get("UserName");
  userData.email = formData.get("email");
  userData.phone = formData.get("phone");
  userData.password = formData.get("password");
  const DATAJSON = JSON.stringify(userData);
  console.log(DATAJSON);
  fetch("http://mtgr.rf.gd/users.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: DATAJSON,
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});
