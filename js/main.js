let form = document.querySelector("#addForm");
let itemList = document.querySelector("#items");
let filter = document.querySelector("#filter");
// form event
form.addEventListener("submit", addItem);
// delete event
itemList.addEventListener("click", removeItem);
// felter event
filter.addEventListener("keyup", filterItems);

// add Item
function addItem(e) {
  e.preventDefault();
  // get Iten valu
  let newItem = document.querySelector("#item").value;
  // creat li element
  let li = document.createElement("li");
  // creat class name
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-end delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.append(deleteBtn);
  itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("are you sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName("li");
  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
