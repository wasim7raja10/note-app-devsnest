const newNoteButton = document.getElementById("addNote");
const newNoteEditor = document.getElementById("newNoteDialog");
const editorBtns = document.querySelectorAll(".editorButtons");
const text = document.getElementById("text");
const copyBtn = document.getElementById("copy");
const discardBtn = document.querySelector(".discard");
const addNoteBtn = document.querySelector("#addNote");
const para = document.querySelector(".para");
const saveBtn = document.querySelector(".save");

function openModal(e) {
  newNoteEditor.style.display = "block";
  addNoteBtn.style.display = "none";
}

function closeModal() {
  newNoteEditor.style.display = "none";
  addNoteBtn.style.display = "inline-block";
}

function formatText(element) {
  const command = element.dataset.command;
  document.execCommand(command, false, null);
}

function copyText() {
  const range = document.createRange();
  const selection = window.getSelection();
  range.selectNodeContents(text);
  selection.removeAllRanges();
  selection.addRange(range);
  try {
    document.execCommand("copy");
  } catch (err) {
    console.log("Oops, unable to copy");
  }
}

function saveNote() {
  const paragraph = document.createElement("p");
  console.log(text.innerHTML, paragraph);
  paragraph.innerHTML = text.innerHTML;
  paragraph.style = `
  border:  3px solid purple;
  padding: 1rem;
  margin: 1rem;
  width: min-content;
  `;
  para.appendChild(paragraph);
  text.innerHTML = "";
  closeModal();
}

newNoteButton.addEventListener("click", openModal);
discardBtn.addEventListener("click", closeModal);
editorBtns.forEach((element) => {
  element.addEventListener("click", () => formatText(element));
});
copyBtn.addEventListener("click", copyText);
saveBtn.addEventListener("click", saveNote);
