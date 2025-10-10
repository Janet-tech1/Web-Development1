console.log("My To do List")

let taskName = document.getElementById("taskName")
let priority = document.getElementById("priority")
let dateInput = document.getElementById("dateInput")

let form = document.getElementById("form")

form.addEventListener("submit", function(e) {
    e.preventDefault()

    let previousTask = JSON.parse(localStorage.getItem("tasks")) || []

    let taskObject = {
        name: taskName.value,
        priority: priority.value,
        date: dateInput.value,
        completed: false,
    }

    previousTask.push(taskObject)

    localStorage.setItem("tasks", JSON.stringify(previousTask))

    form.reset()
})

function showData(){
    let list = document.getElementById("taskLists")
    let tasks = JSON.parse(localStorage.getItem("tasks"))

    list.innerHTML =""

    tasks.map(function(task) {
        list.innerHTML += `
        <li style="background: ${task.priority === "high"? "red" : task.priority === "medium" ? "yellow" : "green"}; margin: 20px">${task.name}, due date: ${task.date} <input type="checkbox" class="taskCheck id="</li>`


    })
    console.log(tasks)
}

showData()