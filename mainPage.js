const reload = document.querySelector("#reload");
const num1EL = document.querySelector(".Fnumber");
const num2EL = document.querySelector(".Snumber");
const result = document.querySelector(".result");
const submitBTN = document.querySelector("#submit");
const statusMSG = document.querySelector(".status");
let recaptcha = false;
let num1;
let num2;
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
      debugger;
      num1 = random();
      num2 = random();
      sum = num1 - num2;
    }
    num2EL.innerHTML = num2;
    num1EL.innerHTML = num1;
  } else {
    sum = num2 - num1;
    if (sum < 0) {
      debugger;
      num1 = random();
      num2 = random();
      sum = num1 - num2;
    }
    num2EL.innerHTML = num1;
    num1EL.innerHTML = num2;
  }
  if (sum < 0) {
    console.log(sum);
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
