//REVIEW let elem = document.querySelector('input')

// if (completed) {
//   elem.setAttribute('checked')
// }
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
        <li class="mt-1"><input type="checkbox" class="mr-1" onclick="app.todoController.toggleTodoStatus()">${this.description}</li><i class="red grow fa fa-trash"
                onclick="app.todoController.removeTodo('${this.id}')"></i>
      </div>
    `
  }
}