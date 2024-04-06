// let yello = document.getElementsByClassName("b1")[0];
const move = (x, y) => {
  setTimeout(() => {
    document.getElementsByClassName(y)[0].style.backgroundColor = "gold";
  }, 2000);
  document.getElementsByClassName("arrow")[x].style.left = `5%`;
};

const rest = () => {
  setTimeout(() => {
    document.getElementsByClassName("b1")[0].style.backgroundColor = "yellow";
    document.getElementsByClassName("b1")[1].style.backgroundColor = "blue";
    document.getElementsByClassName("b1")[2].style.backgroundColor = "red";
    document.getElementsByClassName("b1")[3].style.backgroundColor = "green";
  }, 2000);
  for (let i = 0; i < 4; i++) {
    document.getElementsByClassName("arrow")[i].style.left = `95%`;
  }
};
