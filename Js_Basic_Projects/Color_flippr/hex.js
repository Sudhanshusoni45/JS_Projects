const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  function random() {
    return Math.floor(hex.length * Math.random());
  }
  const first = hex[random()];
  const second = hex[random()];
  const third = hex[random()];
  const fourth = hex[random()];
  const fifth = hex[random()];
  const sixth = hex[random()];
  //   const array1 = [one, two, three];
  //   array1.forEach((e) => (e = hexrandom));
  const test = `#${first}${second}${third}${fourth}${fifth}${sixth}`;
  console.log(test);
  document.body.style.backgroundColor = test;
  color.textContent = test;
  color.style.color = test;
  btn.style.backgroundColor = test;
});
