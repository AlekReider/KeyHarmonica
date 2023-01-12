window.onload = () => {
  const playKey = {
    'q': {
      frequency: 220,
      toPlay: false,
    },
    'a': {
      frequency: 233.1,
      toPlay: false,
    },
    'z': {
      frequency: 246.9,
      toPlay: false,
    },
    'w': {
      frequency: 261.6,
      toPlay: false,
    },
    's': {
      frequency: 277.2,
      toPlay: false,
    },
    'x': {
      frequency: 293.7,
      toPlay: false,
    },
    'e': {
      frequency: 311.1,
      toPlay: false,
    },
    'd': {
      frequency: 329.6,
      toPlay: false,
    },
    'c': {
      frequency: 349.2,
      toPlay: false,
    },
    'r': {
      frequency: 370,
      toPlay: false,
    },
    'f': {
      frequency: 392,
      toPlay: false,
    },
    'v': {
      frequency: 415.3,
      toPlay: false,
    },
    't': {
      frequency: 440,
      toPlay: false,
    },
    'g': {
      frequency: 466.2,
      toPlay: false,
    },
    'b': {
      frequency: 493.9,
      toPlay: false,
    },
    'y': {
      frequency: 523.3,
      toPlay: false,
    },
    'h': {
      frequency: 554.4,
      toPlay: false,
    },
    'n': {
      frequency: 587.3,
      toPlay: false,
    },
    'u': {
      frequency: 622.3,
      toPlay: false,
    },
    'j': {
      frequency: 659.3,
      toPlay: false,
    },
    'm': {
      frequency: 698.5,
      toPlay: false,
    },
    'i': {
      frequency: 740,
      toPlay: false,
    },
    'k': {
      frequency: 784,
      toPlay: false,
    },
    ',': {
      frequency: 830.6,
      toPlay: false,
    },
    'o': {
      frequency: 880,
      toPlay: false,
    },
    'l': {
      frequency: 932.3,
      toPlay: false,
    },
    '.': {
      frequency: 987.8,
      toPlay: false,
    },
    'p': {
      frequency: 1047,
      toPlay: false,
    },
    ';': {
      frequency: 1109,
      toPlay: false,
    },
    '/': {
      frequency: 1175,
      toPlay: false,
    },
    '[': {
      frequency: 1245,
      toPlay: false,
    },
    '\'': {
      frequency: 1319,
      toPlay: false,
    },
    ']': {
      frequency: 1397,
      toPlay: false,
    },
  }


  const context = new AudioContext();
  const vol = context.createGain();
  vol.gain.value = 0.3; // from 0 to 1, 1 full volume, 0 is muted
  vol.connect(context.destination); // connect vol to context destination
  const btnPlay = document.getElementById('btnPlay');

  window.onkeydown = (e) => {
    console.log(e);
    console.log(playKey[e.key]);
    if (playKey[e.key].toPlay === false) {
      console.log(playKey[e.key].osc);
      context
        .resume()
        .then(() => {
          playKey[e.key].toPlay = true;
          if (!playKey[e.key].osc) {
            playKey[e.key].osc = context.createOscillator();
            playKey[e.key].osc.connect(vol); // connect osc to vol
            // playKey[e.key].osc.connect(context.destination);
            playKey[e.key].osc.frequency.value = playKey[e.key].frequency;
            playKey[e.key].osc.start();  
          }

      });
    }
  }

  window.onkeyup = (e) => {
    console.log(e);
    if (playKey[e.key].toPlay === true) {
      playKey[e.key].toPlay = false;
      playKey[e.key].osc.stop();
      delete playKey[e.key].osc;
    }
  }
}