class OscillatorView {
  static renderListItems($target, oscillators) {
    let listItems = oscillators.map(this.listItemTemplate)
    $target.append(listItems)
  }

  static listItemTemplate(oscillator, index){
    return `<a id="${index}" class="oscillator" href="#">Oscillator ${index + 1}</a>
    `
  }
}
