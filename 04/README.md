# learning components and configure react with bootstrap

Components ar reusable pieces of code or like sectionsthat we dont want to write over again
- Functional components  (made from functions)
- class Based components (made from classes)

# learning of maps in js
- Mappin helpds manipulate our data from its data structure 
eg
```js
const countries = [
    { name: 'Finland', city: 'Helsinki' },
    { name: 'Sweden', city: 'Stockholm' },
    { name: 'Denmark', city: 'Copenhagen'},
    { name: 'Norway', city: 'Oslo' },
    { name: 'Iceland', city: 'Reykjavík'},
]
countries.map((country)=><p>{country.name}: {country.city}</p>)
// when we check the html it displays somethins as such 
<ul><p>Finland: Helsinki</p><p>Sweden: Stockholm</p><p>Denmark: Copenhagen</p><p>Norway: Oslo</p><p>Iceland: Reykjavík</p></ul>
```
