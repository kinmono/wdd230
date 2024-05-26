const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener("click", ()=>{
    if(input.value ==""){
        alert("Input Feild Must not be Empty");
        input.focus();
    }

    const li = document.createElement("li");
    const button = document.createElement("button");

    li.textContent = input.value;
    button.textContent = "❌"

    li.append(button);
    list.append(li);
	input.focus();
	input.value=''
    button.addEventListener("click",()=>{
        list.removeChild(li);
		input.focus();
		input.value=''
    })
})