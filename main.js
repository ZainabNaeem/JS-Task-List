import tasks from "./tasks.json" assert { type: "json" };

const list = document.getElementById("menu");
const searchBar = document.getElementById("searchBar");
const compareFn = (a, b) => {
  if (a.id < b.id) {
    return -1;
  } else if (b.id < a.id) {
    return 1;
  } else {
    return 0;
  }
};

let order = 1;

document.querySelector("#descending").addEventListener("click", () => {
  order = 1;
});

document.querySelector("#ascending").addEventListener("click", () => {
  order = -1;
});

var render_lists = function (lists) {
  const ItemList = tasks
    .map(
      (tasks) =>
        `<li><a href="${tasks.href}" target="iframes-list"> <h4>${tasks.name}</h4></a></li>`
    )
    .join("");
  list.innerHTML = ItemList;
};
render_lists(tasks);
const render = () => {
  searchBar.addEventListener("keyup", (task) => {
    const searchString = task.target.value.toLowerCase();
    const filteredTasks = tasks.filter((task) =>
      task.name.toLowerCase().includes(searchString)
    );

    filteredTasks.sort((a, b) => compareFn(a, b) * order);
    console.log(filteredTasks);
    render_lists(filteredTasks);
  });
};
render();
