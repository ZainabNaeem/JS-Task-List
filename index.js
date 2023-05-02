import tasks from "./tasks.json";
console.log(tasks);

for (var i = 0; i < tasklist.length; i++) {
  var li = document.createElement("li");
  var link = document.createElement("a");
  var textnode = document.createTextNode(tasklist[i].name);
  link.setAttribute("href", tasklist[i].href);
  link.setAttribute("target", "iframes-list");
  link.appendChild(textnode);
  li.appendChild(link);

  document.getElementById("submenu").appendChild(li);
}
const ul = document.getElementById("submenu");
const list = ul.querySelectorAll("li");

const Ascend = (list) =>
  [...list].sort((a, b) => {
    const A = a.textContent;
    const B = b.textContent;
    if (A < B) {
      return -1;
    }
  });

const Decend = (list) =>
  [...list].sort((a, b) => {
    const A = a.textContent;
    const B = b.textContent;
    if (A > B) {
      return -1;
    }
  });
var asc = document.getElementById("ascending");
asc.addEventListener("click", function () {
  console.log(">>> list:", list);
  console.log(">>> asc:", ...Ascend(list));
  ul.append(...Ascend(list));
});
var dec = document.getElementById("descending");
dec.addEventListener("click", function () {
  ul.append(...Decend(list));
});
