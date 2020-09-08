import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../Modelsold/Todo.js";

let url = 'Jake/todos/'


class TodoService {

  async getTodos() {
    console.log("Getting the Todo List");
    let res = await api.get(url);
    ProxyState.todos = res.data.data.map(t => new Todo(t))
  }

  async addTodo(todo) {
    let res = await api.post(url, todo)
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data.data)]
  }

  async toggleTodoStatus(todoId) {
    let todo = ProxyState.todos.find(t => t.id == todoId);
    if (todo.completed) {
      todo.completed = false
    } else todo.completed = true
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    ProxyState.todos = ProxyState.todos
    let res = await api.put(url + todoId, todo);
    console.log(res);
    console.log(ProxyState.todos)
  }

  async removeTodo(todoId) {
    await api.delete(url + todoId)
    let index = ProxyState.todos.findIndex(t => t.id == todoId)
    ProxyState.todos.splice(index, 1)
    ProxyState.todos = ProxyState.todos
  }
}

const todoService = new TodoService();
export default todoService;