const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}
function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}
function deleteChapter() {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}
const chaptersArray = getChapterList() || [];
function displayList(value) {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  li.textContent = value;
  deleteButton.textContent = "❌";
  li.append(deleteButton);
  list.append(li);
  deleteButton.addEventListener("click", () => {
    list.removeChild(li);
    input.focus();
  });
}
button.addEventListener("click", () => {
  if (input.value != "") {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.focus();
    input.value = "";
  }
});
