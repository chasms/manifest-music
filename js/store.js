class Store {
  constructor() {
    this.state = {}
  }

  add(resource, object){
    this.state[resource] = this.state[resource] || []
    this.state[resource][object.id] = object
  }

  find(resource, id){
    this.state[resource] = this.state[resource] || []
    return this.state[resource][id]
  }
}
