const list = document.getElementById("menu");
let taskList = [];

const loadTask = async () => {
  try {
    const res = await fetch("http://localhost:3000/tasks");
    taskList = await res.json();
    renderLists(taskList);
  } catch (err) {
    console.error(err);
  }
};
var renderLists = (lists) => {
  const ItemList = lists
    .map(
      (tasks) =>
        `<li><a href="${tasks.href}" target="iframes-list"><h4>${tasks.name}</h4></a></li>`
    )
    .join("");
  list.innerHTML = ItemList;
  const targetBtn = document.getElementsByTagName("a")[0];
  const clickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: false,
  });
  targetBtn.dispatchEvent(clickEvent);
};
loadTask();
const render = () => {
  searchBar.addEventListener("keyup", (task) => {
    const searchString = task.target.value.toLowerCase();
    const filteredTasks = taskList.filter((task) =>
      task.name.toLowerCase().startsWith(searchString)
    );
    renderLists(filteredTasks);
  });
};
render();
document.querySelector("#ascending").addEventListener("click", () => {
  taskList.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
  });
  renderLists(taskList);
});
document.querySelector("#descending").addEventListener("click", () => {
  taskList.sort(function (a, b) {
    if (a.name > b.name) {
      return -1;
    }
  });
  renderLists(taskList);
});
