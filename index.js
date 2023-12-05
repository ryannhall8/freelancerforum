const spanCount = document.querySelector('#spanCount');
const spanAveragePrice = document.querySelector('#spanAveragePrice');
const ul = document.querySelector('ul')

const freelancers = [
  {name: 'Dr. Carrot', price: 40, occupation: 'chef'},
  {name: 'Dr. Sparkle', price: 50, occupation: 'teacher'},
  {name: 'Dr. Pink', price: 30, occupation: 'artist'},
  {name: 'Dr. Bizarre', price: 60, occupation: 'developer'}
];

const occupations = [
  "chef",
  "teacher",
  "artist",
  "developer"
];

const names = [
    "Dr. Carrot",
    "Dr. Sparkle",
    "Dr. Pink",
    "Dr. Bizarre"
]

spanCount.innerHTML = freelancers.length;

let sum = 0;
freelancers.forEach((freelancer)=> {
    sum = sum + freelancer.price;
});

const average = sum / freelancers.length;

spanAveragePrice.innerHTML = average;

const html = freelancers.map((freelancer)=> {
    return `
    <li>
      ${freelancer.name} is a ${freelancer.occupation} and cost $${freelancer.price} per hour
    </li>
    `;
}).join('')

ul.innerHTML = html;