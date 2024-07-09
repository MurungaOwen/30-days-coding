import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import profile from "./assets/man.jpg"
import User from "./components/User.jsx"
import Product from "./components/Map.jsx"
export default function App() {
  return (
    <>
      
      {/* <Navbar title="Hood"/> */}
      <User desc="Fullstack developer , Lets get you Wings on the internet"
        username="Developer Profile"
        stack={['Mongo DB', 'SQL', 'Redis', 'Nodejs', 'python', 'Django']}
        img={profile}
      />
      <Product/>
    </>
  )
}
