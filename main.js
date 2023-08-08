// let res = (num , num2)=> num + num2
// let res2 = (num , num2)=> num - num2
// let res3 = (num , num2)=> num * num2
// let res4 = (num , num2)=> num / num2
// console.log(res(2,2));



// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


// const OddNumbers = arr.filter(function (i){
//     return  i % 2 != 0
// });

// console.log(arr);


// const FirstNumber = arr.find(function (i){
//     return  i % 2 == 0
// });

// console.log(arr);



// arr.forEach(( value , index)=>{
//     arr[index]
// });

// console.log(arr);


// let obj = [
//     {
//     name:"mohammed",
//     height:170,
//     gender:male,
//     mass:432,
//     eyeColor:black,
//    },

//    {
//     name:"fahad",
//     height:180,
//     gender:male,
//     mass:323,
//     eyeColor:"blue",
//    },

//    {
//     name:"nura",
//     height:160,
//     gender:male,
//     mass:677,
//     eyeColor:blac;,
//    },

//    {
//     name:"mohammed",
//     height:170,
//     gender:male,
//     mass:432,
//     eyeColor:black,
//    },
// ]


characters = [
    {
        "name": "Luke Skywalker",
        "height": 1.77,
        "gender": "male",
        "mass": 77,
        "eyecolor": "brown"
    },
    {
        "name": "Leia Organa",
        "height": 1.60,
        "gender": "female",
        "mass": 56,
        "eyecolor": "blue"
    },
    {
        "name": "Han Solo",
        "height": 1.80,
        "gender": "male",
        "mass": 80,
        "eyecolor": "brown"
    },
    {
        "name": "Chewie",
        "height": 222,
        "gender": "male",
        "mass": 190 ,
        "eyecolor": "black"
    },
    {
        "name": "R2-D2",
        "height": 1.06,
        "gender": "unknown",
        "mass": 32.2,
        "eyecolor": "red"
    }
]

// Find
// Get first name that has blue eyes
let firstNmae = characters.find((val)=>{
    return val.eyecolor === "blue"
});
console.log(firstNmae);

// Get first gender that is his mass is over 50
let firstGender =characters.find((e)=> e.mass > 50);
console.log("first gender : " +  firstGender.gender)

// FILTER
// Get characters with height less than 200
let lessHeight = characters.filter((e) => e.height < 200);
console.log(lessHeight);
// Get all male characters
let allMale = characters.filter((e) => e.gender == "male");
console.log(allMale)


// MAP
// Get array of all names only
let allName = characters.map((e) => e.name);
console.log(allName);
// Get array of all heights only
let allHeight = characters.map((e) => e.height);
console.log(allHeight);


// SORT
// Sort by mass
let SortbyMass = characters.sort((a , b) => a.mass - b.mass );
console.log(SortbyMass);
// Sort by height
let SortbyHeight = characters.sort((a , b) => a.height - b.height );
console.log(SortbyHeight);

// EVERY
// Does every character have mass more than 40?
let massMore = characters.every((e) => e.mass > 40 );
console.log(massMore);
// Is every character shorter than 200?
let characterShorter = characters.every((e) => e.height < 222 );
console.log(characterShorter);


// SOME
// Is there at least one character with blue eyes?
let isThereblueeyes = characters.some((e) => e.eyecolor == "blue" );
console.log(isThereblueeyes);
// Is there at least one character taller than 210?
let characterTaller = characters.some((e) => e.height > 210 );
console.log(characterTaller);
