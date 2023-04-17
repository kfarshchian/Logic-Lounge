
const lorum = [
  'lorem',
  'imsum',
  'dolor',
  'sit',
  'amet',
  'consectetur',
  'adipiscing',
  'elit',
  'curabitur',
  'vel',
  'hendrerit',
  'libero',
  'eleifend',
  'blandit',
  'nunc',
  'ornare',
  'odio',
  'ut',
  'orci',
  'gravida',
  'imperdiet',
  'nullam',
  'purus',
  'lacinia',
  'a',
  'pretium',
  'quis',
];

const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
  
const getRandomWord = () => `${lorum[genRandomIndex(lorum)]}`;

const generateMessage = (words) => {
  let message = '';
  for (let i = 0; i < words; i++) {
    message += ` ${getRandomWord()}`;
  }
  return message;
};

// function getMessages(){
//   const messages = []
//   for(let i = 0; i < (Math.floor(Math.random()*35)+15);i++) {
//     messages.push(generateMessage(Math.floor(Math.random()*15)+15));
//   }
//   return messages
// }

// console.log(getMessages());
module.exports = generateMessage;