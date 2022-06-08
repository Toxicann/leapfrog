// function to render the reverse star pattern
// *****
// ****
// ***
// **
// *

const reverseStar = ()=>{
    for ( let i = 5; i >0; i--){
        console.log('*'.repeat(i));
    }
}

reverseStar();

// Define an object containing information about yourself. The object needs to include 'name', 'address', 'emails', 'interests' and 'education'. The 'education' key needs to be an array of objects containing keys 'name' and 'enrolledDate'.


const myInfo = {
    "name":"Anush Karki",
    "address": "Itahari",
    "emails": "anushkarki007@gmail.com",
    "interest":"e-sports",
    "education":[
        {
            "name": "Future Stars SS",
            "enrolledDate":"Long ago"
        },
        {
            "name": "Vishwa Adarsha HSS",
            "enrolledDate":"Sometime ago"
        },
        {
            "name": "Trinity Int'n college",
            "enrolledDate":"2017"
        }
    ]
}

// Using the object defined previously iterate over the 'education' key and print a list of output in the console as follows:
// Name: ABC School of Schoolery, Date: 2000
// Name: BCD School of Trickery, Date: 2006



for(let i=0; i<myInfo.education.length; i++){
    let name = myInfo.education[i].name;
    let date = myInfo.education[i].enrolledDate;

    console.log(`Name: ${name}, Date: ${date}`);

}

// Write a function that searches for an object by a specific key value in an array of objects:

var fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
]

const searchByName = (objectName, itemName) =>{
        for(let i=0; i<objectName.length; i++){
            if (itemName == objectName[i].name.toLowerCase()){
                console.log(objectName[i]);
            }
        }
}

searchByName(fruits, 'banana');

const searchByKey = (object, key, item)=>{
    for(let i=0; i<object.length; i++){
        if (item == object[i][key].toLowerCase()){
            console.log(object[i])
        }
    }
}

searchByKey(fruits, 'name', 'apple');

// Write a function that transforms an array of inputs into a new array based on a provided transformation function.
// var numbers = [1, 2, 3, 4];

// function transform(collection, tranFunc) { …TODO }

// var output = transform(numbers, function(num) {
//     return num * 2;
// });
// output should be [2, 4, 6, 8]

var numbers = [1, 2, 3, 4];
newArr = [];
function transform(collection, tranFunc) {
    for(let items of collection){
       newArr.push(tranFunc(items))
    }
}

var output = transform(numbers, function(num) {
    return num * 2;
});

console.log(newArr);

// Write a program to sort an array of object by a target key. The original array should remain unchanged.


var arr = [
    {
    id: 1,
    name: 'John',
}, {
    id: 2,
    name: 'Mary',
}, {
    id: 3,
    name: 'Andrew',
}
];

function sortBy(array, key) {
    const arrayCpy = [...array]
    for (let i =0; i < arrayCpy.length; i++){
        for(let j =0; j < arrayCpy.length -i -1; j++){
            if (arrayCpy[j][key] > arrayCpy[j + 1][key]){
                temp = arrayCpy[j];
                arrayCpy[j] = arrayCpy[j + 1];
                arrayCpy[j + 1] = temp;
            }
        }
    }
    console.log(arrayCpy);
}


var sorted = sortBy(arr, 'name');
console.log(arr);

// normalization

var input = {
    '1': {
      id: 1,
      name: 'John',
      children: [
        { id: 2, name: 'Sally' },
        { id: 3, name: 'Mark', children: [{ id: 4, name: 'Harry' }] }
      ]
    },
    '5': {
      id: 5,
      name: 'Mike',
      children: [{ id: 6, name: 'Peter' }]
    }
};

temp = {}
output = {}

var normalize = (input) =>{
    for(var items in input){
        if(input[items]['children']){
            temp['id'] = input[items]['id'];
            temp['name'] = input[items]['name'];
            temp['children'] = input[items]['children'].map((object)=>{
                return object['id'];
            })
            output[`${input[items]['id']}`] = temp;
            temp = {};
            normalize(input[items]['children']);
            
        }
        else{
            temp['id'] = input[items]['id'];
            temp['name'] = input[items]['name'];
            output[`${input[items]['id']}`] = temp;
            temp = {};
        }
  
    }

}


normalize(input);
console.log(output);