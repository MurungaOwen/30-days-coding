const userObject = {
    "name": "hood",
    "age": 23,
    "languages": [
        "Javascript",
        "Python",
        "C#"
    ],
    getDetails: function(){
        return `${this.name} does ${this.languages.join(">>")}`
    }
}
console.log(userObject.getDetails())

// Getting object keys using Object.keys()

const userCopy = Object.assign({}, userObject) // create a copy of user object
console.log(userCopy)

const userObjKeys= Object.keys(userObject)
console.log("user keys are: ", userObjKeys)

const userObjValues = Object.values(userObject)
console.log("values are: ", userObjValues)

const userObjArray = Object.entries(userObject)
console.log("entries are: ", userObjArray)

// check if certain property exists
console.log(userObject.hasOwnProperty("languages"))

