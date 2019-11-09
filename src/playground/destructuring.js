//
//
//objrct destructuring

// const person={
//     name : "andrew",
//     age:27,
//     location:{
//         city:"philly",
//         temp:92
//     }
// }
// const {name :firstName ='Anonymus' , age} = person;
// console.log(`${firstName} is ${age}`);

// const { city,temp:temprature } =person.location;
// if(city && temprature){
//     console.log(`it is ${temprature} in ${city}`);
// }

// const book={
//     name : 'ego enemy',
//     author : 'ryan holiday',
//     publisher :{zzxcv 
//         name : 'penguin'
//     }
// }
// const { name : publisherName = "self-published" }= book.publisher;

// console.log(publisherName);


//
//array desructring
//
const adress=['1299 s Jupier street','philly','pennsylvania','13658'];
const [,city,state='new york']=adress;
console.log(`you are in ${city} ${state}`);

const item =['coffee (hot)','$2.00','$2.50','$2.75'];

const [drink, ,mediumCost]=item;

console.log(`a medium ${drink} costs ${mediumCost}`);