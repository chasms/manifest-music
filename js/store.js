class Store {
  constructor() {
    this.state = {}
  }

  add(resource, object){
    this.state[resource] = this.state[resource] || {} // Yuck
    this.state[resource][object.id] = object
  }

  find(resource, id){
    this.state[resource] = this.state[resource] || {} // Yuck
    return this.state[resource][id]
  }
}
