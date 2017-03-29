class OscillatorView {
  static renderListItems($target, oscillators) {
    let listItems = oscillators.map(this.listItemTemplate)
    $target.append(listItems)
  }

  static listItemTemplate(oscillator){
    return `<li class="oscillator">
      <div>Oscillator</div>
    </li>
    `
  }
}
