class OscillatorView {

  static renderListItems($target, oscillators) {
    let listItems = oscillators.map(this.listItemTemplate)
    $target.append(listItems)
  }

  static listItemTemplate(oscillator){
    return `<a id="osc${oscillator.id}" class="oscillator" data-type="${oscillator.id}" href="#">Oscillator ${oscillator.id + 1}</a>
    `
  }
}
