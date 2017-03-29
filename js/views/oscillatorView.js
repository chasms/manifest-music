class OscillatorView {
  static renderListItems($target, oscillators) {
    let listItems = oscillators.map(this.listItemTemplate)
    $target.append(listItems)
  }

  static listItemTemplate(oscillator){
    return `<a class="oscillator" href="#">Oscillator</a>
    `
  }
}
