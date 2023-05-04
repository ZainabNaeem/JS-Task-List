import tasks from "./tasks.json" assert { type: "json" };

function displayList() {
  for (let i = 0; i < tasks.length; i++) {
    let obj = tasks[i];
    console.log(obj.name);
    const list = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("href", obj.href);
    link.setAttribute("target", "task-iframe");
    link.innerHTML = obj.name;
    list.appendChild(link);
    document.getElementById("submenu").appendChild(list);
  }
  // document.getElementById("menu").innerHTML = list;
  // console.log(list);
}
displayList();
// function displayList() {
//   const item = document.createElement("li");
//   const link = document.createElement("a");
//   link.setAttribute("href", tasks.href);
//   link.setAttribute("target", "task-iframe");
//   link.innerHTML = tasks.name;
//   item.appendChild(link);
//   document.getElementById("menu").appendChild(item);
// }
// ascend_btn.addEventListener("click", displayList);

// for (var i = 0; i < tasks.length; i++) {
//   var li = document.createElement("li");
//   var link = document.createElement("a");
//   var textnode = document.createTextNode(tasks[i].name);
//   link.setAttribute("href", tasks[i].href);
//   link.setAttribute("target", "iframes-list");
//   link.appendChild(textnode);
//   li.appendChild(link);

//   document.getElementById("submenu").appendChild(li);
// }
// const ul = document.getElementById("submenu");
// const list = ul.querySelectorAll("li");

// const Ascend = (list) =>
//   [...list].sort((a, b) => {
//     const A = a.textContent;
//     const B = b.textContent;
//     if (A < B) {
//       return -1;
//     }
//   });

// const Decend = (list) =>
//   [...list].sort((a, b) => {
//     const A = a.textContent;
//     const B = b.textContent;
//     if (A > B) {
//       return -1;
//     }
//   });
// var asc = document.getElementById("ascending");
// asc.addEventListener("click", function () {
//   console.log(">>> list:", list);
//   console.log(">>> asc:", ...Ascend(list));
//   ul.append(...Ascend(list));
// });
// var dec = document.getElementById("descending");
// dec.addEventListener("click", function () {
//   ul.append(...Decend(list));
// });
