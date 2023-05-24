document.addEventListener("DOMContentLoaded", () => {

});
const dumb = document.getElementById("create-task-form")
dumb.addEventListener("submit", (e) => {
  e.preventDefault()
  let newTask = document.createElement("li")
  let newButton = document.createElement("button")
  newTask.textContent = document.getElementById('new-task-description').value
  newTask.dataset.description = document.getElementById('new-task-description').value
  newButton.dataset.description = document.getElementById('new-task-description').value
  newButton.addEventListener("click", e => {
    const deleteMe = e.target.dataset.description
    const taskManager = document.getElementById('tasks')
    taskManager.removeChild(document.querySelector(`[data-description="${deleteMe}"]`))
  })
  let taskList = document.getElementById('tasks')
  newTask.append(newButton)
  taskList.appendChild(newTask)
  e.target.reset()
  
})