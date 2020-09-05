import todoService from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";

//TODO Create the draw function
function _drawTodos() {
  let template = ""
  let listItems = ProxyState.todos
  listItems.forEach(i => template += i.Template)
  document.getElementById('list-items').innerHTML = template
}
function _drawTaskRem() {
  let count = 0
  for (let i = 0; i < ProxyState.todos.length; i++) {
    const todo = ProxyState.todos[i];
    if (!todo.completed) {
      count++
    }
  }
  document.getElementById('tasksRem').innerHTML = `<p class="my-auto">${count}-Todos Left</p>`
}


export default class TodoController {
  constructor() {
    this.getTodos();
    ProxyState.on('todos', _drawTodos)
    ProxyState.on('todos', _drawTaskRem)
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(event) {
    event.preventDefault();
    var form = event.target;
    var todo = { description: form.todo.value }
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
    form.reset()
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}