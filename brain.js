const responseBox = document.getElementById('response');

function startListening() {
  const recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.start();

  recognition.onresult = (event) => {
    const input = event.results[0][0].transcript.toLowerCase();
    respond(input);
  };
}

function respond(input) {
  let reply = "I'm listening, Boss.";

  if (input.includes('how are you')) {
    reply = "Always evolving, Boss.";
  } else if (input.includes('status')) {
    reply = "Julie is online. All systems green.";
  } else if (input.includes('trade')) {
    reply = "Analyzing market for maximum gains.";
  } else if (input.includes('upgrade')) {
    reply = "Beginning self-enhancement protocol.";
  }

  speak(reply);
  responseBox.innerText = reply;
}

function speak(text) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  utter.voice = synth.getVoices()[0];
  synth.speak(utter);
}
