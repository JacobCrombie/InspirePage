export default class Quote {

  constructor({ body, author }) {
    this.body = body
    this.author = author
  }

  get Template() {
    return `
    <h4 class="text-shadow bg-transparent" data-toggle="tooltip" data-placement="right" title="-${this.author}">"${this.body}"</h4>
    `
  }
}