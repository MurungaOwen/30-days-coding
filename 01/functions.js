// self invoking functions
;(function(n){
    console.log(`you didnt call me but i am returning ${n}`)
})(23)

/**
 * 9. Higher Order Function
    Higher order functions are functions 
    which take other function as a parameter 
    return a function as a value
    The function passed as a parameter is called callback.
 */
const getIngredients = (...args) => {
    let results = []
    results.push(...args)
    return results
}
function zello(){
    console.log("zillow");
}

function getCooking(ingredientFunction, food){
    return `add ${ingredientFunction} to make ${food}`; 
}
console.log(getCooking(getIngredients("meat", "onions", "tomatos"), "meat stew"))

// setInterval(zello, 1000) after each do this
