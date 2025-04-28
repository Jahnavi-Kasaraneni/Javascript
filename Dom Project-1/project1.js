//variables 

let btn=document.querySelector("#new-quote");
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[{
    quote:`"I do the very best I know how -they very best I can and  I mean to keep on doing so until the end."`,
    person:`"Abraham Lincoln"`
},
{
    quote: "Be the change that you wish to see in the world.",
    person: "Mahatma Gandhi"
},
{
    quote: "In the middle of every difficulty lies opportunity.",
    person: "Albert Einstein"
},
{
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill"
},
{
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs"
},
{
    quote: "Happiness is not something ready made. It comes from your own actions.",
    person: "Dalai Lama"
},
{
    quote: "Believe you can and you're halfway there.",
    person: "Theodore Roosevelt"
},
{
    quote: "Don’t count the days, make the days count.",
    person: "Muhammad Ali"
},
{
    quote: "Act as if what you do makes a difference. It does.",
    person: "William James"
},
{
    quote: "It always seems impossible until it’s done.",
    person: "Nelson Mandela"
},
{
    quote: "You miss 100% of the shots you don’t take.",
    person: "Wayne Gretzky"
},
];

btn.addEventListener('click',()=>{
    let random=Math.floor(Math.random() * quotes.length);
    
    quote.innerText=quotes[random].quote;

    person.innerText=quotes[random].person;
})