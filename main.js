var review= [
{name: 'Baraka ', job:'Model, nutritionist' , text: 'This is the best school ever fellows! it is filled with a delightful and friendly environment for effective growth', img: 'img/leg.jpg'},
{name: 'Vanesssa ', job:'Musician, Artist' , text: 'The pace at which the learners work is incredible, thumbs up guys. You have really outdone yourselves, again!' , img:'img/yel.jpg'},
{name: 'Montague ', job:'Tutor, Chemical engineer' , text: 'My child really relishes every moment of the coding lessons  and has already learnt how to touch-type, and I am very  thrilled! Thumbs up team :)' ,img: 'img/black.jpg'}
];

//getting elements for reviews

const pic = document.querySelector('img#pic');
const person = document.querySelector('span#name');
const occupation = document.querySelector('h4#job');
const comment= document.querySelector('#comment');
const btn = document.querySelector('button#btn');

let count = 0;



btn.addEventListener('click', clicked);
function clicked(){
  
   
    count++;
    stan();
  

}

function stan(){

    if(count===3){
        count=0;
    }
   pic.src= review[count].img;
    occupation.textContent= review[count].job;
    person.textContent= review[count].name;
    comment.textContent= review[count].text;

}

//changing card large  class to card horizontal for material classes

const card = document.querySelectorAll('#horizon');
const B = document.querySelectorAll('#clicked');
const foto = document.querySelectorAll('#foto');

B.forEach(function(eish){
  eish.addEventListener('click' ,Z);
  function Z(){
  card[0].className='card horizontal'
  foto[0].remove();
  }

  

});


 

