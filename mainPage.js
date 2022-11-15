const reload = document.querySelector("#reload");
const num1EL = document.querySelector(".Fnumber");
const num2EL = document.querySelector(".Snumber");
const result = document.querySelector(".result");
const submitBTN = document.querySelector("#submit");
const statusMSG = document.querySelector(".status");
const accept = document.querySelector(".Accept");
const overlay = document.querySelector(".blackout");
const homeBTN = document.querySelector("#Home");
const dropdown = document.querySelector(".dropdown");
const goUp = document.querySelector(".goUp");
const popup = document.querySelector(".popup");
const sectionList = Array.from(document.querySelectorAll(".section"));
let recaptcha = false;
let position;
let num1;
let num2;
sectionList.forEach((section) => {
  document.addEventListener("scroll", () => {
    if (
      section.getBoundingClientRect().top > -250 &&
      section.getBoundingClientRect().top < 500
    )
      return (position = sectionList.indexOf(section));
  });
});

document.addEventListener("keydown", (e) => {
  if (e.code === "PageUp") {
    scrollDown();
    e.preventDefault();
  }
  if (e.code === "PageDown") {
    scrollUp();
    e.preventDefault();
  }
});
const scrollUp = () => {
  if (position === 6) {
    return;
  } else {
    position++;
    sectionList[position].scrollIntoView();
  }
};
const scrollDown = () => {
  if (position === -1) {
    return;
  } else {
    position--;
    sectionList[position].scrollIntoView();
  }
};
document.addEventListener("scroll", () => {
  if (document.body.getBoundingClientRect().top < -2625) {
    goUp.classList.remove("inactiveHidden");
  } else {
    goUp.classList.add("inactiveHidden");
  }
});
homeBTN.addEventListener("click", () => {
  homeBTN.appendChild(dropdown);
  dropdown.classList.toggle("inactiveHidden");
});
accept.addEventListener("click", () => {
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
const info = (url) => {
  overlay.style.display = "flex";
  const imgs = document.createElement("div");
  imgs.innerHTML = `<img src="${url}"/>`;
  imgs.classList.add("overlayIMG");
  overlay.appendChild(imgs);
  document.body.style.overflowY = "hidden";
};
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  overlay.innerHTML = "";
  document.body.style.overflowY = "auto";
});
