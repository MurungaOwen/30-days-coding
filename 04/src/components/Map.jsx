export default function Product(){
    const countries = [
        { name: 'Finland', city: 'Helsinki' },
        { name: 'Sweden', city: 'Stockholm' },
        { name: 'Denmark', city: 'Copenhagen'},
        { name: 'Norway', city: 'Oslo' },
        { name: 'Iceland', city: 'Reykjavík'},
      ]
    return (
        <>
            <div className="container">
                <ul>
                    {countries.map((country)=><p>{country.name}: {country.city}</p>)}
                </ul>
            </div>
        </>
    )
}