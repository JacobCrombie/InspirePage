export default class Todo {

  constructor({ _id, description, user, completed = false }) {
    this.id = _id;
    this.completed = completed
    this.description = description
    this.user = user
  }

  get Template(){
    return `
    
    `
  }
}