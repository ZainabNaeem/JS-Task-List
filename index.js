import tasks from "./tasks.json" assert { type: "json" };

let list = document.getElementById("menu");
function sort(order) {
  document.getElementById("menu").innerHTML = "";

  const sortedTasks = tasks.sort((a, b) => {
    let value = 0;
    if (a.name > b.name) value = 1;
    else if (a.name < b.name) value = -1;
    else value = 0;

    return order * value;
  });

  // Append sorted tasks to menu node
  sortedTasks.forEach((tasks) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("href", tasks.href);
    link.setAttribute("target", "task-iframe");
    link.innerHTML = tasks.name;
    item.appendChild(link);
    list.appendChild(item);
  });
}

document.querySelector("#ascending");
window.addEventListener("load", () => sort(1));
document.querySelector("#descending").addEventListener("click", () => sort(-1));
document.querySelector("#ascending").addEventListener("click", () => sort(1));
