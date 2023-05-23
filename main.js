import tasks from "./tasks.json" assert { type: "json" };

const list = document.getElementById("menu");
const searchBar = document.getElementById("searchBar");

//list display section
var renderLists = function (lists) {
  const ItemList = lists
    .map(
      (tasks) =>
        `<li><a href="${tasks.href}" target="iframes-list"> <h4>${tasks.name}</h4></a></li>`
    )
    .join("");
  list.innerHTML = ItemList;
};
renderLists(tasks);
//task filter section
const render = () => {
  searchBar.addEventListener("keyup", (task) => {
    const searchString = task.target.value.toLowerCase();
    const filteredTasks = tasks.filter((task) =>
      task.name.toLowerCase().includes(searchString)
    );
    renderLists(filteredTasks);
  });
};
render();
//task sorting section
document.querySelector("#ascending").addEventListener("click", () => {
  tasks.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
  });
  renderLists(tasks);
});
document.querySelector("#descending").addEventListener("click", () => {
  tasks.sort(function (a, b) {
    if (a.name > b.name) {
      return -1;
    }
  });
  renderLists(tasks);
});
function loaded() {
  document.getElementsByTagName("a")[0].click();
}
window.onload = loaded();
function focused() {
  document.getElementsByTagName("a")[0].focus();
}
window.onload = focused();
