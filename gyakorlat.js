
// 1 feladat forditott tomb

const tomb1 = [1,2,3,4,5,6];
console.log('tomb1', tomb1);

const forditott = tomb1.reverse ();
console.log('tomb1 forditott', forditott);

// 2 feladat paros szamok

let tomb2 = [10,21,30,39,42];
console.log('tomb2',tomb2);
let paros = []
for (let i = 0; i < tomb2.length; i++)
{
    if (tomb2[i] % 2 === 0)
   paros.push(tomb2[i]); 
}
console.log('tomb2 paros', paros);

// 3 feladat tomb elem szorzasa 2-vel

let tomb3 = [1,2,4,6,9];
console.log('tomb3', tomb3);
for (var i=0; i<tomb3.length; i++) {
    tomb3[i] *= 2;
}
console.log('tomb3 Szorzas',tomb3);

// 4 feladat szam megvizsgalas a tombben

const tomb4 = [6,11,22,36,41];
console.log('tomb4', tomb4);
console.log('benne van a 11 =',tomb4.includes = (10));

//vagy

const talalt = tomb4.find((element) => element > 11);

console.log('vagy talalt', talalt);

// 5 feladat novekvo sorrend
    
const tomb5 = [23,4,126,7,32];
console.log('tomb5', tomb5);
tomb5.sort((a, b) => a - b);
console.log('tomb5 novekvo', tomb5);

// 6 feladat duplikalt

let tomb6 = [2,4,4,7,9,12,22,9];
console.log('tomb6', tomb6)

function duplikalteltavolitas(tomb6) 
{
return tomb6.filter((item,
  index) => tomb6.indexOf(item) === index);
}
console.log('tomb6 duplikalt', duplikalteltavolitas(tomb6));

// II szezon

// 1 feladat azonos index osszeadas

const pelda1 = [1,2,3,4,5]
const pelda2 = [4,5,6,7,8]
let p1p2osszege =[pelda1.length]

  for (let i = 0; i< pelda1.length; i++ ){
    p1p2osszege[i] = pelda1[i] + pelda2[i];
  }
  
  console.log('pelda1,2 oszegge',p1p2osszege);

// 2 feladat

let forditottszorzas =[pelda1.length]

for (let i = 0; i< pelda1.length; i++ ){
  forditottszorzas[i] =pelda1[i] * pelda2[pelda2.length-i-1];
}

console.log('pelda1,2forditottszorzata',forditottszorzas);

// 3 feladat

 const duplikalt = pelda1.filter(i => pelda2.includes(i));
 console.log('kozosszamok:',duplikalt)

 //for (let i = 0; i< pelda1.length; i++ ){ 
 //if (pelda1.filter(i => pelda2.includes(i))){
 // return true ; 
 //} 
 // return false;
 // }
 

 