import tasks from "./tasks.json" assert { type: "json" };

const list = document.getElementById("menu");
const searchBar = document.getElementById("searchBar");

//list display section
var render_lists = function (lists) {
  const ItemList = lists
    .map(
      (tasks) =>
        `<li><a href="${tasks.href}" target="iframes-list"> <h4>${tasks.name}</h4></a></li>`
    )
    .join("");
  list.innerHTML = ItemList;
};
render_lists(tasks);
//task filter section
const render = () => {
  searchBar.addEventListener("keyup", (task) => {
    const searchString = task.target.value.toLowerCase();
    const filteredTasks = tasks.filter((task) =>
      task.name.toLowerCase().startswith(searchString)
    );
    render_lists(filteredTasks);
  });
};
render();
//task sorting section
document.querySelector("#ascending").addEventListener("click", () =>
  tasks.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    render_lists(tasks);
  })
);
document.querySelector("#descending").addEventListener("click", () =>
  tasks.sort(function (a, b) {
    if (a.name > b.name) {
      return -1;
    }
    render_lists(tasks);
  })
);
