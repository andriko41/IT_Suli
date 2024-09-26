
// 1 feladat forditott tomb

const tomb1 = [1,2,3,4,5,6];
console.log('tomb1', tomb1)

const forditott = tomb1.reverse ()
console.log('forditott', forditott)

// 2 feladat paros szamok

let tomb2 = [10,21,30,39,42];
let paros = []
for (let i = 0; i < tomb2.length; i++)
{
    if (tomb2[i] % 2 == 0)
   paros.push(tomb2[i]); 
}
console.log('paros', paros)

// 3 feladat tomb elem szorzasa 2-vel

let tomb3 = [1,2,4,6,9];
for (var i=0; i<tomb3.length; i++) {
    tomb3[i] *= 2;
}
console.log('tomb3',tomb3)

// 4 feladat szam megvizsgalas a tomben


console.log([6,11,22,36,41].includes(11))

//vagy

const tomb4 = [6,11,22,36,41];

const talalt = tomb4.find((element) => element > 10);

console.log(talalt);

// 5 feladat novekvo sorrend
    
const tomb5 = [23,4,126,7,32];
tomb5.sort((a, b) => a - b)
console.log(tomb5)

// 6 feladat duplikalt

let tomb6 = [2,4,4,7,9,12,22,9];

function duplikalteltavolitas(tomb6) 
{
return tomb6.filter((item,
  index) => tomb6.indexOf(item) === index);
}
console.log(duplikalteltavolitas(tomb6));
