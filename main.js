function end(text = '') {
  () => alert(text)
}

var machine = {
  init: {
    text: 'Do you really need it?',
    yes: 'once',
    no: 'end',
    endWith: 'Don’t buy it!',
  },
  once: {
    text: 'Do you only need it once?',
    yes: 'borrow',
    no: 'second_hand',
  },
  borrow: {
    text: 'Can you borrow it?',
    yes: 'end',
    endWith: 'Borrow it!',
    no: 'rent',
  },
  rent: {
    text: 'Can you rent it?',
    yes: 'end',
    endWith: 'Rent it!',
    no: 'second_hand',
  },
  second_hand: {
    text: 'Can you buy it second-hand?',
    yes: 'end',
    endWith: 'Buy it second-hand!',
    no: 'sustainable',
  },
  sustainable: {
    text: 'Can you find a sustainable business that sells it?',
    yes: 'end',
    endWith: 'Buy it from a sustainable business!',
    no: 'local',
  },
  local: {
    text: 'Can you find a small local company selling it?',
    yes: 'end',
    endWith: 'Buy it from a small local company!',
    no: 'quality',
  },
  quality: {
    text: 'Can you find it in a style and quality that will last for a long time?',
    yes: 'end',
    endWith: 'Buy it in a style and quality that will last for a long time!',
    no: 'small',
  },
  small: {
    text: 'Can you buy it from a small, non-local company?',
    yes: 'end',
    endWith: 'Buy it from a small, non-local company!',
    no: 'make',
  },
  make: {
    text: 'Can you make it?',
    yes: 'end',
    endWith: 'Make it!',
    no: 'really',
  },
  really: {
    text: 'Do you really, really need it?',
    yes: 'buy',
    no: 'end',
  },
  buy: { text: 'Buy it!' },
  end: 'end',
}

window.onload = function() {
  var question = document.getElementById('question')
  var yes = document.getElementById('yes')
  var no = document.getElementById('no')
  var current = machine.init
  stepTo(current)

  function stepTo(step) {
    if (step === 'end' || step.text === 'Buy it!') {
      question.innerText = step.text || current.endWith || 'Don’t buy!'
      yes.style.display = 'none'
      no.style.display = 'none'
    } else {
      question.innerText = step.text
      current = step
    }
  }

  yes.onclick = function() {
    stepTo(machine[current.yes])
  }

  no.onclick = function() {
    stepTo(machine[current.no])
  }
}
