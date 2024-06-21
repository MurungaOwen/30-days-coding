const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]
// get length of array
console.log(`length of array is: ${countries.length}`)

// get first item
console.log(`first item in array is ${countries[0]}`)

// Change each country name to uppercase one by one and print them out
let capital = []
countries.forEach((value)=>{
    capital.push(value.toUpperCase())
})
console.log("caps version", capital)

// Print the array like as a sentence
console.log(`sentence array: ${countries.join(' ')}`)

/**
 * Check if a certain country exists in the itCompanies array. 
 * If it exist return the country 
 * else return a country is not found
 *  */ 
countries.indexOf("kenya") ? console.log("kenya") : console.log("Not found");

/**
 * Filter out countries
 *  which have more than one 'a' without the filter method
*/
let aCountries = []
countries.forEach((country)=>{
    let numberOfAs = 0
    for(let start = 0; start < country.length; start++){
        if(country[start].toLowerCase() === "a") {
            numberOfAs ++
        }
    }
    numberOfAs > 1 ? aCountries.push(country) : null
})
console.log("more than 2 A's >>>", aCountries)

