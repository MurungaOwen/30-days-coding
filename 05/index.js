const data = [
    "Assembly",
    "Bash",
    "C",
    "C++",
    "C#",
    "Clojure",
    "COBOL",
    "Crystal",
    "D",
    "Dart",
    "Elixir",
    "Elm",
    "Erlang",
    "F#",
    "Fortran",
    "Go",
    "Groovy",
    "Haskell",
    "HTML",
    "Java",
    "JavaScript",
    "Julia",
    "Kotlin",
    "Lisp",
    "Lua",
    "MATLAB",
    "Nim",
    "Objective-C",
    "OCaml",
    "Perl",
    "PHP",
    "Prolog",
    "Python",
    "R",
    "Ruby",
    "Rust",
    "Scala",
    "Scheme",
    "Shell",
    "SQL",
    "Swift",
    "TypeScript",
    "VHDL",
    "Visual Basic",
    "Zig"
];
const output = document.getElementById("output");
let resultArray = []
document.getElementById("search").addEventListener("input", (e) => {
    let query = e.target.value.toLowerCase();
    output.innerHTML = ""; // Clear previous results

    // If the query is empty, do not show any results
    if (query === "") {
      output.style.border = "none"
      return;
    } else {
      output.style.border = "2px solid black"
      output.style.display = "block";
  
    }
    

    resultArray = data.filter(value => value.toLowerCase().startsWith(query));

    if (resultArray.length === 0) {
        output.innerText = "No Such language Ninja";
    } else {
        resultArray.forEach(result => {
            const resultItem = document.createElement('div');
          resultItem.className = 'result-item';
            resultItem.textContent = result;
            output.appendChild(resultItem);
          
          resultItem.addEventListener('click', () => {
                document.getElementById("search").value = result;
                output.innerHTML = ""; // Clear results
                output.style.display = "none"; // Hide the output box
            });
        });
    }
});

document.getElementById("done").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default form submission

    const selectedLanguage = document.getElementById("search").value;
    console.log(`Fetching data related to: ${selectedLanguage}`);

    // Simulate fetching data (replace with actual API call)
    setTimeout(() => {
        console.log(`Data fetched successfully for: ${selectedLanguage}`);
    }, 3000); // Simulating a delay for fetching data
});