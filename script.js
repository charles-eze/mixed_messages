// Creating a messages object with an array properties.
const messages = {
    intro: [
      'Hello, welcome to this amazing repo!',
      'This is the moment you have been waiting for.',
      'What would life be without developers?',
      'Oh no! how can you be so awesome?',
      'Would you love to see some magic?'
    ],
    exit: [
      'Look around you, there is so much to learn.',
      'Congratulations, it is your time to shine!',
      'I mean, there would be no javascript, oh no!!!',
      'It seems you were created on a sunday? you look gorgeous.',
      'Oh well, get me a computer and put some js on it.'
    ]
  }
  
// get a random index number;
let randomIndex = num => {
    return Math.floor(Math.random() * num)
}


 // get random messages
const random1 = `${messages.intro[randomIndex(messages.intro.length)]}`
const random2 = ` ${messages.exit[randomIndex(messages.exit.length)]} `
  
// log the messages to console
console.log(random1 , 'Oh hold on a sec!',random2)