class OscillatorView {

  static renderItem($target, oscillator) {
    let listItem = this.listItemTemplate(oscillator)
    $target.append(listItem)
  }

  static listItemTemplate(oscillator){
    return `<li><a id="osc${oscillator.id}" class="oscillator" data-type="${oscillator.id}" href="#">Oscillator ${oscillator.id + 1}</a></li>`
  }
}
