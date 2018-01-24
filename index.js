function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector(".target");
}

function increaseRankBy(n) {
  const list = document.querySelectorAll("ul.ranked-list li");
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n);
  }
}

function deepestChild() {
  var grand = document.querySelector("#grand-node");
  console.log(grand.children);
}
