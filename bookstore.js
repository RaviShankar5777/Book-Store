const form = document.querySelector(".form");
const bookInput = document.querySelector("#book-name");
const authorInput = document.querySelector("#author-name");
const priceInput = document.querySelector("#price");
const newRecords = document.querySelector(".record-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    bookInput.value.trim() == "" ||
    authorInput.value.trim() == "" ||
    priceInput.value.trim() == ""
  ) {
    alert("Please enter all the details");
    return;
  }

  // CREATING DIV'S

  let records = document.createElement("div");
  records.classList.add("records");

  let content = document.createElement("div");
  content.classList.add("content");

  // CREATING RECORD INPUTS
  let recordBook_input = document.createElement("input");
  let recordAuthor_input = document.createElement("input");
  let recordPrice_input = document.createElement("input");

  //  CREATING BOOK NAME-RECORD
  recordBook_input.value = bookInput.value;
  recordBook_input.type = "text";
  recordBook_input.setAttribute("readonly", "readonly");

  // CREATING AUTHOR-RECORD
  recordAuthor_input.value = authorInput.value;
  recordAuthor_input.type = "text";
  recordAuthor_input.setAttribute("readonly", "readonly");
  // CREATING PRICE-RECORD
  recordPrice_input.value = priceInput.value;
  recordPrice_input.type = "number";
  recordPrice_input.setAttribute("readonly", "readonly");

  // PLACING CHILD DIV'S IN PARENT DIV'S
  newRecords.appendChild(records);
  records.appendChild(content);
  content.appendChild(recordBook_input);
  content.appendChild(recordAuthor_input);
  content.appendChild(recordPrice_input);

  // CREATING BUTTONS DIV

  let actions = document.createElement("div");
  actions.classList.add("actions");

  //  CREATING EDIT BUTTON
  let editButton = document.createElement("button");
  editButton.classList.add("edit");
  editButton.innerHTML = "Edit";

  //  CREATING DELETE BUTTON
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.innerHTML = "Delete";

  // APPENDING BUTTONS

  actions.appendChild(editButton);
  actions.appendChild(deleteButton);
  records.appendChild(actions);

  bookInput.value = "";
  authorInput.value = "";
  priceInput.value = "";

  //   EDIT-FUNCTIONALITY
  editButton.addEventListener("click", () => {
    if (editButton.innerHTML == "Edit") {
      recordBook_input.removeAttribute("readonly");
      recordAuthor_input.removeAttribute("readonly");
      recordPrice_input.removeAttribute("readonly");
      editButton.innerHTML = "Save";

      recordAuthor_input.focus();
      recordPrice_input.focus();
      recordBook_input.focus();
    } else {
      recordBook_input.setAttribute("readonly", "readonly");
      recordAuthor_input.setAttribute("readonly", "readonly");
      recordPrice_input.setAttribute("readonly", "readonly");
      editButton.innerHTML = "Edit";
    }
  });
  // DELETE-FUNCTIONALITY

  deleteButton.addEventListener("click", () => {
    records.removeChild(content);
    records.removeChild(actions);
  });
});
