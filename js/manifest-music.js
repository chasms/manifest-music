// create web audio api context
var AudioContext = window.AudioContext || window.webkitAudioContext
var audioCtx = new AudioContext()
let oscList = []

let gainNode = audioCtx.createGain()

// create oscillators here:

var oscillator1 = osc()
var oscillator2 = osc(100, 'triangle')

gainNode.connect(audioCtx.destination) // connect gain node to speakers

// start oscillators here:

oscList.forEach(oscillator => {
  oscillator.start(0)
})

// mute button

var mute = document.querySelector('.mute')

mute.onclick = function() {
  if(mute.getAttribute('data-muted') === 'false') {
    gainNode.disconnect(audioCtx.destination)
    mute.setAttribute('data-muted', 'true')
    mute.innerHTML = "Unmute"
  } else {
    gainNode.connect(audioCtx.destination)
    mute.setAttribute('data-muted', 'false')
    mute.innerHTML = "Mute"
  }
}

// volume control

$("#volume").slider({
  min: 0.0,
  max: 1.0,
  value: 0.5,
  step: 0.1,
  //this gets a live reading of the value and prints it on the page
  slide: function(event, ui) {
    gainNode.gain.value = ui.value
  }
})
.slider("pips",{
  rest: "label"
})

// set gain to volume control slider

gainNode.gain.value = volumeControl.value
