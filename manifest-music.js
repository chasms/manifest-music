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

let volumeControl = document.querySelector("input[name='volume']")
volumeControl.addEventListener("change", changeVolume, false)

function changeVolume(event) {
  gainNode.gain.value = volumeControl.value
}

$(".slider").slider().slider("float")

// set gain to volume control slider

gainNode.gain.value = volumeControl.value

$("#flat-slider")
    .slider({
        max: 50,
        min: 0,
        range: true,
        values: [15, 35]
    })
    .slider("pips", {
        first: "pip",
        last: "pip"
    });

$("#flat-slider-vertical-1, #flat-slider-vertical-2, #flat-slider-vertical-3")
    .slider({
        max: 25,
        min: 0,
        range: "min",
        value: 20,
        orientation: "vertical"
    })
    .slider("pips", {
        first: "pip",
        last: "pip"
    })
    .slider("float");
