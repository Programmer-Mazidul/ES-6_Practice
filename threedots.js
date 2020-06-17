const ages = [12, 14, 17, 18];
const ages2 = [ 17, 19, 20, 23];
const ages3 = [20,30, 34,40];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2  = [...ages, ...ages2, ...ages3];

// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [650,450,250,850];

//const maximum = Math.max(business, minister,sochib);
const maximum = Math.max(...takaPoisa);
console.log(maximum);