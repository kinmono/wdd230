const baseURL = "../data/links.json";
const list = document.getElementById("list");

async function getData(URL) {
  const data = await fetch(URL);
  const res = await data.json();
  console.log("response: ", res);
  console.log("list: ", list);
  return res;
}
async function display() {
  list.innerHTML = "";
  const { lessons } = await getData(baseURL);
  lessons.forEach((element) => {
    console.log(element);
    const li = document.createElement("li");
    let liContent = "lesson " + element.lesson + ": ";
    element.links.forEach((link, i) => {
      liContent += i != 0 ? " | " : "";
      liContent += `<a href="${link.url}">${link.title}</a> `;
    });
    li.innerHTML = liContent;
    list.appendChild(li);
  });
}

display();
