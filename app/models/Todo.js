export default class Todo {

  constructor({ _id, description, user, completed }) {
    this.id = _id;
    this.completed = completed
    this.description = description
    this.user = user
  }

  get Template() {
    return `
      <input onclick="app.todoController.toggleTodoStatus('${this.id}')" type="checkbox" name="${this.id}">
      <label for="List-Item">${this.description}</label><br>
    `
  }
}