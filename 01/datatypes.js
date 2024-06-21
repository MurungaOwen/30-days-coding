/**
 * VARIABLES
 */
let grade = "B"
grade = "C"
// use let when the variable value changes
// console.log(grade)

const PI = 3.14
// use const when the value is constant

/**
 *ARRAYS
*/
const students = Array() // new Array() or []
students.push("hola") // add element to array
// console.log(students)

let classes = "ABCDEFG"
const chars = classes.split('') // use split to create an array from string
//results is [A', 'B', 'C','D', 'E', 'F','G']

// const numbers = "1 + 2 + 3"
// console.log(numbers.split("+")) -->split by using +  from them
const emptyArray = Array(9) //9 empty spaces created
emptyArray.fill("hood") // fill the spaces with hood
/**
*console.log(emptyArray);
    [
    'hood', 'hood',
    'hood', 'hood',
    'hood', 'hood',
    'hood', 'hood',
    'hood'
    ]
*/
// merge arrays
const work = ["all", "work", "and"]
const play = ["no", "play"]
// console.log(work.concat(play))
/**
 * [ 'all', 'work', 'and', 'no', 'play' ]
 */

//check if item exists in array : `indexOf`
// console.log(work.indexOf("work"))
// returns the index if it exists else it returns -1

// lastIndexOf --> returns the last occurrence of an item
 //console.log(work.lastIndexOf("and"))

// check if item exists in an array
    //console.log(work.includes("work"))
// RETURNS: true if exists else false

// check if the data type is Array : return true if array else false
    //console.log(Array.isArray(work))

// convert array to string
    //console.log(work.join("<>")) // returns`all<>work<>and`

// work.splice() // empty an array
    //console.log(["hola", "there", "hood"].splice(1))// removes hood
    //console.log(["hola", "there", "hood"].splice())
/**
 *  const nums = [1,2,3,4,5]
    nums.pop()
    console.log(nums)
    // removes last item from array
 */

//console.log(work.shift()) // remove first item and return item
work.unshift("hood said") // add item to beginning of an array
console.log(work)








