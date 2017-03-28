// create web audio api context
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

// create Oscillator and gain node
var oscillator1 = audioCtx.createOscillator();
var oscillator2 = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

// connect oscillator to gain node to speakers

oscillator1.connect(gainNode);
oscillator2.connect(gainNode);
gainNode.connect(audioCtx.destination);

// create initial theremin frequency and volumn values

var maxFreq = 6000;
var maxVol = 0.02;

var initialFreq = 30;
var initialVol = 1.000;

// set options for the oscillator


oscillator1.detune.value = 100; // value in cents
oscillator1.type = 'sawtooth'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
oscillator1.frequency.value = 30; // value in hertz
oscillator2.detune.value = 100; // value in cents
oscillator2.type = 'triangle'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
oscillator2.frequency.value = 100; // value in hertz
oscillator1.start(0);
oscillator2.start(0);

gainNode.gain.value = initialVol;

// mute button

var mute = document.querySelector('.mute');

mute.onclick = function() {
  if(mute.getAttribute('data-muted') === 'false') {
    gainNode.disconnect(audioCtx.destination);
    mute.setAttribute('data-muted', 'true');
    mute.innerHTML = "Unmute";
  } else {
    gainNode.connect(audioCtx.destination);
    mute.setAttribute('data-muted', 'false');
    mute.innerHTML = "Mute";
  };
}
