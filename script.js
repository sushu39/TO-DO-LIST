const form = document.getElementById('form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const task = taskInput.value;
  if (task === '') {
    alert('Please enter a task.');
    return;
  }

  const newTask = document.createElement('li');
  newTask.innerHTML = `
    <input type="checkbox">
    <span>${task}</span>
    <button>Delete</button>
  `;

  taskList.appendChild(newTask);

  taskInput.value = '';

  const deleteButton = newTask.querySelector('button');
  deleteButton.addEventListener('click', () => {
    newTask.remove();
  });
});