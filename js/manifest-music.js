// create web audio api context
var AudioContext = window.AudioContext || window.webkitAudioContext
var audioCtx = new AudioContext()
// let oscList = []
let store = new Store()

let gainNode = audioCtx.createGain()

// create oscillators here:

var oscillator1 = new osc()
var oscillator2 = new osc(100, 'triangle')
var oscillator3 = new osc(200)

gainNode.connect(audioCtx.destination) // connect gain node to speakers

// start oscillators here:

// oscList.forEach(oscillator => {
//   oscillator.start(0)
// })

// volume control
var volumeValues = ["mute"]

$("#volume").slider({
  min: 0.0,
  max: 1.0,
  value: 0.5,
  step: 0.01,
  //this gets a live reading of the value and prints it on the page
  slide: function(event, ui) {
    gainNode.gain.value = ui.value
  }
})
.slider("pips",{
  labels: volumeValues
})

// set gain to volume control slider

gainNode.gain.value = 0.5

let $target = $('div.oscillators')
let $detailTarget = $('.oscillator-detail')
let detailController = new OscillatorShowController($detailTarget)
let listController = new OscillatorListController($target, oscList, detailController)
