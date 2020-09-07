export default class Todo {
  constructor({ _id, description, user, completed }) {
    this.id = _id;
    this.completed = completed
    this.description = description
    this.user = user
  }

  get Template() {
    return /*html */ `
      <div class="d-flex justify-content-between">
        ${this.checkedTemplate}<i class="red grow fa fa-trash" onclick="app.todoController.removeTodo('${this.id}')"></i>
      </div>
    `
  }
  get checkedTemplate() {
    if (this.completed) {
      return `<li class="mt-1 text-strike"><input type="checkbox" checked class="mr-1 grow pointer" onclick="app.todoController.toggleTodoStatus('${this.id}')">${this.description}</li>`
    } return `<li class="mt-1"><input type="checkbox" class="mr-1 grow pointer" onclick="app.todoController.toggleTodoStatus('${this.id}')">${this.description}</li>`
  }
}