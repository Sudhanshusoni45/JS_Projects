// getting Elements
let incompleteTaskUl = document.getElementById("list");

function test() {
  let x = document.getElementById("name");
  let name = x.value;
  if (name) {
    // creating list element
    let listElement = document.createElement("Li");
    let node = document.createTextNode(name);
    listElement.appendChild(node);

    incompleteTaskUl.appendChild(listElement);

    // creating Checkbox
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    listElement.appendChild(checkBox);

    // Event listener to checkbox
    checkBox.addEventListener("change", taskCompleted);

    // creating deleteButton
    let deleteBtn = document.createElement("button");
    let deleteTextNode = document.createTextNode("Delete");

    deleteBtn.appendChild(deleteTextNode);
    listElement.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deleteTask);

    // console.log(checkBox);
    function deleteTask() {
      console.log("return of this :", this);
      console.log(listElement);
      incompleteTaskUl.removeChild(listElement);
    }
    function taskCompleted() {
      if (this.checked) {
        listElement.classList.add("completedClass");
      } else {
        listElement.classList.remove("completedClass");
      }
    }
  }
  x.value = "";
}
