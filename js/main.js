const bill = document.getElementById("bill");

const tips = document.querySelector(".tips");
const tip = document.querySelectorAll(".tip");

const forperson = document.querySelector(".tip-per");
const all = document.querySelector(".tip-all");
const cus = document.querySelector(".last");

const reset = document.getElementById("reset");
cus.onclick = function () {
  for (let j = 0; j < tip.length; j++) {
    tip[j].style.cssText = ``;
  }
};
cus.addEventListener("input", () => {
  forperson.innerHTML = (bill.value * (parseInt(cus.value) / 100)).toFixed(2);
});

for (let i = 0; i < tip.length; i++) {
  tip[i].addEventListener("click", () => {
    for (let j = 0; j < tip.length; j++) {
      tip[j].style.cssText = ``;
    }
    tip[i].style.cssText = `background-color: var(--primary);`;
    forperson.innerHTML = (
      bill.value *
      (parseInt(tip[i].innerHTML.split("%").toString()) / 100)
    ).toFixed(2);
  });
}

const numof = document.querySelector(
  "input.inputs.text-end.rounded-2.pe-3.w-100"
);
numof.addEventListener("input", () => {
  if (numof.value == 0) {
    numof.style.cssText = `border: 3px solid tomato;`;
  }
  if (numof.value == "") {
    numof.style.cssText = ``;
  }
  all.innerHTML = parseInt(forperson.innerHTML) * parseInt(numof.value);
});

reset.onclick = function () {
  location.reload();
};
