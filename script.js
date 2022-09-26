window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const status_inp = document.querySelector("#status");
  const list_el = document.querySelector("#tasks");


  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;
    const status = status_inp.value;
    

    if (!task) {
      alert("Please fill out task");
      return;
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input")
    task_input_el.classList.add("text")
    task_input_el.type = "text"
    task_input_el.value = task;
    task_input_el.style.width = "100%"
    task_input_el.setAttribute("readonly", "readonly")

    const task_status_el = document.createElement("select")
    const status_option1 = new Option("todo")
    const status_option2 = new Option("pending")
    const status_option3 = new Option("completed")
    task_status_el.appendChild(status_option1)
    task_status_el.appendChild(status_option2)
    task_status_el.appendChild(status_option3)
    // task_status_el.classList.add("text")
    // task_status_el.type = "text"
    task_status_el.value = status;
    task_status_el.style.width = "30%"
    task_status_el.style.marginRight = "20px"
    task_status_el.setAttribute("readonly", "readonly")


    task_content_el.appendChild(task_input_el)
    task_content_el.appendChild(task_status_el)
    
    const task_actions_el = document.createElement("div")
    task_actions_el.classList.add("actions")

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "✏️"

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "❌"

    task_actions_el.appendChild(task_edit_el)
    task_actions_el.appendChild(task_delete_el)

    task_el.appendChild(task_actions_el)
    
    list_el.appendChild(task_el);

    input.value = "";

    task_edit_el.addEventListener('click', () => {
        if(task_edit_el.innerText == "✏️") {
            task_input_el.removeAttribute("readonly")
            task_input_el.focus()
            task_edit_el.innerText = "👍"
        } else {
            task_input_el.setAttribute("readonly", "readonly")
            task_edit_el.innerText = "✏️"
        }
    })

    task_delete_el.addEventListener('click', () => {
        if(task_delete_el.innerText == "❌") {
            list_el.removeChild(task_el)
        } 
    })

    
  });
  
});
