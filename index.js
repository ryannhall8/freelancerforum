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
function render (){
    spanCount.innerHTML = freelancers.length;

    let sum = 0;
    freelancers.forEach((freelancer)=> {
        sum = sum + freelancer.price;
    });

    const average = sum / freelancers.length;

    spanAveragePrice.innerHTML = average.toFixed(2);

    const html = freelancers.map((freelancer)=> {
        return `
        <li>
        ${freelancer.name} is a ${freelancer.occupation} and cost $${freelancer.price.toFixed(2)} per hour
        </li>
        `;
    }).join('')

    ul.innerHTML = html;
}

render();

const interval = setInterval(()=> {
    const nameIndex = Math.floor(Math.random()*names.length);
    const name = names[nameIndex];
    const occupationIndex = Math.floor(Math.random()*occupations.length);
    const occupation = occupations[occupationIndex];
    const price = Math.ceil(Math.random()*60);
    const randomFreelancer = {
        name: name,
        occupation: occupation,
        price: price
    };
    freelancers.push(randomFreelancer);
    render();
    if(freelancers.length === 10){
        clearInterval(interval);
    }
}, 1000)